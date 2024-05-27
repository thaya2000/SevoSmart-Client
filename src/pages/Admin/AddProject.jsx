import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddProject = () => {
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Name:", projectName);
        console.log("Description:", description);
        console.log("Images:", images);
    }, [projectName, description, images]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("projectName", projectName);
            formData.append("description", description);
            for (let i = 0; i < images.length; i++) {
                formData.append("Image", images[i]); // Append each selected image file
            }

            const { data } = await axios.post(
                "https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/past-project",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            console.log(data);
            if (data?.error) {
                toast.error(data.error);
            } else {
                toast.success("Project uploaded successfully");
                navigate("/past-projects");
            }
        } catch (err) {
            console.error(err);
            toast.error("Project upload failed. Try again.");
        }
    };

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        const imagePreviews = [];

        selectedImages.forEach((image) => {
            const reader = new FileReader();
            reader.onload = () => {
                imagePreviews.push(reader.result);
                if (imagePreviews.length === selectedImages.length) {
                    setImagePreviews(imagePreviews);
                }
            };
            reader.readAsDataURL(image);
        });

        setImages(selectedImages);
    };

    return (
        <div className="p-8 bg-white">
            <h1 className="text-6xl font-medium mb-4 text-blue-900">Add Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="text-blue-900 mb-2">Project Name</label>
                    <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="bg-white rounded-lg px-4 py-2" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-blue-900 mb-2">Project Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="bg-white rounded-lg px-4 py-2" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-blue-900 mb-2">Project Images</label>
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-2" />
                </div>
                <div className="mb-4 flex flex-wrap justify-center">
                    {imagePreviews.map((preview, index) => (
                        <img key={index} src={preview} alt={`Project Preview ${index + 1}`} className="w-1/5 mx-2 mb-2" />
                    ))}
                </div>

                <button className="bg-red-700 hover:bg-grey text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                    Add Project
                </button>
            </form>
        </div>
    );
};

export default AddProject;
