import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";

const EditPastProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    productImageURL: [],
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`/api/v1/admin/past-project/${id}`);
      setLoading(false);
      const projectData = result.data;
      setProject({
        projectName: projectData.projectName,
        description: projectData.description,
        productImageURL: projectData.productImageURL || [],
      });
      setImagePreviews(projectData.productImageURL);
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
      formData.append("projectName", project.projectName);
      formData.append("description", project.description);

      project.productImageURL.forEach((url) =>
        formData.append("productImageURL", url)
      );

      if (imageFiles.length > 0) {
        imageFiles.forEach((file) => formData.append("Image", file));
      } else {
        const emptyFile = new Blob([], { type: "application/octet-stream" });
        formData.append("Image", emptyFile);
      }

      await axios.put(`/api/v1/admin/past-project/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Project successfully updated.");
      navigate("/past-projects");
    } catch (err) {
      console.error(err);
      toast.error("Project update failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setImageFiles(selectedFiles);
    setImagePreviews(imageUrls);
  };

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="flex">
          <div className="bg-gray-800 w-100% p-4 text-white">
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
          <div className="p-8 bg-white flex-1">
            <h1 className="text-4xl font-medium mb-8 text-blue-900 flex justify-center">
              Edit Past Project
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={project.projectName}
                  onChange={onInputChange}
                  className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                />
              </div>
              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={project.description}
                  onChange={onInputChange}
                  className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                  rows={8}
                  cols={50}
                />
              </div>
              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
                  Project Images
                </label>
                <input
                  type="file"
                  name="images"
                  onChange={handleImageChange}
                  multiple
                  accept="image/*"
                  className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                />
              </div>
              <div className="mb-4 flex flex-wrap justify-center">
                {imagePreviews &&
                  imagePreviews.map((preview, index) => (
                    <img
                      key={index}
                      src={preview}
                      alt={`Project Preview ${index + 1}`}
                      className="w-40 mx-2 mb-2"
                    />
                  ))}
              </div>
              <div className="my-8 flex justify-center">
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-grey text-white font-bold py-2 px-4 rounded"
                >
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPastProject;
