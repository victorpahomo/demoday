import React from 'react'
import MainLayout from '../layout/MainLayout'
import ListCourses from '../components/ListCourses'
const Courses = () => {
  return (
    <div className=''>
      <MainLayout> 
        <div className='bg-white px-24 py-10'>
          <ListCourses />
        </div>
      </MainLayout>
    </div>
  )
}
export default Courses