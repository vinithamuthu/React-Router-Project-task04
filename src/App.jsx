 import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import All from './Components/All';
import FullStack from './Components/FullStack'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Career from './Components/Career'

const App = () => {
let data = [

  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Roles-and-Responsibilities-of-a-Backend-Developer.webp',
    head:'Full Stack Development',
    content:"Roles and Responsibilities of a Backend Developer: A Simplified Guide [2024]",
    date:"13",
    month:"April",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp',
    head:'Data Science',
    content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024]",
    date:"3",
    month:"march",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1.webp',
    head:'Data Science',
    content:"Impact of Certification Programs on Hiring Data Scientists",
    date:"30",
    month:"January",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
    head:'Data Science',
    content:"Top Product-Based Companies for Data Science Freshers",
    date:"7",
    month:"December",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Backend-Developer-Interview-Questions-and-Answers.webp',
    head:'Full Stack Development',
    content:"Backend Developer Interview Questions and Answers: A Resourceful Guide [2024]",
    date:"5",
    month:"June",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
    head:'CYBER SECURITY',
    content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    date:"4",
    month:"July",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
    head:'CYBER SECURITY',
    content:"What Is Hacking? Types of Hacking & More",
    date:"8",
    month:"August",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/javascript_frontend_roadmap.webp',
    head:'CAREER',
    content:"Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
    date:"1",
    month:"September",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp',
    head:'CAREER',
    content:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
    date:"19",
    month:"September",
  },

  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Best-Frontend-Developer-Interview-Questions-Answers.webp',
    head:'Full Stack Development',
    content:"24 Best Frontend Developer Interview Questions & Answers",
    date:"20",
    month:"February",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Top-Full-Stack-Developer-Interview-Questions-Answers.webp',
    head:'Full Stack Development',
    content:"Top 24 Full Stack Developer Interview Questions & Answers",
    date:"20",
    month:"February",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    head:'Full Stack Development',
    content:"Frontend vs Backend Development: Top 7 Differences",
    date:"16",
    month:"February",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
    head:'Data Science',
    content:"What is the Difference between Data Science and Data Engineering?",
    date:"8",
    month:"November",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1.png',
    head:'Data Science',
    content:"Top 10 Data Science Tools in 2024",
    date:"1",
    month:"November",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp',
    head:'Data Science',
    content:"Top Product-Based Companies for Data Scientists in 2024",
    date:"5",
    month:"October",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp',
    head:'Data Science',
    content:"Useful Python Libraries & Tools for Data Science Beginners",
    date:"7",
    month:"March",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp',
    head:'Data Science',
    content:"Extraordinary Data Science Projects for Beginners As Well as Veterans",
    date:"23",
    month:"May",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2.webp',
    head:'CAREER',
    content:"Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
    date:"28",
    month:"May",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp',
    head:'CAREER',
    content:"Mechanical Engineering Resume: 9 Important Things To Look Out For",
    date:"8",
    month:"March",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/1-scaled.webp',
    head:'CAREER',
    content:"A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow",
    date:"15",
    month:"June",
  },
  {
    image:'',
    head:'CYBER SECURITY',
    content:"Top 7 Cyber Security Attacks in Real Life",
    date:"",
    month:"",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
    head:'CYBER SECURITY',
    content:"Cybersecurity vs Artificial Intelligence | Better Career",
    date:"4",
    month:"April",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg',
    head:'CYBER SECURITY',
    content:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    date:"9",
    month:"January",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9.png',
    head:'CYBER SECURITY',
    content:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    date:"13",
    month:"February",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png',
    head:'CYBER SECURITY',
    content:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    date:"21",
    month:"July",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp',
    head:'CAREER',
    content:"Top 8 Product-based Companies for UI/UX Designers [Freshers]",
    date:"11",
    month:"September",
  },
  {
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp',
    head:'CAREER',
    content:"Best Product-Based Companies for Game Developers in 2024",
    date:"30",
    month:"May",
  }
  


]


  return (
    <div>
      <h1 className="app">React Router Task</h1>

<div className="top">
      <BrowserRouter>
          
           <div className='menu'>
            <Navbar />
           </div>

        <Routes className="link">
          
           <Route path='/' element={<All data={data} />} />
           <Route path='/fullStackDeveloper' element={<FullStack data={data} />} />
           <Route path='/dataScience' element={<DataScience data={data} />} />
           <Route path='/cyberSecurity' element={<CyberSecurity data={data} />} />
           <Route path='/career' element={<Career data={data} />} />
           
        </Routes>
      
      </BrowserRouter>
      </div>
    </div>
  );
};

export default App;