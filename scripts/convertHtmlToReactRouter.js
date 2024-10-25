import fs from 'fs';
import path from 'path';

// Function to convert HTML <a> tags to React Router <Link> components
export function convertHtmlToReactRouter(input) {

    // Regex to match <a> tags
    const linkRegex = /<a\s+href="([^"]+)"([^>]*)>(.*?)<\/a>/g;

    // Replace <a> tags with <Link> components
    const modifiedContent = input.replace(linkRegex, (match, href, attributes, linkText) => {
        // Generate the Link component
        return `<Link to="${href}"${attributes}>${linkText}</Link>`;
    });

    return modifiedContent;
}

// // Specify the input and output file paths
// const inputHtmlFile = '/Users/mshinagawa/Dev/obsidian-ssg-pj/public/static-sites/habits.html';
// const outputJsFile = '/Users/mshinagawa/Dev/obsidian-ssg-pj/public/router-files/habits.js';  

// // Call the conversion function
// convertHtmlToReactRouter(inputHtmlFile, outputJsFile);

export default convertHtmlToReactRouter;
