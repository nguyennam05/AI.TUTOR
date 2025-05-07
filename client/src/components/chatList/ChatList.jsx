import { useQuery } from '@tanstack/react-query';
import './chatList.css';
import { Link } from 'react-router-dom';

const ChatList = () => {

   const { isPending, error, data}= useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.YOUR_VITE_API_URL}/api/userchats`,{
        credentials: "include",
   }).then((res)=>res.json()),
   });

  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">💬 New Chat</Link>
        
        <Link to="/dashboard/flashcards">📝 Flash Cards</Link>
        <Link to="/dashboard/EbookLibrary" >📖🔍 OpenShelf </Link>
        
       


        <hr/>
        
        <span className='title'>RECENT CHATS</span>
        <div className='list'>
        <div className='list'>
  {isPending ? "Loading..." : error ? "Something went wrong" : (data && data.length > 0 ? data.map((chat) => (
    <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>{chat.title}</Link>
  )) : "No chats available")}
</div>


           
        </div>
    </div>
  );
};

export default ChatList;
