import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { userAuth } from "../../context/authContext";
import "./AddProject.css"; // Make sure to import your CSS file

const AddProject = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [auth, setAuth] = userAuth();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);
  }, [title, description, image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const projectData = new FormData();
      projectData.append("title", title);
      projectData.append("description", description);
      projectData.append("image", image);

      const { data } = await axios.post(
        `/admin/addProject/${auth.user.id}`,
        projectData
      );

      setLoading(false);

      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Project is successfully added.");
        navigate("/admin/projects");
      }
    } catch (err) {
      console.log(err);
      toast.error("Project creation failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Generate image preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/products">Accessories</Link>
          </li>
          <li>
            <Link to="/past-projects">Past Projects</Link>
          </li>
          <li>
            <Link to="/news-admin">News</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <h1 className="admin-tableh">Add Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
              placeholder="Enter project title"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
              placeholder="Enter project description"
            ></textarea>
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Project Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
            />
          </div>
          {imagePreview && (
            <div className="mb-6 flex flex-col justify-center md:flex-row">
              <img
                src={imagePreview}
                alt="Project Preview"
                className="w-1/5 mx-auto"
              />
            </div>
          )}
          <div className="my-8 flex justify-center">
            <button className="bg-red-700 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded">
              Add Project
            </button>
          </div>
        </form>
      </div>
      </div>
    );
};

export default AddProject;
