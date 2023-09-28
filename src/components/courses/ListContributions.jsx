const ListCourses = ({ contributions }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                {Object.entries(contributions).map(([key, value]) => (
                    <div className="card shadow-md bg-slate-200 text-primary-Azul5" key={key}>
                        <div className="p-4">
                            {/* Título del curso */}
                            <h2 className="card-title pb-4">{value.title}</h2>
                            {/* Categoría del curso */}
                            <h3>Categoría: {value.category}</h3>
                            {/* Autor del curso */}
                            <h3>Aporte de: {value.author}</h3>
                            {/* Descripción del curso */}
                            <p>{value.description}</p>
                            <div className="card-actions justify-end">
                                {/* Botón para leer más */}
                                <button className="py-2 px-3 bg-primary-AzulVerde4 text-white rounded-xl">
                                    Leer mas
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListCourses
