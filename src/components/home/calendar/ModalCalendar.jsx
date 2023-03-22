import { useState } from 'react'

const ModalCalendar = ({ edit, event, handleSave, handleClose }) => {
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    return (
        <>
            {!edit ? (<div className="fixed z-50 flex items-center justify-center inset-0 overflow-y-auto">
                <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div
                                    className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-10 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                                    onClick={handleClose}
                                >
                                    <svg
                                        className="h-6 w-6 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-headline"
                                    >
                                        Agregar evento
                                    </h3>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="title"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Título
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
                                            onChange={handleTitleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="startTime"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Hora
                                        </label>
                                        <select
                                            type=""
                                            name="startTime"
                                            id="startTime"
                                            onChange={handleStartTimeChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="00">00:00</option>
                                            <option value="01">01:00</option>
                                            <option value="02">02:00</option>
                                            <option value="03">03:00</option>
                                            <option value="04">04:00</option>
                                            <option value="05">05:00</option>
                                            <option value="06">06:00</option>
                                            <option value="07">07:00</option>
                                            <option value="08">08:00</option>
                                            <option value="09">09:00</option>
                                            <option value="10">10:00</option>
                                            <option value="11">11:00</option>
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                            <option value="23">23:00</option>
                                        </select>
                                    </div>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="description"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Descripción
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => handleSave(title, startTime, description)}
                            >
                                Guardar
                            </button>
                            <button

                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleClose}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
                :
                (<div className="fixed z-50 flex items-center justify-center inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-10 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                                        onClick={handleClose}
                                    >
                                        <svg
                                            className="h-6 w-6 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline"
                                        >
                                            Editar evento
                                        </h3>
                                        <div className="mt-2 flex flex-col items-center gap-4">
                                        <div>
                                                <label
                                                    htmlFor="hour"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Hora
                                                </label>
                                                <input
                                                    type="text"
                                                    name="hour"
                                                    id="hour"
                                                    value={ new Date (Date.parse(event.extendedProps.start)).toLocaleDateString('es-ES', { hour: '2-digit', minute: '2-digit' }) }
                                                    onChange={handleTitleChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="title"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Título
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    value={event.title}
                                                    onChange={handleTitleChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="description"
                                                    className="block text-gray-700 font-bold mb-2"
                                                >
                                                    Descripción
                                                </label>
                                                <input
                                                    type="text"
                                                    name="description"
                                                    id="titdescriptionle"
                                                    value={event.extendedProps.description}
                                                    onChange={handleTitleChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleSave}
                                >
                                    Guardar
                                </button>
                                <button

                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleClose}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>

    )
}

export default ModalCalendar