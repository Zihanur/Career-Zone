// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getjobCart();
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('applyJob-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getjobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('applyJob-cart', JSON.stringify(jobCart));
    }
}

const getjobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applyJob-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deletejobCart = () => {
    localStorage.removeItem('applyJob-cart');
}

export {
    addToDb,
    removeFromDb,
    getjobCart,
    deletejobCart
}