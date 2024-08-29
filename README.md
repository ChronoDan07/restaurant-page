# Restaurant Page Project

This is a simple restaurant page project built using JavaScript and Webpack. The project features a modular design, allowing for easy navigation between different sections of the site using tabbed browsing.

## Features

- **Modular Code Structure:** Each section of the site (Home, Menu, Contact) is managed in its own module, making the code organized and maintainable.
- **Dynamic Content Loading:** The content for each tab is dynamically generated and appended to the DOM, rather than being hardcoded in the HTML.
- **Webpack Setup:** The project is bundled using Webpack, ensuring efficient code splitting and asset management.

## Setup and Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/restaurant-page.git
    cd restaurant-page
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npx webpack serve
    ```
    This will start a development server at `http://localhost:8080`.

4. **Build the project:**
    ```bash
    npx webpack
    ```
    This will bundle your application into the `dist/` directory.

## Project Structure

- **src/**
  - `index.js`: Entry point for the application. Handles tab switching logic.
  - `template.html`: HTML template file.
  - **modules/**: Contains individual modules for each section of the site.
    - `home.js`: Module for the Home tab.
    - `menu.js`: Module for the Menu tab.
    - `contact.js`: Module for the Contact tab.
    
- **dist/**: Contains the bundled output from Webpack.
- **webpack.config.js**: Configuration file for Webpack.
- **package.json**: Project metadata and dependencies.
- **.gitignore**: Specifies files and directories to be ignored by Git.

## Deployment

This project is deployed using GitHub Pages. The `dist` directory is pushed to the `gh-pages` branch, which is set as the source for GitHub Pages.

### Steps to Deploy

1. **Build the project:**
    ```bash
    npx webpack
    ```

2. **Push to the `gh-pages` branch:**
    ```bash
    git subtree push --prefix dist origin gh-pages
    ```

3. **Set `gh-pages` as the source branch in GitHub settings.**

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.