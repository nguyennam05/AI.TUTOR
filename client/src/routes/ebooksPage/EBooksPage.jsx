import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EBooksPage.css";

const dummyBooks = [
  {
    id: 1,
    title: "Computer Networks",
    department: "CSE",
    semester: "5",
    fileId: "1GZyqfXPoLhkxdn5PxIKWLPUT8GCA8S8X",
    thumbnail: "/images/cn.png", // Place inside /public/images/
  },
  {
    id: 2,
    title: "Design Analysis and Algorithms",
    department: "CSE",
    semester: "4",
    fileId: "1-s-cKduXaj2gjJrdmzDm4Y3bI5wXsEBS",
    thumbnail: "/images/daa.jpg",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    department: "CSE",
    semester: "6",
    fileId: "1ksIqp2XOHrmB8RMx77gis6C3vgo1WWHM",
    thumbnail: "/images/fsd.png",
  },

  {
    id: 4,
    title: "Principles of Electronics and Communication",
    department: "CSE",
    semester: "6",
    fileId: "1LPR_bckzTXpvd439i77t3TMtGPpFidr1",
    thumbnail: "/images/pec.png",
  },

  {
    id: 5,
    title: "Design Thinking",
    department: "CSE",
    semester: "5",
    fileId: "14rDtZV5mOFfHbpwLzV3T-Z3iWQdRUkGe",
    thumbnail: "/images/dt.jpg",
  },

  {
    id: 6,
    title: "Managerial Economics and Financial Analysis",
    department: "CSE",
    semester: "3",
    fileId: "1ggidf0fmVynmm8ERBNSZT8_5gPaGAUdi",
    thumbnail: "/images/mefa.jpg",
  },

  {
    id: 7,
    title: "Machine Learning",
    department: "CSE",
    semester: "6",
    fileId: "1OxBzspij4hBJRFSbV7cGenZp9oTgiJ4K",
    thumbnail: "/images/ml.jpg",
  },
];

  const EBooksPage = () => {
    const [department, setDepartment] = useState("");
    const [semester, setSemester] = useState("");
  
    const filteredBooks = dummyBooks.filter(
      (book) =>
        (!department || book.department === department) &&
        (!semester || book.semester === semester)
    );
  
    const navigate = useNavigate();
    return (
      <div className="ebook-library-container">
      <div className="ebook-library-header">
      
        <h1 className="ebooks-title" style={{ color:'#64b5f6' }}> Study Archive</h1>

        <button
        className="back-button"
        onClick={() => navigate("/dashboard/EbookLibrary")}
      >
        ⬅ Back to Library
      </button>
      </div>
  
        <div className="ebooks-filters">
          <select style={{
  backgroundColor: '#e6f4ea', // light green background
  color: '#1565c0',           // darker green text
  border: '1px #42a5f5',
  padding: '8px',
  borderRadius: '6px'
}}
value={department} onChange={(e) => setDepartment(e.target.value)}>

            <option value="">All Departments</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="IT">IT</option>
            <option value="AIML">AIML</option>
            <option value="CS">CS</option>
            <option value="IOT">IOT</option>
            <option value="DS">DS</option>
          </select>
  
          <select style={{
  backgroundColor: '#e6f4ea', // light green background
  color: '#1565c0',           // darker green text
  border: '1px #42a5f5',
  padding: '8px',
  borderRadius: '6px'
}}
value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">All Semesters</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
  
        {filteredBooks.length === 0 ? (
          <p className="no-books">No books found for the selected filters.</p>
        ) : (
          <div className="books-grid">
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <a
                  href={`https://drive.google.com/file/d/${book.fileId}/preview`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={book.thumbnail} alt={book.title} />
                </a>
  
                <div className="book-info">
                  <h2 className="book-title">{book.title}</h2>
                  <p className="book-meta">
                    Dept: {book.department} • Sem: {book.semester}
                  </p>
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${book.fileId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    ⬇️ Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default EBooksPage;