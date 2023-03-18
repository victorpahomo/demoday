function ShowCurriculumCard({ data }) {
    return (
        <div className="flex flex-col flex-wrap w-full gap-3">
            {data.subjects.map((subject) => (
                <div key={subject.session} className=" w-full">
                    <div className="bg-white  shadow-sm rounded-lg text-slate-600 p-4">
                        <ul className="list-disc list-inside">
                            <h3 className="text-lg font-medium mb-2">{subject.title}</h3>
                            {subject.links.map((link) => (
                                <h3 key={link.url} className="mb-1 text-cyan-600">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.description}
                                    </a>
                                </h3>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShowCurriculumCard;