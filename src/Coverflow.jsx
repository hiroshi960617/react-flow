import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './styles.css'; // Import the base styles

function Coverflow({ dataUrl = '/albums.json' }) { // Accept dataUrl prop with default
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(dataUrl) // Use the dataUrl prop
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAlbums(data); // Set state first

        // Prefetch images with low priority after setting state
        if (Array.isArray(data)) {
          data.forEach(album => {
            if (album.image_url) {
              fetch(album.image_url, { priority: 'low', cors: 'no-cors' }) // Use low priority for prefetch
                .then(res => {
                  if (!res.ok) {
                    console.warn(`Failed to prefetch image (status ${res.status}): ${album.image_url}`);
                  }
                  // We don't need the image body, just the request
                })
                .catch(prefetchError => {
                  console.warn(`Error prefetching image ${album.image_url}:`, prefetchError);
                });
            }
          });
        }
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
        setError(error.message);
      });
  }, [dataUrl]); // Add dataUrl to dependency array

  // Basic click handler (can be expanded later)
  const handleCardClick = (url) => {
    // In a real app, you might use React Router or other navigation methods
    // For simplicity, we'll just log or use window.location for now
    console.log(`Navigating to: ${url}`);
    // window.location.href = url; // Uncomment if direct navigation is desired
  };

  if (error) {
    return <div className="error-message">Error loading albums: {error}</div>;
  }

  if (albums.length === 0) {
    return <div className="loading-message">Loading albums...</div>;
  }

  return (
    <div className="cards-wrapper">
      <ul className="cards">
        {albums.map((album, index) => (
          <li key={album.position || index} className="card" /* onClick={() => handleCardClick(album.some_url)} // Add URL if available in data */>
            <img
              draggable={false}
              src={album.image_url}
              alt={`${album.title} by ${album.artists}`}
              width={600} // Consider making size configurable via props
              height={600}
            />
            {/* Add title/artist info if needed */}
            {/* <p>{album.title}</p> */}
            {/* <p>{album.artists}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Add PropTypes for documentation and validation
Coverflow.propTypes = {
  dataUrl: PropTypes.string,
};

export default Coverflow;
