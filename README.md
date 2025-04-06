# React Flow

This project is a React application built with Vite, demonstrating a Coverflow component. It uses the CSS scroll-driven animation effect to create a visually appealing coverflow effect for displaying album covers. It supports prefetching images using Fetch Priority.


## Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/addyosmani/react-flow.git
    cd react-flow
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode using Vite.
Open [http://localhost:5173](http://localhost:5173) (or the port shown in the terminal) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs the ESLint linter to check for code style issues.

### `npm run preview`

Serves the production build locally to preview it.

## Using the Coverflow Component

The core of this project is the `Coverflow` component located in `src/Coverflow.jsx`.

### Basic Usage

Import the component and render it in your application:

```jsx
import React from 'react';
import Coverflow from './Coverflow'; // Adjust the import path as needed
import './App.css'; // Or your main CSS file

function App() {
  return (
    <div className="App">
      <h1>React Coverflow Demo</h1>
      <Coverflow />
    </div>
  );
}

export default App;
```

### Configuration

The `Coverflow` component accepts the following props:

*   **`dataUrl`** (string, optional): The URL to fetch the album data from.
    *   Defaults to `/albums.json`.
    *   The component expects the data to be a JSON array of objects. Each object should have at least an `image_url` property (for the image source) and preferably `title` and `artists` properties (used for the image `alt` text). A unique `key` (like `position` in the default data) is also recommended for React list rendering.

    Example structure:
    ```json
    [
      {
        "position": 1,
        "title": "Album Title",
        "artists": "Artist Name",
        "image_url": "https://example.com/image.jpg"
      },
    ]
    ```

    To use a different data source, provide the URL via the prop:

    ```jsx
    <Coverflow dataUrl="/path/to/your/custom-data.json" />
    ```

    Or fetch from an external API:

    ```jsx
    <Coverflow dataUrl="https://api.example.com/albums" />
    ```

### Styling

The component relies on CSS for the coverflow effect. Basic styles are included in `src/styles.css`. You may need to adjust or extend these styles depending on your application's layout and design. The scroll-driven animation logic is in `public/scroll-timeline.js`, which is loaded by `index.html`.

## Acknowledgements

The CSS scroll-driven animation effect is based on the original demo by Bramus Van Damme:
[https://scroll-driven-animations.style/demos/cover-flow/css/](https://scroll-driven-animations.style/demos/cover-flow/css/)

## License

This project is licensed under the terms of the [MIT License](LICENSE.md).
