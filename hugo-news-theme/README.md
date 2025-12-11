# Arabic News Portal - Hugo Theme

This is a Hugo theme port of the Arabic News Portal React application.

## Structure

- `layouts/`: Contains the HTML templates.
  - `_default/baseof.html`: The main shell of the site.
  - `index.html`: The homepage layout.
  - `partials/`: Reusable components (header, footer, head).
- `content/`: Contains the Markdown content.
  - `posts/`: Standard news articles and featured stories.
  - `opinion/`: Opinion pieces.
- `assets/css/main.css`: The TailwindCSS stylesheet.

## How to Run

1.  Ensure you have Hugo installed (Extended version recommended for Sass/PostCSS features if we were using them, but here we use a static CSS file for simplicity).
2.  Navigate to this directory:
    ```bash
    cd hugo-news-theme
    ```
3.  Start the server:
    ```bash
    hugo server
    ```
4.  Open `http://localhost:1313` in your browser.

## Customization

- **Menu**: Edit `hugo.toml` to change the navigation links.
- **Featured Stories**: Add `featured: true` or `sub_featured: true` to the front matter of any post in `content/posts`.
- **Opinions**: Add new markdown files to `content/opinion`.
