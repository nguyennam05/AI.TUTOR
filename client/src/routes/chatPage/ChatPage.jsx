
import './chatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { IKImage } from 'imagekitio-react';
import React, { Fragment } from 'react'; // Import Fragment

// Then you can use Fragment instead of React.Fragment


const ChatPage = () => {
  const path = useLocation().pathname
  const chatId = path.split("/").pop()
  const { isPending, error, data}= useQuery({
    queryKey: ['chat',chatId],
    queryFn: () =>
      fetch(`${import.meta.env.YOUR_VITE_API_URL}/api/chats/${chatId}`,{
        credentials: "include",
   }).then((res)=>res.json()),
   });

  return (
    <div className='chatPage'>
      <div className='wrapper'>
        <div className='chat'>
          {isPending? "Loading..." 
          : error? "Something went wrong" 
          :data?.history?.map((message, i) => (
            <React.Fragment key={i}> {/* Add a key to the fragment */}
              {message.img && (
                <IKImage
                  key={`img-${i}`}
                  urlEndpoint={import.meta.env.YOUR_VITE_IMAGE_KIT_ENDPOINT}
                  path={message.img}
                  height="300"
                  width="400"
                  transformation={[{height:300, width:400}]}
                  loading="lazy"
                  lqip={{ active: true, quality: 20 }}
                />
              )}
              <div className={message.role === "user" ? "message user" : "message"}>
                <Markdown>{message.parts[0].text}</Markdown>
              </div>
            </React.Fragment>
          ))}
          
        {data &&<NewPrompt data={data}/>}
        
        </div>
      </div>
      </div>
  );
};

export default ChatPage;