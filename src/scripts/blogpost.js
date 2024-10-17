window.onload = loadPost();

export async function loadPost() {
    
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const postName = fileName.replace('.html', '.md');
    const response = await fetch(`./${postName}`);
    const markdown = await response.text();
    const htmlContent = marked(markdown); // Convert Markdown to HTML
    document.getElementById('blog-content').innerHTML = htmlContent;
};