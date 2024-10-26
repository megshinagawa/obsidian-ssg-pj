import React, { useEffect, useState } from 'react';
import { BrowserRouter as Link, Router } from 'react-router-dom';
import StaticPage from '../StaticPage';
import { fetchPages } from '../api';

const Navigation = () => {
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
            <div>
                <nav>
                    <ul>
                        {pages.map((page) => {
                        const pageName = page.replace('.html', '');
                        return (
                            <li key={page}>
                                <Link to={`./${pageName}`}>{pageName}</Link>
                            </li>
                        );
                        })}
                    </ul>
                </nav>
            </div>
    );
}
export default Navigation;