import React, { useState } from 'react';
import './NewsPage.css'; // Import your CSS file for styling

const NewsPage = () => {
  // State for storing news items
  const [newsList, setNewsList] = useState([
    {
      content: "This is the first post by the admin.",
      comments: []
    },
    {
      content: "This is the second post by the admin.",
      comments: []
    },
    // Add more posts here if needed
  ]);

  // State for storing user's name and comment for each post
  const [userComments, setUserComments] = useState(Array(newsList.length).fill({ userName: '', comment: '' }));

  // Function to handle adding comments to news
  const handleAddComment = (index) => {
    // Check if user has provided a name and comment
    const { userName, comment } = userComments[index];
    if (userName.trim() !== '' && comment.trim() !== '') {
      // Copy the news list
      const updatedNewsList = [...newsList];
      // Add the comment to the specified news item
      updatedNewsList[index].comments.push({ userName, comment });
      // Update the news list state
      setNewsList(updatedNewsList);
      // Clear the input fields
      const updatedUserComments = [...userComments];
      updatedUserComments[index] = { userName: '', comment: '' };
      setUserComments(updatedUserComments);
    }
  };

  // Function to handle updating user name and comment state
  const handleUserCommentChange = (index, fieldName, value) => {
    const updatedUserComments = [...userComments];
    updatedUserComments[index] = { ...updatedUserComments[index], [fieldName]: value };
    setUserComments(updatedUserComments);
  };

  // Function to organize news by month in archive
  const organizeArchiveByMonth = () => {
    // Perform organization by month here
    // For simplicity, let's just console.log that we are organizing by month for now
    console.log("Organizing news by month in archive...");
  };

  return (
    <div className="news-page">
      <div className="news-feed">
        <h1>News Feed</h1>
        {/* Display news */}
        <div className="feed-items">
          {newsList.map((news, index) => (
            <div key={index} className="feed-item">
              <p>{news.content}</p>
              {/* Display comments */}
              <div className="comments">
                {news.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment">
                    <p><strong>{comment.userName}:</strong> {comment.comment}</p>
                  </div>
                ))}
              </div>
              {/* Input for adding comments */}
              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={userComments[index].userName}
                  onChange={(e) => handleUserCommentChange(index, 'userName', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={userComments[index].comment}
                  onChange={(e) => handleUserCommentChange(index, 'comment', e.target.value)}
                />
                <button onClick={() => handleAddComment(index)}>Comment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="archive">
        <h2>Archive</h2>
        {/* Button to organize by month */}
        <button onClick={organizeArchiveByMonth}>Organize by Month</button>
        {/* Display archive items */}
        {/* For simplicity, let's just display some dummy archive items */}
        <ul>
          <li>January 2024</li>
          <li>February 2024</li>
          <li>March 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default NewsPage;
