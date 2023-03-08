import React from 'react'
import MainLayout from '../layout/MainLayout'
import Table from '../components/Table'
const Grades = () => {
  return (
    <div className=''>
      <MainLayout>
        <div className='bg-white px-24 py-10'>
          <Table />
        </div>
      </MainLayout>
    </div>
  )
}

export default Grades