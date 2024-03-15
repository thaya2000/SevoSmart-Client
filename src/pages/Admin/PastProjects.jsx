import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";

const PastProjects = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project 1', images: [image1, image2], description: 'Description of Project 1' },
        { id: 2, name: 'Project 2', images: [image3, image1], description: 'Description of Project 2' },
        { id: 3, name: 'Project 1', images: [image1, image2], description: 'Description of Project 1' },
        { id: 4, name: 'Project 2', images: [image3, image1], description: 'Description of Project 2' },
        // Add more projects as needed
    ]);

    const handleDeleteProject = (projectId) => {
        setProjects(projects.filter(project => project.id !== projectId));
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
                            <th className="w-1/4 px-4 py-2 border">Project Name</th>
                            <th className="w-1/4 px-4 py-2 border">Project Images</th>
                            <th className="w-1/4 px-4 py-2 border">Project Description</th>
                            <th className="w-1/4 px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {projects.map(project => (
                            <tr key={project.id} className="bg-gray-700">
                                <td className="border px-4 py-2" style={{ verticalAlign: "top" }}>{project.name}</td>
                                <td className="border px-4 py-2 flex flex-row" style={{ verticalAlign: "top" }}>
                                    {project.images.map((image, index) => (
                                        <img key={index} src={image} alt={`Project ${index + 1}`} className="h-16 object-cover rounded-lg mx-2" style={{ width: 'auto' }} />
                                    ))}
                                </td>
                                <td className="border px-4 py-2" style={{ verticalAlign: "top" }}>{project.description}</td>
                                <td className="border px-4 py-2 flex items-center" style={{ verticalAlign: "top" }}>
                                    <Link
                                        to={`/edit-project/${project.id}`}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mr-2 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                                        onClick={() => handleDeleteProject(project.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PastProjects;
