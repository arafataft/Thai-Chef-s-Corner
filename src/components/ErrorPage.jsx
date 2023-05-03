/* eslint-disable no-unused-vars */
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='items-center'>
      <div className='container  items-center px-5 mx-auto m-5 '>
      <div className='d-flex justify-content-center align-items-center'>
      <Image src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?" alt="" height={400} />
      </div>
        
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