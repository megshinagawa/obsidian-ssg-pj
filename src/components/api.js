export async function fetchPages() {
  try {
    const response = await fetch('/static-sites/pages.json'); // Ensure this path is correct
    const data = await response.json();
    return data.pages; // Assumes pages.json has a structure like { "pages": ["about.html", "contact.html"] }
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}