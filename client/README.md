## **IPD 4**
## 📌 **Project Title:**  
**AI Tutor – Your Personalized Academic Assistant**

---

##  **Problem Statement:**

Students often struggle to find concise, accurate answers to academic queries from large sets of scattered resources like textbooks, notes, and PDFs. They waste time navigating through unstructured content and face difficulties getting quick help tailored to their curriculum. A solution that allows instant, syllabus-aligned answers from a verified database of academic documents is lacking.

---

##  **Abstract:**

AI Tutor is an intelligent web-based academic assistant that allows students to interact with a chatbot trained on institutional-level knowledge sources such as Word documents, eBooks, and notes. The system extracts, stores, and indexes educational content, enabling students to ask questions and receive accurate, context-aware answers powered by Google Gemini AI. The chatbot answers only if the response exists in the dataset, otherwise it replies, "I cannot." This ensures precision, reliability, and transparency.

---

## 💡 **Proposed Solution:**

The proposed AI Tutor system:
- Extracts text from `.docx` and `.pdf` documents in a local folder (`D:\my_base`).
- Converts content into embeddings for efficient information retrieval.
- Uses Google Gemini AI to generate natural language answers **strictly from the indexed content**.
- Rejects irrelevant or hallucinated answers by responding with **"I cannot."**
- Includes a frontend interface with:
  - Chat window
  - eBook library with filters (Department/Semester)
  - Integration with Google Drive and Open Libraries

---

##  **Comparison: Existing vs Proposed System**

| Feature                         | Existing Systems (ChatGPT, Google Search) | AI Tutor (Proposed)                    |
|---------------------------------|-------------------------------------------|----------------------------------------|
| Academic Database Restriction   | ❌ No control                              | ✅ Strictly uses verified documents     |
| Offline Educational Resources   | ❌ Not integrated                          | ✅ Accepts `.docx`, PDF, and Drive links |
| Personalized Answers            | ❌ General-purpose                         | ✅ Institution-specific data            |
| Real-time Chat Interface        | ✅                                         | ✅                                      |
| Hallucination Control           | ❌ May hallucinate                         | ✅ Responds “I cannot” if not in data   |
| Filterable eBook Search         | ❌                                         | ✅ Based on semester & department       |

---

##  **System Architecture:**

```text
+-----------------------+          +---------------------+          +--------------------+
|     Frontend (React) |<-------->|    Backend (Express)|<-------->|   MongoDB Database |
+-----------------------+          +---------------------+          +--------------------+
        |                                      |
        v                                      v
+-------------------+         +------------------------------+
|   Clerk Auth      |         |   Document Parsing + AI Model|
|   (User login)    |         |   (Google Gemini via API)    |
+-------------------+         +------------------------------+
```

---

##  **Software Requirements:**

- **Operating System:** Windows / Linux / macOS  
- **Frontend:** React + Vite  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Atlas or local)  
- **AI Integration:** Google Gemini AI  
- **Code Editor:** Visual Studio Code  
- **Browser:** Chrome, Firefox, or Edge  

---

##  **Hardware Requirements:**

- **Processor:** Intel i5 / AMD Ryzen 5 or higher  
- **RAM:** Minimum 8 GB  
- **Storage:** Minimum 10 GB available  
- **Internet:** Stable connection for AI API and Drive sync  

---

##  **Tech Stack Used:**

| Layer      | Technology                |
|------------|---------------------------|
| Frontend   | React, React Router, Clerk |
| Backend    | Express.js, Node.js       |
| Database   | MongoDB + Mongoose        |
| AI Model   | Google Gemini AI          |
| Storage    | Google Drive (for PDFs)   |
| Deployment | Vite (Frontend), Nodemon (Backend) |

---

##  **Libraries Used:**

### 🔹 Frontend:
- `react`, `react-dom`
- `react-router-dom`
- `axios`
- `@clerk/clerk-react`
- `@tanstack/react-query`
- `react-markdown`
- `react-type-animation`
- `imagekitio-react`
- `@google/generative-ai`

### 🔹 Backend:
- `express`, `cors`
- `mongoose`, `mongodb`
- `nodemon`
- `@clerk/clerk-sdk-node`
- `dotenv`
- `imagekit`

---

##  **Flowchart:**

```text
[User Logs In]
      |
      v
[Frontend Chat Interface] <----------------+
      |                                    |
      v                                    |
[User Sends Question]                     [eBook Tab Accessed]
      |                                    |
      v                                    v
[Send to Backend (Express)]        [Filter Books by Dept/Sem]
      |
      v
[Search Extracted Data / Embeddings]
      |
      v
[If found -> Generate Answer using Gemini]
[If not -> Reply "I cannot"]
      |
      v
[Send Answer to Frontend for Display]
```

---

## **Future Scope:**

1. **Multi-language Support**: Support for regional languages or translation features.
2. **Voice-Based Interaction**: Allow students to ask questions using speech.
3. **Mobile App Integration**: React Native or Flutter-based app version.
4. **Teacher Dashboard**: Allow faculty to upload and manage documents easily.
5. **Test & Quiz Generator**: Auto-generate assessments based on available material.
6. **Offline Mode**: Cache essential documents locally.
7. **User Analytics**: Track frequently asked questions for future curriculum optimization.

## **Execeution**
start with client
cd clientthen npm rundev
open new terminal and start the backend server connection to retrive old chats or save the new ones
cd backend
npm start

has mongodb or some other database
uses clerk for user authentication
html
css
react router dom
someother techs also
refer to video on youtube by lamadev :)

## **if error on backend side**

if you get 3000 port is already running then use
"netstat -ano | findstr :3000"
  TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       16840
  TCP    [::]:3000              [::]:0                 LISTENING       16840

"taskkill /PID 16840 /F"
SUCCESS: The process with PID 16840 has been terminated.