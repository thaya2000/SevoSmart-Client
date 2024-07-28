import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";

const AddNews = () => {
  const [loading, setLoading] = useState(false);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [newsPublishDate, setNewsPublishDate] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true to show the loading spinner

    try {
      const formData = new FormData();
      formData.append("newsTitle", newsTitle);
      formData.append("newsContent", newsContent);
      formData.append("newsPublishDate", newsPublishDate);
      if (image) {
        formData.append("Image", image);
      }

      const { data } = await axios.post("/api/v1/admin/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false); // Set loading to false once request is complete

      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("News uploaded successfully");
        navigate("/news-admin");
      }
    } catch (err) {
      console.error(err);
      setLoading(false); // Set loading to false on error
      toast.error("News upload failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div>
      <div className="admin-panel">
        <div className="admin-sidebar bg-gray-800 w-64 p-4 text-white">
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
          <h1 className="admin-tableh">Add News</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col justify-center md:flex-row">
              <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
                News Title
              </label>
              <input
                type="text"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
                placeholder="Enter news title"
              />
            </div>
            <div className="mb-6 flex flex-col justify-center md:flex-row">
              <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
                Publish Date
              </label>
              <input
                type="date"
                value={newsPublishDate}
                onChange={(e) => setNewsPublishDate(e.target.value)}
                className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
              />
            </div>
            <div className="mb-6 flex flex-col justify-center md:flex-row">
              <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
                News Content
              </label>
              <textarea
                value={newsContent}
                onChange={(e) => setNewsContent(e.target.value)}
                className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
                placeholder="Enter news content"
                rows={8}
                cols={50}
              ></textarea>
            </div>
            <div className="mb-6 flex flex-col justify-center md:flex-row">
              <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
                News Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1 form-input"
              />
            </div>
            {imagePreview && (
              <div className="mb-6 flex justify-center">
                <img
                  src={imagePreview}
                  alt="News Preview"
                  className="w-1/5 mx-2 mb-4 rounded"
                />
              </div>
            )}
            <div className="my-8 flex justify-center">
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                  "Add News"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
