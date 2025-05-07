import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {

  
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className='left'>
        <h1>AI.TUTOR</h1>
        <h2>Learn and revise things faster.</h2>
        <h3>started on 21st january 2025 by student of  III-CSE-C (Innovative product development 4)</h3>
        <p>
        P.Meenakshi-22RH1A05K1
        </p>
            <a href="/dashboard" className='button_in'><b>Get Started</b></a>
      </div>
      <div>
       <div className="right">
        <div className='imgContainer'>
          <div className='bgContainer'>
            <div className='bg'></div>
          </div>
          <img src='/bot.png' alt="" className='bot'/>
          <div className='chat'>
            <img src="/logo.png" alt=""/>
            <TypeAnimation
            sequence={[
              'Learn things from syllabus...',
              1000,
              'Ace your exams...',
              1000,
              'stay productive with AI TUTOR...',
              1000
            ]}
            wrapper="span"
            speed={60}
            style={{fontSize: '0.8em',display: "inline-block"}}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            />
          </div>
        </div>
        </div> 
        <div className='terms'>
          <img src='/logo.png' alt=""/>
          <div className='links'>
            <a href="/">Terms Of Service</a>
            <span>|</span>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage; 
