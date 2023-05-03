/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='items-center'>
      <div className='container  items-center px-5 mx-auto my-5'>
        
        <div className=' text-center'>
          <h2 >
            <span>Error</span> {status || 404}
          </h2>
          <p >
            {error?.message}
          </p>
          <Link to='/'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage