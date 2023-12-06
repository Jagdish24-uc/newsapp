// src/components/NewsDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch detailed news data based on the article ID
    axios.get(`API_URL/${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
      <a href={article.link} target="_blank" rel="noopener noreferrer">Read full article</a>
    </div>
  );
};

export default NewsDetail;
