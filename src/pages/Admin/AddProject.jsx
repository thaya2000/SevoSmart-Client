import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddProject = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Name:", name);
        console.log("Description:", description);
        console.log("images:", images);
    }, [name, description, images]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const PastProjectData = new FormData();
            PastProjectData.append("name", name);
            PastProjectData.append("description", description);
            for (let i = 0; i < images.length; i++) {
                PastProjectData.append("images", images[i]); // Append each selected image file
            }

            const { data } = await axios.post(
                "http://localhost:8080/api/v1/admin/pastproject",
                PastProjectData
            );
            console.log(data);
            if (data?.error) {
              toast.error(data.error);
            } else {
              toast.success("Project is uploaded successfully");
              navigate("/past-projects");
            }
        } catch (err) {
            console.log(err);
      toast.error("Project upload failed. Try again.");
        }
    };

    const handleImageChange = (e) => {
        const selectedImages = e.target.files;
        const imagePreviews = [];
        const newImages = [];

        // Loop through each selected image
        for (let i = 0; i < selectedImages.length; i++) {
            const reader = new FileReader();
            const selectedImage = selectedImages[i];

            // Read each image and push its data URL to the imagePreviews array
            reader.onload = () => {
                imagePreviews.push(reader.result);
                // If all images have been read, update the state with the array of previews
                if (imagePreviews.length === selectedImages.length) {
                    setImagePreviews(imagePreviews);
                }
            };

            reader.readAsDataURL(selectedImage);
            newImages.push(selectedImage); // Push the selected image to the newImages array
        }
        setImages(newImages); // Update the images state with the new array of images
    };

    return (
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Add Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">Project Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-white rounded-lg px-4 py-2" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">Project Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="bg-white rounded-lg px-4 py-2" />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">Project Images</label>
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-2" />
                </div>
                <div className="mb-4 flex flex-wrap justify-center">
                    {imagePreviews && imagePreviews.map((preview, index) => (
                        <img key={index} src={preview} alt={`Product Preview ${index + 1}`} className="w-1/5 mx-2 mb-2" />
                    ))}
                </div>

                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                    Add Project
                </button>
            </form>
        </div>
    );
};

export default AddProject;
