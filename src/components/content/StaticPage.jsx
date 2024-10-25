// src/StaticPage.js
import React, { useEffect, useState } from 'react';

const StaticPage = ({ page }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/static-sites/${page}`);
        const html = await response.text();
        setContent(html);
      } catch (error) {
        console.error('Error loading page content:', error);
        setContent('<p>Page not found</p>'); // Basic error handling
      }
    };
    fetchContent();
  }, [page]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default StaticPage;
