import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import "./AddProject.css"; // Make sure to import your CSS file

const AddProject = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Images:", images);
  }, [title, description, images]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const projectData = new FormData();
      projectData.append("projectName", title);
      projectData.append("description", description);
      images.forEach((image, index) => {
        projectData.append(`Image`, image);
      });

      const { data } = await axios.post(
        "https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/past-project",
        projectData
      );

      setLoading(false);

      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Project is successfully added.");
        navigate("/past-projects");
      }
    } catch (err) {
      console.log(err);
      toast.error("Project creation failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);

    // Generate image previews
    const previews = selectedImages.map((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
      });
    });

    Promise.all(previews).then((imagesPreviews) => {
      setImagePreviews(imagesPreviews);
    });
  };

  return (
    <div className="admin-panel">
      <div className="admin-sidebar bg-gray-800 w-100% p-4 text-white">
        <Link to="/admin-panel">
          <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        </Link>
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
              rows={8}
              cols={50}
            ></textarea>
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Project Images
            </label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
              className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
            />
          </div>
          {imagePreviews.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Project Preview ${index + 1}`}
                  className="w-1/5 mx-2 mb-4"
                />
              ))}
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
