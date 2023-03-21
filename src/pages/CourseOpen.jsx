import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { getCoursesData } from '../services/dataFirebaseService'

const CourseOpen = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const currentCourse = location.pathname.split('/')[2]
    // Loaders
    const courseFetchStatus = useSelector((state) => state.course.loading)//idle, pending, fulfilled, rejected
    // Data
    const courseData = useSelector((state) => state.course.allCourses?.find((course) => course.id === currentCourse))
    // Get courses data always on page load
    const [currentPage, setCurrentPage] = useState(0);

    // Get courses data always on page load
    useEffect(() => {
        if (courseFetchStatus === "idle") {
            dispatch(getCoursesData());
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
            <MainLayout props={courseData?.title || "Curso"}>
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
                                    {courseData?.pages[currentPage] &&
                                        <div key={courseData?.pages[currentPage].page}>
                                            <div className='vid'>
                                                {courseData?.pages[currentPage].video && <iframe className='rounded-lg' width="560" height="315" src={courseData?.pages[currentPage].video} frameborder="0" allow="encrypted-media" allowFullScreen></iframe>}
                                            </div>
                                            <h1 className='text-primary-AzulVerde3 text-lg font-medium'>{courseData?.pages[currentPage].title}</h1>
                                            {courseData?.pages[currentPage].content.map((content, index) => (
                                                <div key={index}>
                                                    <h3 className='text-primary-azulCeleste5 text-base font-medium'>{content.title}</h3>
                                                    <img src={content.image} alt="" />
                                                    <p className='text-primary-Azul5'>{content.text}</p>

                                                </div>
                                            ))}
                                            <p>Pruebdda</p>
                                            < div className="btn-group grid w-1/4 grid-cols-2">
                                                <button className="btn btn-outline" onClick={handlePreviousPage}>Previous page</button>
                                                <button className="btn btn-outline" onClick={handleNextPage}>Next</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </>
                        )
                }
            </MainLayout>
        </>
    )
}

export default CourseOpen