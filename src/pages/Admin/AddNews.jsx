import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddNews = () => {
    const [newsTitle, setNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [newsPublishDate, setNewsPublishDate] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        console.log("newsTitle:", newsTitle);
        console.log("newsContent:", newsContent);
        console.log("Image:", image);
    }, [newsTitle, newsContent, image]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("newsTitle", newsTitle);
            formData.append("newsContent", newsContent);
            formData.append("newsPublishDate", newsPublishDate);
            if (image) {
                formData.append("Image", image); 
            }

            const { data } = await axios.post(
                "https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news",
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
                toast.success("News uploaded successfully");
                navigate("/news-admin");
            }
        } catch (err) {
            console.error(err);
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
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Add News</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">News Title</label>
                    <input 
                        type="text" 
                        value={newsTitle} 
                        onChange={(e) => setNewsTitle(e.target.value)} 
                        className="bg-white rounded-lg px-4 py-2" 
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">Publish Date</label>
                    <input 
                        type="date" 
                        value={newsPublishDate} 
                        onChange={(e) => setNewsPublishDate(e.target.value)} 
                        className="bg-white rounded-lg px-4 py-2" 
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">News Content</label>
                    <textarea 
                        value={newsContent} 
                        onChange={(e) => setNewsContent(e.target.value)} 
                        className="bg-white rounded-lg px-4 py-2" 
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-white mb-2">News Image</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        className="mb-2" 
                    />
                </div>
                <div className="mb-4 flex justify-center">
                    {imagePreview && (
                        <img 
                            src={imagePreview} 
                            alt="News Preview" 
                            className="w-1/5 mx-2 mb-2" 
                        />
                    )}
                </div>

                <button 
                    className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                    Add News
                </button>
            </form>
        </div>
    );
};

export default AddNews;
