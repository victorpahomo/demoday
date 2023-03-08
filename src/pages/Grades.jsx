import React from 'react'
import MainLayout from '../layout/MainLayout'
import Table from '../components/Table'
const Grades = () => {
  return (
    <div className='h-screen'>
      <MainLayout>
        <div className='bg-white p-10'>
          <Table />
        </div>
      </MainLayout>
    </div>
  )
}

export default Grades