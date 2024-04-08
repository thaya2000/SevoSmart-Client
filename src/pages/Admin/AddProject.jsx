import React, { useState } from 'react';

const AddProject = ({ history }) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectImages, setProjectImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    const handleAddProject = () => {
        // Here you can perform any necessary validation before adding the project
        // For example, checking if all required fields are filled

        // Construct the project object
        const newProject = {
            id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID (replace this with your own ID generation logic)
            name: projectName,
            description: projectDescription,
            images: imageUrls
        };

        // Here you can add the new project to your data store
        // For example, by calling an API or updating a state in a parent component

        // After adding the project, you can navigate back to the past projects page
        history.push('/past-projects');
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // For each selected image file, create a URL and add it to the imageUrls state
        Promise.all(files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.addEventListener('load', (ev) => {
                    resolve(ev.target.result);
                });

                reader.addEventListener('error', reject);

                reader.readAsDataURL(file);
            });
        }))
            .then(images => {
                setProjectImages(files);
                setImageUrls(images);
            });
    };

    return (
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Add Project</h1>

            <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Project Name</label>
                <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="bg-white rounded-lg px-4 py-2" />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Project Description</label>
                <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} className="bg-white rounded-lg px-4 py-2" />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Project Images</label>
                <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-2" />
                <div className="flex flex-wrap">
                    {imageUrls.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Project ${index + 1}`} className="w-40 h-40 object-cover rounded-lg mx-2 mb-2" />
                    ))}
                </div>
            </div>


            <button onClick={handleAddProject} className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                Add Project
            </button>
        </div>
    );
};

export default AddProject;
