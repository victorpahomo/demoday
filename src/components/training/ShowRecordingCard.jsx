function ShowRecordingCard({ data }) {
    console.log(data);
    return (
      <div className="flex flex-col flex-wrap w-full gap-3">
        {data.map((session) => (
          <div key={session.title} className="w-full">
            <div className="bg-white shadow-sm rounded-lg text-slate-600 p-4">
              <ul className="list-disc list-inside">
                <h3 className="text-lg font-medium mb-2">{session.title}</h3>
                <li className="text-gray-600">{session.description}</li>
                <li className="text-gray-600">Author: {session.author}</li>
                <li className="text-gray-600">Date: {session.date}</li>
                <li className="text-cyan-600">
                  <a href={session.url} target="_blank" rel="noopener noreferrer">
                    Ver clase
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ShowRecordingCard;
  