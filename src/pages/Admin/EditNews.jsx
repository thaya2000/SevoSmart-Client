import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditNews = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
      const result = await axios.get(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news/${id}`);
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
      toast.success("News is successfully updated.");
      navigate("/news-admin");
    } catch (err) {
      console.error(err);
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
    <div className="p-8 bg-indigo-950">
      <h1 className="text-4xl font-medium mb-8 text-white flex justify-center">Edit News</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
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
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
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
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
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
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
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
            <img src={imagePreview} alt="News Preview" className="w-40 mx-2 mb-2" />
          )}
        </div>
        
        <div className="my-8 flex justify-center">
          <button
            type="submit"
            className="bg-cyan-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update News
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNews;
