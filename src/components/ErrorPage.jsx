import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div className='h-full p-16 text-gray-900'>
      <div className='flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <EnvelopeIcon className='w-36 h-36 text-red-600' />
        <div className='max-w-md text-center'>
          <h2 className='font-bold text-9xl text-red-600'>
            "Error" {status}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='my-btn py-3 px-4'>
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ErrorPage;