// import React from "react";
import "./OpenLibraries.css"; // Link the CSS file
import { useNavigate } from "react-router-dom";

const openLibraries = [
  {
    title: "NDLI (National Digital Library of India)",
    image: "/images/ndli.jpg",
    description:
      "A massive repository of academic content including books, papers, videos, and more. Curated by IIT Kharagpur.",
    link: "https://ndl.iitkgp.ac.in/",
  },
  {
    title: "Internet Archive",
    image: "/images/ia.jpg",
    description:
      "A digital library of millions of free books, movies, software, music, websites, and more.",
    link: "https://archive.org/",
  },
  {
    title: "Project Gutenberg",
    image: "/images/guten.jpg",
    description:
      "Over 60,000 free eBooks, mostly older literary works in the public domain.",
    link: "https://www.gutenberg.org/",
  },
  {
    title: "OpenStax",
    image: "/images/openstax.jpg",
    description:
      "A nonprofit that provides free, peer-reviewed, openly licensed textbooks.",
    link: "https://openstax.org/",
  },
];

const OpenLibraries = () => {

  const navigate = useNavigate();
  return (
    <div className="ebook-library-container">
      <div className="ebook-library-header">
      <h1 className="ebook-library-title" style={{ color:'#64b5f6' }}>🌐 Open Libraries</h1>
      <button
        className="back-button"
        onClick={() => navigate("/dashboard/EbookLibrary")}
      >
        ⬅ Back to Library
      </button>
      </div> 
      <p className="ebook-library-subtitle">
        Explore top open-access digital libraries available online:
      </p>

      <div className="ebook-card-grid">
        {openLibraries.map((lib, idx) => (
          <div key={idx} className="ebook-card">
            <img src={lib.image} alt={lib.title} className="ebook-card-img" />
            <h2 className="ebook-card-title">{lib.title}</h2>
            <p className="ebook-card-desc">{lib.description}</p>
            <a href={lib.link} target="_blank" rel="noopener noreferrer">
              <button className="ebook-card-btn">Visit</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenLibraries;
