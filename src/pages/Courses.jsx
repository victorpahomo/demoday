import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import ListCourses from '../components/courses/ListCourses'
import { getCoursesData } from '../services/dataFirebaseService'
import { useDispatch, useSelector } from 'react-redux'
const Courses = () => {
  const dispatch = useDispatch();
  // Loaders
  const courseFetchStatus = useSelector((state) => state.course.loading)//idle, pending, fulfilled, rejected
  // Data
  const objCourses = useSelector((state) => state.course?.allCourses)

  // Get courses data
  useEffect(() => {
    if (courseFetchStatus === "idle") {
      dispatch(getCoursesData());
    }
  }, [courseFetchStatus])

  return (
    <div className=''>
      <MainLayout props="Cursos y Aportes">
        {courseFetchStatus === "pending" ? //Loading
          (
            <h1>Cargando...</h1>
          )
          :
          courseFetchStatus === "rejected" ?//Error
            (<h1>Hubo un error</h1>)
            : //Success
            (
              <>
                <div className='bg-white px-24 py-10'>
                  {courseFetchStatus === "fulfilled" && <ListCourses courses={objCourses} />}
                </div>
              </>
            )
        }
      </MainLayout>
    </div>
  )
}
export default Courses