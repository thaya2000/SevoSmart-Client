import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";

const News = () => {
    const [news, setNews] = useState([]);
    const [deleteNewsId, setDeleteNewsId] = useState(null);
    const [serialNumbers, setSerialNumbers] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        try {
            setLoading(true);
            const result = await axios.get("https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news");
            setLoading(false);
            console.log('Loaded news:', result.data);
            setNews(result.data);
            generateSerialNumbers(result.data);
        } catch (error) {
            console.error('Error loading News:', error);
        }
    };

    const generateSerialNumbers = (news) => {
        const serials = {};
        news.forEach((newsItem, index) => {
            serials[newsItem.newsId] = index + 1;
        });
        setSerialNumbers(serials);
    };

    const handleDeleteNews = async (id) => {
        try {
            await axios.delete(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news/${id}`);
            toast.success("News is successfully deleted.");
            loadNews();
            setDeleteNewsId(null);
        } catch (error) {
            toast.error('Error deleting News:', error);
        }
    };

    return (
        <div>

            {loading ? (
                <RambousLoader />
            ) : (
                <div className="flex h-screen">
                    {/* Sidebar */}
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

                    {/* Main Content */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex flex-row justify-between">
                            <h className=" admin-tableh text-2xl font-bold mb-4">
                                News
                            </h>

                            <div className="my-4">
                                <Link
                                    to="/add-news"
                                    className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                                >
                                    Add News
                                </Link>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full bg-white shadow-md rounded my-6">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b">Serial No</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b">News Heading</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b">Publish Date</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b">News Image</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b">News Content</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {news.map((newsItem) => (
                                        <tr key={newsItem.newsId} className="hover:bg-gray-100 border-b">
                                            <td className="py-3 px-4">{serialNumbers[newsItem.newsId]}</td>
                                            <td className="py-3 px-4">{newsItem.newsTitle}</td>
                                            <td className="py-3 px-4">{newsItem.newsPublishDate}</td>
                                            <td className="py-3 px-4">
                                                {newsItem.newsImage && (
                                                    <img src={`data:image/jpeg;base64,${newsItem.newsImage}`} alt="news" className="h-16 object-cover rounded-lg m-2" style={{ width: 'auto' }} />
                                                )}
                                            </td>
                                            <td className="py-3 px-4">{newsItem.newsContent}</td>
                                            <td className="py-3 px-4">
                                                <div className='flex flex-row'>
                                                    <Link
                                                        to={`/edit-news/${newsItem.newsId}`}
                                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mr-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                                                        onClick={() => setDeleteNewsId(newsItem.newsId)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Delete Confirmation Modal */}
                        {deleteNewsId && (
                            <div className="fixed z-10 inset-0 overflow-y-auto">
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                    </div>
                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                </div>
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                        Delete News
                                                    </h3>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Are you sure you want to delete this News?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => handleDeleteNews(deleteNewsId)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setDeleteNewsId(null)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default News;
