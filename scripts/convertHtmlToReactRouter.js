import fs from 'fs';
import path from 'path';

// Function to convert HTML <a> tags to React Router <Link> components
export function convertHtmlToReactRouter(inputFile, outputFile) {
    // Read the HTML file
    fs.readFile(inputFile, 'utf8', (err, htmlContent) => {
        if (err) {
            console.error(`Error reading the file: ${err}`);
            return;
        }

        // Regex to match <a> tags
        const linkRegex = /<a\s+href="([^"]+)"([^>]*)>(.*?)<\/a>/g;

        // Replace <a> tags with <Link> components
        const modifiedContent = htmlContent.replace(linkRegex, (match, href, attributes, linkText) => {
            // Generate the Link component
            return `<Link to="${href}"${attributes}>${linkText}</Link>`;
        });

        // Write the modified content to a new file
        fs.writeFile(outputFile, modifiedContent, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing the file: ${err}`);
                return;
            }
            console.log(`Converted ${inputFile} to ${outputFile} successfully!`);
        });
    });
}

// // Specify the input and output file paths
// const inputHtmlFile = '/Users/mshinagawa/Dev/obsidian-ssg-pj/public/static-sites/habits.html';
// const outputJsFile = '/Users/mshinagawa/Dev/obsidian-ssg-pj/public/router-files/habits.js';  

// // Call the conversion function
// convertHtmlToReactRouter(inputHtmlFile, outputJsFile);

export default convertHtmlToReactRouter;
