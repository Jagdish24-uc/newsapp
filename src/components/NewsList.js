// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import './NewsList.css'; // Import the CSS file
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '46912cb788ca4ab8ad23304eefb53b7d'; // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => setNews(response.data.articles))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="news-list-container">
      {news.map((article, index) => (
        <div key={index} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt={article.title} />
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
