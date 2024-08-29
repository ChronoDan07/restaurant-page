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

