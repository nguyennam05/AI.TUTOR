// src/components/Flashcards.jsx
import React, { useState } from "react";
import "./Flashcards.css";

const keywordMap = {
  React: ["react", "jsx", "component", "hook", "useeffect", "usestate"],
  HTML: ["html", "doctype", "element", "meta", "div", "span"],
  CSS: ["css", "style", "box model", "margin", "padding", "flex", "grid"],
  JavaScript: ["javascript", "js", "closure", "hoisting", "event loop"],
  "Machine Learning": ["machine learning", "ml", "model", "dataset", "supervised", "unsupervised"],
  DBMS: ["dbms", "sql", "normalization", "primary key", "database"],
  "Operating Systems": ["os", "operating system", "process", "thread", "deadlock"],
  "Computer Networks": ["network", "osi", "ip address", "tcp", "udp"],
  DSA: ["dsa", "data structure", "algorithm", "linked list", "stack", "queue"],
};

const subjectWiseData = {
  React: [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript used with React." },
    { question: "What is a Hook?", answer: "A special function to use state and other React features." },
  ],
  HTML: [
    { question: "What is HTML?", answer: "The standard markup language for creating web pages." },
    { question: "What is a <div>?", answer: "A generic container in HTML." },
    { question: "What is a doctype?", answer: "It tells the browser what version of HTML is being used." },
  ],
  CSS: [
    { question: "What is the box model in CSS?", answer: "A box that wraps around HTML elements including margin, border, padding, and content." },
    { question: "What is Flexbox?", answer: "A layout model that allows elements to align and distribute space efficiently." },
    { question: "What is Grid in CSS?", answer: "A layout system optimized for 2D layouts using rows and columns." },
  ],
  JavaScript: [
    { question: "What is a closure in JavaScript?", answer: "A function having access to the parent scope even after the parent function has closed." },
    { question: "What is hoisting?", answer: "JavaScript's behavior of moving declarations to the top." },
    { question: "What is the event loop?", answer: "A mechanism that handles asynchronous operations in JavaScript." },
  ],
  "Machine Learning": [
    { question: "What is machine learning?", answer: "A subset of AI that allows systems to learn from data." },
    { question: "What is supervised learning?", answer: "A type of learning where the model is trained on labeled data." },
    { question: "What is a dataset?", answer: "A collection of data used for training or testing a machine learning model." },
  ],
  DBMS: [
    { question: "What is DBMS?", answer: "A system software for creating and managing databases." },
    { question: "What is normalization?", answer: "A process to reduce data redundancy and improve data integrity." },
    { question: "What is a primary key?", answer: "A unique identifier for a record in a table." },
  ],
  "Operating Systems": [
    { question: "What is an operating system?", answer: "System software that manages hardware and software resources." },
    { question: "What is a process?", answer: "An instance of a running program." },
    { question: "What is a deadlock?", answer: "A state where processes are unable to proceed because each is waiting for the other to release resources." },
  ],
  "Computer Networks": [
    { question: "What is the OSI model?", answer: "A conceptual framework to understand network interactions in seven layers." },
    { question: "What is TCP?", answer: "A protocol that ensures reliable data transmission." },
    { question: "What is an IP address?", answer: "A unique address that identifies a device on the internet or local network." },
  ],
  DSA: [
    { question: "What is a data structure?", answer: "A way of organizing data for efficient access and modification." },
    { question: "What is an algorithm?", answer: "A step-by-step procedure to solve a problem." },
    { question: "What is a stack?", answer: "A LIFO (Last In First Out) data structure." },
  ],
};

const findBestMatch = (input) => {
  const lowerInput = input.toLowerCase();
  let bestMatch = null;
  let maxScore = 0;

  for (const [subject, keywords] of Object.entries(keywordMap)) {
    const matchCount = keywords.filter((kw) => lowerInput.includes(kw)).length;
    if (matchCount > maxScore) {
      maxScore = matchCount;
      bestMatch = subject;
    }
  }

  return bestMatch;
};

const Flashcards = () => {
  const [notes, setNotes] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateFlashcards = async () => {
    setLoading(true);
    setFlipped(false);
    setCurrentIndex(0);

    setTimeout(() => {
      const bestMatch = findBestMatch(notes);
      if (!bestMatch) {
        setFlashcards([{ question: "No match found", answer: "Try another topic or rephrase your notes." }]);
      } else {
        setFlashcards(subjectWiseData[bestMatch]);
      }
      setLoading(false);
    }, 1000);
  };

  const handleFlip = () => setFlipped((prev) => !prev);

  const nextCard = () => {
    setFlipped(false);
    if (currentIndex < flashcards.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    setFlipped(false);
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="flashcard-container">
      <h2 style={{ color:'#64b5f6', fontSize: '2.5rem', fontWeight: '700' }}>QuickFlip Genius</h2><br/>
      <h5 style={{ color: '#999' }}>"Learn. Flip. Remember — The Flashcard Way."</h5><br/>
      <textarea
        placeholder="Paste your topic notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={generateFlashcards} disabled={loading || !notes.trim()}>
        {loading ? "Generating..." : "Generate Flashcards"}
      </button>

      {flashcards.length > 0 && (
        <div className="card-wrapper">
          <div
            className={`flashcard ${flipped ? "flipped" : ""}`}
            onClick={handleFlip}
          >
            <div className="front">{flashcards[currentIndex].question}</div>
            <div className="back">{flashcards[currentIndex].answer}</div>
          </div>

          <div className="controls">
            <button onClick={prevCard} disabled={currentIndex === 0}>
              ◀ Prev
            </button>
            <span>
              {currentIndex + 1} / {flashcards.length}
            </span>
            <button
              onClick={nextCard}
              disabled={currentIndex === flashcards.length - 1}
            >
              Next ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;
