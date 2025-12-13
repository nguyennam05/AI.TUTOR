# AI.TUTOR 🤖📚

![AI Tutor](https://img.shields.io/badge/Download%20Latest%20Release-Click%20Here-brightgreen)  
[![GitHub Releases](https://img.shields.io/github/release/nguyennam05/AI.TUTOR.svg)](https://github.com/nguyennam05/AI.TUTOR/releases)

---

## Overview

AI Tutor is a chatbot-based web application designed to assist students with syllabus-specific queries. It leverages the Google Gemini API to provide accurate and curriculum-aligned responses. The application also integrates with Google Drive for eBook storage, MongoDB for chat history, and Clerk for user authentication. This ensures a secure and user-friendly experience for students seeking help with their studies.

## Features

- **Chatbot Functionality**: Engage with a chatbot that understands syllabus-specific questions.
- **Google Gemini API**: Utilize advanced AI capabilities for accurate answers.
- **eBook Storage**: Access a library of eBooks stored in Google Drive.
- **Chat History**: Keep track of your interactions with MongoDB.
- **User Authentication**: Secure login using Clerk to protect user data.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Clerk
- **API**: Google Gemini API
- **File Storage**: Google Drive

## Getting Started

To get started with AI Tutor, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nguyennam05/AI.TUTOR.git
   ```

2. **Navigate to the Directory**:
   ```bash
   cd AI.TUTOR
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:  
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   GOOGLE_API_KEY=your_google_api_key
   CLERK_API_KEY=your_clerk_api_key
   ```

5. **Run the Application**:
   ```bash
   npm start
   ```

6. **Access the App**:  
   Open your browser and go to `http://localhost:3000`.

## Usage

Once the application is running, you can interact with the chatbot. Type your syllabus-related questions in the chat interface. The AI Tutor will respond with relevant information, pulling from the Google Gemini API and the eBooks available in Google Drive.

### Example Queries

- "What are the key concepts in calculus?"
- "Can you explain the water cycle?"
- "Where can I find eBooks on history?"

## Release Information

To download the latest release of AI Tutor, visit the [Releases section](https://github.com/nguyennam05/AI.TUTOR/releases). Make sure to download the appropriate files and execute them as needed.

## Architecture

### Frontend

The frontend is built using React, which allows for a dynamic and responsive user interface. CSS is used for styling, ensuring a clean and user-friendly design.

### Backend

The backend is powered by Node.js and Express. It handles API requests, manages user authentication, and interacts with the MongoDB database to store chat history.

### Database

MongoDB is used to store chat logs and user data. This allows for easy retrieval and management of chat history, enhancing the user experience.

### Authentication

Clerk provides secure user authentication, ensuring that user data remains private and protected.

### API Integration

The Google Gemini API is integrated into the application, allowing the chatbot to provide accurate and relevant responses to user queries.

## Contributing

We welcome contributions to AI Tutor. If you would like to contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right of the page.
2. **Create a New Branch**: 
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make Your Changes**: Implement your feature or fix a bug.
4. **Commit Your Changes**: 
   ```bash
   git commit -m "Add your message here"
   ```
5. **Push to Your Branch**: 
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Create a Pull Request**: Go to the original repository and click on "New Pull Request".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any questions or issues, please open an issue in the GitHub repository. We will respond as soon as possible.

## Acknowledgments

- Thanks to the contributors who have helped improve this project.
- Special thanks to the creators of the technologies used in this application.

## Conclusion

AI Tutor aims to enhance the learning experience for students by providing quick and accurate answers to their queries. By integrating modern technologies and APIs, we strive to create a tool that is both useful and easy to use. For more details, check out the [Releases section](https://github.com/nguyennam05/AI.TUTOR/releases) for the latest updates and downloads.

---

![AI Tutor Logo](https://example.com/logo.png)  
*This logo represents the AI Tutor project.*