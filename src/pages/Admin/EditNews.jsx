import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import RambousLoader from "../../routes/RambousLoader";

const EditNews = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [news, setNews] = useState({
    newsTitle: "",
    newsContent: "",
    newsPublishDate: "",
    Image: null,
  });

  const [imagePreview, setImagePreview] = useState(""); // For displaying the image preview

  const { newsTitle, newsContent, newsPublishDate, Image } = news;

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news/${id}`);
      setLoading(false);
      const newsData = result.data;

      setNews({
        newsTitle: newsData.newsTitle,
        newsContent: newsData.newsContent,
        newsPublishDate: newsData.newsPublishDate,
        Image: newsData.Image || null,
      });

      // Set image preview to the URL of the current image
      if (newsData.Image) {
        setImagePreview(`https://sevosmarttech-efce83f08cbb.herokuapp.com/${newsData.Image}`);
      }

    } catch (error) {
      console.error("Error loading news:", error);
    }
  };

  const onInputChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('newsTitle', newsTitle);
      formData.append('newsContent', newsContent);
      formData.append('newsPublishDate', newsPublishDate);
      if (Image) {
        formData.append('Image', Image);
      }

      await axios.put(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSubmitting(false);
      toast.success("News is successfully updated.");
      navigate("/news-admin");
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      toast.error("News update failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNews({ ...news, Image: selectedImage });

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-gray-800 w-64 p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <ul className="space-y-4">
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/admin/products">Accessories</Link></li>
              <li><Link to="/past-projects">Past Projects</Link></li>
              <li><Link to="/news-admin">News</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 bg-white">
            <h1 className="text-4xl font-medium mb-8 text-blue-900 text-center">Edit News</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-2 md:mb-0 md:w-1/4">
                  News Title
                </label>
                <input
                  type="text"
                  name="newsTitle"
                  value={newsTitle}
                  onChange={onInputChange}
                  className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                />
              </div>
              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-2 md:mb-0 md:w-1/4">
                  Publish Date
                </label>
                <input
                  type="date"
                  name="newsPublishDate"
                  value={newsPublishDate}
                  onChange={onInputChange}
                  className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                />
              </div>

              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-2 md:mb-0 md:w-1/4">
                  News Content
                </label>
                <textarea
                  name="newsContent"
                  value={newsContent}
                  onChange={onInputChange}
                  className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                  rows={8}
                  cols={50}
                />
              </div>

              <div className="mb-4 flex flex-col justify-center md:flex-row">
                <label className="block text-blue-900 text-m font-bold mb-2 md:mb-0 md:w-1/4">
                  News Image
                </label>
                <input
                  type="file"
                  name="images"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
                />
              </div>
              <div className="mb-4 flex justify-center">
                {imagePreview && (
                  <img src={imagePreview} alt="News Preview" className="w-40 mx-2 mb-2 rounded" />
                )}
              </div>

              <div className="my-8 flex justify-center">
                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={submitting}
                >
                  {submitting ? (
                    <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                  ) : (
                    "Update News"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditNews;
