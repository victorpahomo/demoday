import { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import ListCourses from '../components/courses/ListCourses'
import ListContributions from '../components/courses/ListContributions'
import { getCoursesData, getContributionsData } from '../services/dataFirebaseService'
import { useDispatch, useSelector } from 'react-redux'
import Searcher from '../components/courses/Searcher'
const Courses = () => {
  // This component needs Contributions and Courses data
  const dispatch = useDispatch();
  // Loaders
  const courseFetchStatus = useSelector((state) => state.course.loading)//idle, pending, fulfilled, rejected
  const contributionsFetchStatus = useSelector((state) => state.contribution.loading)//idle, pending, fulfilled, rejected
  // Data
  const objCourses = useSelector((state) => state.course?.allCourses)
  const arrayContributions = useSelector((state) => state.contribution?.allContributions)

  // Get courses data always on page load
  useEffect(() => {
    if (courseFetchStatus === "idle") {
      dispatch(getCoursesData());
    }
  }, [courseFetchStatus])
  // Get contributions data always on page load
  useEffect(() => {
    if (contributionsFetchStatus === "idle") {
      dispatch(getContributionsData());
    }
  }, [contributionsFetchStatus])

  return (
    <div className=''>
      <MainLayout props="Cursos y Aportes">
        {courseFetchStatus === "pending" || contributionsFetchStatus === "pending" ? //Loading 
          (
            <h1>Cargando...</h1>
          )
          :
          courseFetchStatus === "rejected" || contributionsFetchStatus === "rejected" ?//Error
            (<h1>Hubo un error</h1>)
            : //Success
            (
              <>

                  <Searcher />
                  <h2 className="font-bold text-2xl text-primary-AzulVerde3">Cursos</h2>
                  {courseFetchStatus === "fulfilled" && <ListCourses courses={objCourses} />}
                  <h2 className="font-bold text-2xl text-primary-AzulVerde3 py-4">Aportes</h2>
                  {contributionsFetchStatus === "fulfilled" && <ListContributions contributions={arrayContributions} />}

              </>
            )
        }
      </MainLayout>
    </div>
  )
}
export default Courses