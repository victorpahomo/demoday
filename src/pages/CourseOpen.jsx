import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { getCoursesData } from '../services/dataFirebaseService'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools'


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
    // ACE Editor
    let [code, setCode] = useState("<!DOCTYPE html>\n<html lang='es'>\n  <head>\n    <meta charset='UTF-8' />\n    <meta name='viewport' content='width=device-width, initial-scale=1.0' />\n    <title>CodeLMS</title>\n  </head>\n  <body>\n    <section id='root'>\n      <!-- Escribe aquí tu primera etiqueta \"Hola mundo\" -->\n    </section>\n  </body>\n</html>\n");

    // Get courses data always on page load
    useEffect(() => {
        if (courseFetchStatus === "idle") {
            dispatch(getCoursesData());
        }
    }, [courseFetchStatus])


    const handleCodeChange = (newValue) => {
        setCode(newValue);
    }
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
                                <div className='container mx-auto'>
                                    <div className='flex justify-between items-center sticky w-full pt-1'>
                                        <h1 className='text-primary-Azul5 text-2xl font-medium pb-2'>{courseData?.pages[currentPage].title}</h1>
                                        < div className="btn-group flex  justify-end w-1/6 ">
                                            {currentPage > 0 && <button className="btn btn-outline bg-slate-200 text-primary-azulCeleste5 border-slate-300" onClick={handlePreviousPage}>Anterior</button>}
                                            {currentPage + 1 < courseData?.pages.length && <button className="btn btn-outline bg-slate-200 text-primary-azulCeleste5 border-slate-300" onClick={handleNextPage}>Siguiente</button>}
                                        </div>
                                    </div>
                                    {courseData?.pages[currentPage] &&
                                        <div key={courseData?.pages[currentPage].page} className="flex flex-col gap-1">
                                            <div className='vid flex justify-center'>
                                                {courseData?.pages[currentPage].video && <iframe className='rounded-lg w-3/5 h-96' src={courseData?.pages[currentPage].video} frameborder="0" allow="encrypted-media" allowFullScreen></iframe>}
                                            </div>
                                            {courseData?.pages[currentPage].content.map((content, index) => (
                                                <div key={index} className="flex flex-col gap-1 pl-2">
                                                    <h3 className='text-primary-AzulVerde3 text-lg font-semibold'>{content.title}</h3>
                                                    <p className='text-primary-azulCeleste5'>{content.text}</p>
                                                    <img src={content.image} className="w-1/2 rounded-md" alt="" />
                                                    {content.code &&
                                                        <div className='flex w-full'>
                                                            <div style={{
                                                                height: "100%",
                                                                width: "50%"
                                                            }}>
                                                                <AceEditor
                                                                    width='100%'
                                                                    value={code}
                                                                    onChange={value => {
                                                                        setCode(value);
                                                                    }}
                                                                    mode="html"
                                                                    theme="monokai"
                                                                    name="my-editor"
                                                                    editorProps={{ $blockScrolling: true }}
                                                                    fontSize={14}
                                                                    showPrintMargin={true}
                                                                    showGutter={true}
                                                                    highlightActiveLine={true}
                                                                    setOptions={{
                                                                        enableBasicAutocompletion: true,
                                                                        enableLiveAutocompletion: true,
                                                                        enableSnippets: true,
                                                                        showLineNumbers: true,
                                                                        tabSize: 2,
                                                                    }}
                                                                />
                                                            </div>
                                                            <iframe src={'data:text/html;charset=utf-8,' + encodeURI(code)} className='w-1/2 mr-3 border border-primary-azulCeleste5 border-opacity-30' frameborder="0"></iframe>
                                                        </div>
                                                    }
                                                </div>
                                            ))}
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