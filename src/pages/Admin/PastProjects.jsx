import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";

const PastProjects = () => {

    const [PastProjects, setPastProjects] = useState([]);
    const [deletePastProjectId, setDeletePastProjectId] = useState(null);
    const [serialNumbers, setSerialNumbers] = useState({});

    const { id } = useParams();

    useEffect(() => {
        loadPastProjects();
    }, []);

    const loadPastProjects = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/admin/pastprojects");
            setPastProjects(result.data);
            generateSerialNumbers(result.data);
        } catch (error) {
            console.error('Error loading past projects:', error);
        }
    };

    const generateSerialNumbers = (PastProjects) => {
        const serials = {};
        PastProjects.forEach((PastProject, index) => {
            serials[PastProject.id] = index + 1;
        });
        setSerialNumbers(serials);
    };

    const handleDeletePastProject = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/admin/pastproject/${id}`);
            toast.success("Past project is successfully deleted.");
            loadPastProjects();
            setDeletePastProjectId(null);
        } catch (error) {
            toast.error('Error deleting Past project:', error);
        }
    };
    return (
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Past Projects</h1>

            <div className="my-4">
                <Link
                    to="/add-project"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                    Add Project
                </Link>
            </div>

            <div className="overflow-x-auto flex justify-center">
                <table className="w-full table-auto">
                    <thead>
                        <tr className='text-white bg-gray-800'>
                            <th className="w-auto px-4 py-2 border">Serial No</th>
                            <th className="w-auto px-4 py-2 border">Project Name</th>
                            <th className="w-auto px-4 py-2 border">Project Images</th>
                            <th className="w-auto px-4 py-2 border">Project Description</th>
                            <th className="w-auto px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {PastProjects.map(project => (
                            <tr key={project.id} className="bg-gray-700">
                                <td className="border px-4 py-2">{serialNumbers[project.id]}</td>
                                <td className="border px-4 py-2">{project.name}</td>
                                <td className="border px-4 py-2">
                                    <div className="flex flex-wrap justify-center">
                                        {project.images.map((image, index) => (
                                            <img key={index} src={`data:image/jpeg;base64, ${image}`} alt={`Project ${index + 1}`} className="h-16 object-cover rounded-lg m-2" style={{ width: 'auto' }} />
                                        ))}
                                    </div>
                                </td>
                                <td className="border px-4 py-2" >{project.description}</td>
                                <td className="border px-4 py-2">
                                    <div className='flex flex-row justify-center'>
                                    <Link
                                        to={`/edit-project/${project.id}`}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mr-2 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                                        onClick={() => setDeletePastProjectId(project.id)}
                                    >
                                        Delete
                                    </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {deletePastProjectId && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Delete Project
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete this project?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => handleDeletePastProject(deletePastProjectId)}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setDeletePastProjectId(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default PastProjects;
