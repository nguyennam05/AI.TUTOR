import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from "./routes/homepage/Homepage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import RootLayout from "./layouts/rootLayout/RootLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import SignUpPage from './routes/signUpPage/signUpPage';
//import SignInPage from './routes/signInPage/signInPage';
import EBooksPage from './routes/ebooksPage/EBooksPage';
import FlashCard from './routes/flashCards/FlashCards';
import EbookLibrary from './routes/EbookLibrary/EbookLibrary';
import OpenLibraries from './routes/OpenLibraries/OpenLibraries';


const router = createBrowserRouter([
{
element: <RootLayout/>,
children:[
  {
    path:"/", 
    element:<Homepage/>,
  },
  {
    path:"/sign-in/*", 
    element:<SignUpPage/>,
  },
  {
    path:"/sign-up/*", 
    element:<SignUpPage/>,
  },
  {
    element: <DashboardLayout/>,
    children: [
      {
        path: "/dashboard/*",
        element: <DashboardPage/>,
      },
      {
        path: "/dashboard/chats/:id",
        element: <ChatPage/>,
      },
    
      
      {
        path: "/dashboard/flashcards",
        element: <FlashCard />,
      },

      {
        path: "/dashboard/EbookLibrary/ebooks",
        element: <EBooksPage />,
      },
      {
        path: "/dashboard/OpenLibraries",
        element: <OpenLibraries />,
      },
      
      {
        path: "/dashboard/EbookLibrary",
        element: <EbookLibrary />, // this shows the buttons now
      },
      
      
    ],
  },
],
},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
