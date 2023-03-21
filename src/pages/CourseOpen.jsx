import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { getCoursesData } from '../services/dataFirebaseService'

const CourseOpen = () => {
    const location = useLocation()
    const currentCourse = location.pathname.split('/')[2]
    // Loaders
    const courseFetchStatus = useSelector((state) => state.course.loading)//idle, pending, fulfilled, rejected
    // Data
    const courseData = useSelector((state) => state.course.allCourses?.find((course) => course.id === currentCourse))
    console.log(courseData);
    // Get courses data always on page load
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (courseFetchStatus === "idle") {
            getCoursesData()
        }
    }, [courseFetchStatus])

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    return (
        <>
            <MainLayout props="Curso">
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
                                <div>
                                    <h1 className='text-primary-azulCeleste5 text-xl font-medium'>{courseData?.title}</h1>
                                    {courseData?.pages[currentPage] &&
                                        <div key={courseData?.pages[currentPage].page}>
                                            <h2 className='text-primary-azulCeleste5 text-lg font-medium'>{courseData?.pages[currentPage].title}</h2>
                                            {courseData?.pages[currentPage].content.map((content, index) => (
                                                <div key={index}>
                                                    <h3 className='text-primary-azulCeleste5 text-base font-medium'>{content.title}</h3>
                                                    <img src={content.image} alt="" />
                                                    <p>{content.text}</p>

                                                </div>
                                            ))}
                                            <div className='vid'>
                                                {courseData?.pages[currentPage].video && <iframe width="560" height="315" src={courseData?.pages[currentPage].video + "?autoplay=1"} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>}         
                                            </div>
                                            <p>Pruebdda</p>
                                        </div>
                                    }
                                </div>
                                < div className="btn-group grid grid-cols-2">
                                    <button className="btn btn-outline" onClick={handlePreviousPage}>Previous page</button>
                                    <button className="btn btn-outline" onClick={handleNextPage}>Next</button>
                                </div>
                            </>
                        )
                }
            </MainLayout>
        </>
    )
}

export default CourseOpen