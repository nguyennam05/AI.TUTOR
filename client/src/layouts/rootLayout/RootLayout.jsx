
import { Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider,SignedIn,SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import{QueryClient, QueryClientProvider } from '@tanstack/react-query';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const queryClient = new QueryClient()
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={YOUR_PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
    <div className='rootLayout'>
        <header>
            <a href ="/" className='logo'>
            <img src="/logo.png" alt=""/>
            <span>AI TUTOR</span>
            </a>
            <div className='user'>
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
        </div>
        </QueryClientProvider>
      </ClerkProvider>
  )
}

export default RootLayout