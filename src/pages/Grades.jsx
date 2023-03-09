import React from 'react'
import MainLayout from '../layout/MainLayout'
import Table from '../components/Table'
const Grades = () => {
  return (
    <div className=''>
      <MainLayout props="Notas">
        <div id='descriptionGrades' className="text-center mb-10">
          <h1 className="text-xl">Lorem ipsum dolor sit</h1>
          <p> amet consectetur adipisicing elit. Sequi, doloribus voluptates. Fuga saepe debitis id vero itaque voluptates magni aliquid qui, labore dolores? Molestiae officiis aliquam neque dolor. Maiores, at.</p>
        </div>
        <Table />
      </MainLayout>
    </div>
  )
}

export default Grades