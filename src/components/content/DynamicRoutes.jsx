// src/DynamicRoutes.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StaticPage from './StaticPage';
import { fetchPages } from './api';

const DynamicRoutes = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadPages = async () => {
      const fetchedPages = await fetchPages();
      // console.log("Fetched Pages:", fetchedPages); // Debugging
      setPages(fetchedPages);
    };
    loadPages();
  }, []);


  return (
    <Router>
      <div>
        <nav>
          <ul>
            {pages.map((page) => {
              const pageName = page.replace('.html', '');
              return (
                <li key={page}>
                  <Link to={`/${pageName}`}>{pageName}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

      
        <Routes>
          {pages.map((page) => {
            const pageName = page.replace('.html', '');
            return (
              <Route
                key={page}
                path={`/${pageName}`}
                element={<StaticPage page={page} />}
              />
            );
          })}
          {/* Optional: Default route */}
          <Route path="*" element={<StaticPage page="index.html" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DynamicRoutes;
