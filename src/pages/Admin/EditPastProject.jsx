import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditPastProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] = useState({
    name: "",
    description: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const { name, description, images } = project;

  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/admin/pastproject/${id}`);
      setProject(result.data);
      setImagePreviews(result.data.images.map(image => URL.createObjectURL(image)));
    } catch (error) {
      console.error("Error loading project:", error);
    }
  };

  const onInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      images.forEach(image => formData.append('images', image));
      await axios.put(`http://localhost:8080/api/v1/admin/pastproject/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success("Project is successfully updated.");
      navigate("/past-projects");
    } catch (err) {
      console.error(err);
      toast.error("Project update failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setProject({ ...project, images: selectedImages });

    const previews = [];
    selectedImages.forEach(image => {
      previews.push(URL.createObjectURL(image));
    });
    setImagePreviews(previews);
  };

  return (
    <div className="p-8 bg-indigo-950">
      <h1 className="text-4xl font-medium mb-8 text-white flex justify-center">Edit Past Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Project Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter project name"
          />
        </div>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Project Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={onInputChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter project description"
            rows={8} // Adjust the number of rows
            cols={50} // Adjust the number of columns
          />
        </div>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Project Images
          </label>
          <input
            type="file"
            name="images"
            onChange={handleImageChange}
            multiple // Allow multiple file selection
            accept="image/*" // Specify accepted file types (e.g., images)
            className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>
        <div className="mb-4 flex flex-wrap justify-center">
                    {imagePreviews && imagePreviews.map((preview, index) => (
                        <img key={index} src={preview} alt={`Product Preview ${index + 1}`} className="w-40 mx-2 mb-2" />
                    ))}
                </div>
        
        <div className="my-8 flex justify-center">
          <button
            type="submit"
            className="bg-cyan-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPastProject;
