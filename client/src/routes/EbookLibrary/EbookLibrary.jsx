import React from "react";
import { useNavigate } from "react-router-dom";
import "./EbookLibrary.css"; // Import your CSS

const EbookLibrary = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "My eBooks",
      description: "Your course modules at your hand.",
      image: "https://img.icons8.com/color/96/000000/google-drive--v2.png",
      route: "/dashboard/EbookLibrary/ebooks",
    },
    {
      title: "Open Libraries",
      description: "Explore collections like NDLI, Internet Archive & more.",
      image: "https://img.icons8.com/fluency/96/book-shelf.png",
      route: "/dashboard/OpenLibraries",
    },
  ];

  return (
    <div className="ebook-library-container">
      <h1 className="ebook-library-title" style={{ color:'#64b5f6' }}>OpenShelf </h1>
      <p className="ebook-library-subtitle">
        Choose your preferred source to explore study materials:
      </p>
      <div className="ebook-card-grid">
        {options.map((option, index) => (
          <div key={index} className="ebook-card">
            <img src={option.image} alt={option.title} className="ebook-card-img" />
            <h2 className="ebook-card-title">{option.title}</h2>
            <p className="ebook-card-desc">{option.description}</p>
            <button
              className="ebook-card-btn"
              onClick={() => navigate(option.route)}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EbookLibrary;
