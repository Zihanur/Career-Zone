import React from "react";

const Blog = () => {
  return (
    <div className="my-container flex flex-col gap-5 border border-gray-400 rounded-md p-5">
      <div>
        <h2 className="font-bold text-xl">When should you use Context API?</h2>
        <p className="text-lg">
          When we have data that needs to be shared multiple components. Then If
          we find ourself passing props down through several levels of the
          component tree, Context API can help simplify our code and reduce the
          amount of boilerplate.When i have global settings or configuration
          that needs to be available throughout the app. When i have user
          authentication data that needs to be available to multiple components.
          Context API can help you manage user authentication state and make it
          easy to check whether a user is logged in or not.
        </p>
      </div>
      <hr className="border border-gray-200" />
      <div>
        <h2 className="font-bold text-xl">What is custom Hooks?</h2>
        <p className="text-lg">
          Custom Hooks is a feature of React.js that allows to create reusable
          logic that can be shared across multiple components. Custom Hooks are
          JavaScript functions that start with the word "use" and can use
          built-in React hooks, such as useState, useEffect, useContext, and
          others. With Custom Hooks, i can extract common functionality that we
          use in your components. This makes our code more modular, easier to
          read, and less repetitive. Custom Hooks can also help avoid code
          duplication and reduce the amount of boilerplate code in our
          application.
        </p>
      </div>
      <hr className="border border-gray-200" />
      <div>
        <h2 className="font-bold text-xl">What is useRef?</h2>
        <p className="text-lg">
          useRef is a built-in hook in React.js that allows you to create a
          mutable reference to a DOM element or a value that persists across
          re-renders. useRef returns a mutable ref object, which can hold any
          value, and it can be used to access or manipulate a DOM element
          directly.
        </p>
      </div>
      <hr className="border border-gray-200" />
      <div>
        <h2 className="font-bold text-xl">What is useMemo?</h2>
        <p className="text-lg">
          useMemo is a built-in hook in React.js that allows you to memoize the
          result of a function call and avoid unnecessary re-computations.
          useMemo returns a memoized value that is only recomputed when the
          dependencies of the function change.
        </p>
      </div>
    </div>
  );
};

export default Blog;
