import React from 'react'
import MainLayout from '../layout/MainLayout'

const Courses = () => {
  return (
    <div className='h-screen'>
      <MainLayout>
        <div className='bg-white p-10'>
          <ListCourses />
        </div>
      </MainLayout>
    </div>
  )
}

export default Courses