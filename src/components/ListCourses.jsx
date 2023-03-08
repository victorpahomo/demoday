import React from 'react';

const ListCourses = () => {
    const courses = {
        "2023-html-1": {
            "title": "Curso inicial de HTML5",
            "description": "Aprende a crear páginas web con HTML5",
            "image": "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Kbu_OnGEVUCvfMPYnj191g.png",
            "hours": "4",
            "category": "html"
        },
        "2023-redux-1": {
            "title": "Curso avanzado de Redux",
            "description": "Aprende a usar Redux y Redux Toolkit",
            "image": "https://www.courses.tutorialswebsite.com/assets/front/img/category/react-redux-category.jpeg",
            "hours": "10",
            "category": "redux"
        },
        "2023-css-1": {
            "title": "Curso inicial de CSS3",
            "description": "Aprende a crear páginas web con CSS3",
            "image": "https://miro.medium.com/v2/resize:fit:336/1*nFj_gJtwus-ZVIwDE4oGrw.png",
            "hours": "4",
            "category": "css"
        },
        "2023-js-1": {
            "title": "Curso inicial de JavaScript",
            "description": "Aprende a crear páginas web con JavaScript",
            "image": "https://onlinecoursesgalore.com/wp-content/uploads/2018/01/best-javascript-programming-courses-online.jpg",
            "hours": "8",
            "category": "js"
        },
        "2023-react-1": {
            "title": "Curso inicial de React",
            "description": "Aprende a crear páginas web con React",
            "image": "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe",
            "hours": "15",
            "category": "react"
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {Object.values(courses).map((course) => (
                <div className="card w-80 h-80  shadow-xl bg-primary-azulCeleste1 text-primary-Azul5">
                    <figure><img src={course.image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{course.title}</h2>
                        <div className='flex justify-around'>
                            <div className="badge badge-outline">{course.category}</div>
                            <div className="badge badge-secondary">NEW</div>
                        </div>
                        <p>{course.description}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-primary-AzulVerde4 border-none hover:bg-primary-Azul5">Abrir curso</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListCourses;
