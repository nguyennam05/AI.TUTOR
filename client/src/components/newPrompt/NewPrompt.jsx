import { useEffect, useRef, useState } from 'react';
import './newPrompt.css';
import Upload from '../upload/Upload';
import { IKImage } from 'imagekitio-react';
import model from "../../lib/gemini";
import Markdown from "react-markdown";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const domainTopics = {
  dsa: [ "Algorithm", "Time complexity", "Space complexity", "Big O notation", "Divide and Conquer", "Dynamic Programming", "Greedy Algorithm", "Sorting", "Searching", "Graph", "Tree", "Array", "Linked List", "Stack", "Queue", "Recursion", "Backtracking", "Heuristic", "NP-Completeness", "Merge sort", "Quick sort", "Binary search", "Hashing", "Topological sort", "Minimum spanning tree", "Shortest path", "Dijkstra's algorithm", "Bellman-Ford algorithm" ],
  os: [ "Process", "Thread", "Scheduling", "Memory management", "Virtual memory", "Paging", "Segmentation", "Deadlock", "Semaphore", "System call", "Multithreading", "CPU scheduling", "File system", "Kernel", "Interrupt" ],
  dbms: [ "Database", "SQL", "Normalization", "ACID", "Transaction", "Primary key", "Foreign key", "Index", "Join", "Query optimization", "CRUD", "Data integrity", "Entity", "Attribute", "Relational database" ],
  oops: [ "Class", "Object", "Inheritance", "Polymorphism", "Encapsulation", "Abstraction", "Interface", "Constructor", "Method overloading", "Method overriding", "Access modifiers", "JVM", "Static", "Final" ],
  cn: [ "Network", "Protocol", "TCP/IP", "HTTP", "IP address", "MAC address", "Router", "Switch", "Firewall", "DNS", "LAN", "WAN", "Socket programming" ],
  fullstack: [ "HTML", "CSS", "JavaScript", "React", "Angular", "Vue", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "REST API", "GraphQL", "JWT", "OAuth", "Authentication", "Authorization", "MVC", "Routing", "State management", "Redux", "Session", "Cookies", "CI/CD", "Git", "Docker", "Testing", "Responsive design" ],
  compiler: [ "Lexical analysis", "Syntax analysis", "Parsing", "Tokens", "Context-free grammar", "AST", "Symbol table", "Semantic analysis", "Intermediate code", "Code optimization", "Code generation", "Lex", "YACC", "Compiler phases", "Regular expressions", "Finite automata", "Back-end", "Front-end", "LR parser" ],
  ai: [ "Artificial Intelligence", "Search algorithms", "Heuristics", "A*", "Knowledge representation", "Expert systems", "Logic", "Planning", "Constraint satisfaction", "Game playing", "Natural Language Processing", "Speech recognition", "Chatbot", "Machine learning", "Neural networks", "Fuzzy logic" ],
  java: [ "JVM", "JRE", "JDK", "Class", "Object", "Inheritance", "Polymorphism", "Abstraction", "Encapsulation", "Interface", "Exception handling", "Multithreading", "Collections", "Streams", "Lambda expressions", "Generics", "Serialization", "File I/O", "JavaFX", "Swing" ],
  python: [ "Syntax", "Indentation", "List", "Tuple", "Dictionary", "Set", "Loops", "Functions", "OOP", "Lambda", "Decorators", "File handling", "Modules", "Packages", "Exception handling", "List comprehension", "NumPy", "Pandas", "Matplotlib", "Flask", "Django", "Virtualenv" ],
  c: [ "Data types", "Variables", "Pointers", "Arrays", "Strings", "Structures", "Unions", "Functions", "Recursion", "File handling", "Preprocessor", "Memory allocation", "Control statements", "Loops", "Header files", "Command-line arguments" ],
  pece: [ "Semiconductors", "Diode", "Transistor", "BJT", "FET", "MOSFET", "Amplifier", "Op-amp", "Oscillator", "Modulation", "Demodulation", "Filters", "Communication systems", "Analog circuits", "Digital circuits", "Logic gates", "Flip-flops", "Multiplexers", "Demultiplexers", "ADC", "DAC" ],
  ml: [ "Supervised learning", "Unsupervised learning", "Classification", "Regression", "Clustering", "K-means", "Decision tree", "Random forest", "SVM", "Naive Bayes", "Overfitting", "Underfitting", "Cross-validation", "Feature engineering", "Model evaluation", "Confusion matrix", "Precision", "Recall", "F1 score", "Gradient descent" ],
  cloud: [ "Cloud computing", "IaaS", "PaaS", "SaaS", "Virtualization", "Hypervisor", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Containers", "Load balancing", "Auto scaling", "DevOps", "Serverless", "Cloud storage", "Cloud security", "Elasticity", "Disaster recovery" ]

};

const allKeywords = Object.values(domainTopics).flat();
function isInDomain(text) {
  const userInput = text.toLowerCase().replace(/[^a-z0-9]/gi, ""); // remove spaces and punctuation

  const topicPhrases = Object.values(domainTopics).flat();

  return topicPhrases.some(phrase => {
    const normalizedKeyword = phrase.toLowerCase().replace(/\s+/g, "");
    return userInput.includes(normalizedKeyword);
  });
}



const NewPrompt = ({ data }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const chat = model.startChat({
    history: [{ role: 'user', parts: [{ text: "hello i have 2 dogs" }] }]
  });

  const endRef = useRef(null);
  const formRef = useRef(null);
  const hasRun = useRef(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${import.meta.env.YOUR_VITE_API_URL}/api/chats/${data._id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          answer,
          img: img.dbData?.filePath || "",
        }),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat', data._id] }).then(() => {
        formRef.current.reset();
        setQuestion("");
        setAnswer("");
        setImg({
          isLoading: false,
          error: "",
          dbData: {},
          aiData: {}
        });
      });
    },
    onError: (err) => {
      console.log(err);
    }
  });

  const trimIncompleteSentence = (text) => {
    const lastPeriod = text.lastIndexOf(".");
    return lastPeriod !== -1 ? text.slice(0, lastPeriod + 1) : text;
  };

  const add = async (text, isInitial) => {
    const isValid = isInDomain(text);
    console.log("Question:", text);
    console.log("isDomain result:", isValid);
  
    setQuestion(text);
  
    if (!isValid) {
      console.log("Blocked non-domain question.");
      setAnswer("I can only help with your academic questions. Please rephrase your query.");
      return;
    }
  
    // Proceed only if it's a domain-specific question
    try {
      const result = await chat.sendMessageStream(
        Object.entries(img.aiData).length ? [img.aiData, text] : [text]
      );
      let accumulatedText = "";
      for await (const chunk of result.stream) {
        accumulatedText += chunk.text();
        const finalAnswer = trimIncompleteSentence(accumulatedText.trim());
        setAnswer(finalAnswer || "Sorry! Couldn't find an answer :(");
      }
  
      mutation.mutate(); // Only save valid response
    } catch (err) {
      console.error("Gemini Error:", err);
      setAnswer("⚠️ Oops! Something went wrong. Please check your network or try again.");
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    formRef.current.reset();
    add(text, false);
  };

  useEffect(() => {
    if (!hasRun.current && data?.history?.length === 1) {
      const initialText = data.history[0].parts[0].text;
      add(initialText, true);
      hasRun.current = true;
    }
  }, [data]);

  return (
    <>
      {img.isLoading && <div>Loading...</div>}

      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.YOUR_VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}

      {question && <div className='message user'>{question}</div>}
      {answer && <div className='message ai'><Markdown>{answer}</Markdown></div>}
      <div className='endChat' ref={endRef}></div>

      <form className='newForm' onSubmit={handleSubmit} ref={formRef}>
        <Upload setImg={setImg} />
        <input id='file' type='file' multiple={false} hidden />
        <input type='text' name='text' placeholder='Ask anything...' />
        <button>
          <img src="/arrow.png" alt="→" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
