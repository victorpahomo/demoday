const Searcher = () => {
    return (
        <div className="form-control pb-8">
            <div className="input-group flex justify-center">
                <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered w-2/3 bg-slate-200 text-primary-azulCeleste5 focus:outline-none"
                />
                <button className="btn btn-square bg-gray-400 border-none text-white hover:bg-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Searcher