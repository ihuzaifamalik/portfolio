
"use client";


import React from 'react'
import Image from 'next/image';


import Typewriter from 'typewriter-effect';


import { VscVscode } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

export default function Home() {
  return (
    <main>
      <title>Huzaifa</title>
      {/* {header section} */}
      {/* navbar */}
      <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Huzaifa</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-900	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white">Home</a>
      <a className="mr-5 hover:text-white">About Us</a>
      <a className="mr-5 hover:text-white">Contact Us</a>
      <a className="mr-5 hover:text-white">Privacy Policy</a>
    </nav>
    <a href="https://github.com/ihuzaifamalik?tab=repositories">
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0">Github
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </a>
  </div>
</header>
{/* hero section */}
<section className="text-gray-300  bg-gray-800 body-font">

  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    {/* image */}
      <Image className="object-cover object-center rounded " alt="hero" src="/images/huzaifa.png"  width={500}
      height={300} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    {/* typewriter effect */}
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><Typewriter
  options={{
    strings: ["  Front-End Developer" ," Proficient in JavaScript, TypeScript, HTML5 & CSS3" , "Learning Next.js"],
    autoStart: true,
    loop: true,
  }}
/></h1>


      <p className="mb-8 leading-relaxed  ">I am Huzaifa, an enthusiastic  student, and a budding front-end developer. My journey in web development has been fueled by a passion for creating visually appealing and user-friendly web applications. With a solid foundation in JavaScript (ES6+), TypeScript, React.js, Next.js, HTML5, and CSS3, I am committed to continuous learning and delivering high-quality front-end solutions. I am expanding my skillset by learning Nest.js, and I am excited to contribute to innovative projects and solve complex challenges in the tech world.</p>
      <div className="flex w-full md:justify-start justify-center items-end">

        <a href="https://www.linkedin.com/in/cyber-huzaifa/">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">Lets Connect with me</button>
        </a>
      </div>
      <p className="text-sm mt-2 text-gray-400 mb-8 w-full">Let's connect and grow together in the world of web development!</p>
      <div className="flex lg:flex-row md:flex-col">
        
      </div>
    </div>
  
  </div>
{/* services */}
  <div className='container  px-5 py-5 mx-auto'>
  <div className='flex flex-col text-center w-full mt-20 '>
        {/* typewriter effect */}
        <h1 className="text-4xl font-black title-font mb-4 text-indigo-500 tracking-widest uppercase"><Typewriter
  options={{
    strings: ["  Services I Provide As A Web Developer"],
    autoStart: true,
    loop: true,
  }}
/></h1>
  </div>
</div>
  <div className="container  py-2 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div  >
        <div className="  flex relative  pb-12">
          <div className="h-full w-20 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-3 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-2xl  text-white mb-2 tracking-wider">Responsive Web Design</h2>
            <p className="text-lg leading-loose text-gray-300 font-bold">Creating visually stunning and mobile-friendly websites using HTML, CSS, and JavaScript. I ensure a seamless user experience across all devices, from smartphones to desktops.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-20 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-3 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-2xl text-white mb-1 tracking-wider">Interactive User Interfaces</h2>
            <p className="text-lg leading-loose text-gray-300 font-bold">Developing dynamic and engaging interfaces with JavaScript and TypeScript. I bring websites to life with smooth animations and interactive elements that captivate users.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-20 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-3 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-2xl text-white mb-1 tracking-wider">Custom Web Layouts</h2>
            <p className="text-lg leading-loose text-gray-300 font-bold">Designing intuitive and custom layouts that reflect your brand's identity. I tailor the design to align perfectly with your vision and goals</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-20 absolute inset-0 flex items-center justify-center">
            
          </div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-2xl text-white mb-1 tracking-wider">Web Performance Optimization</h2>
            <p className="text-lg leading-loose text-gray-300 font-bold">Improving website performance to ensure fast loading times and a smooth user experience. I optimize code and assets to enhance speed and efficiency.</p>
          </div>
        </div>
        <div className="flex relative">
          
        </div>
      </div>
    </div>
  </div>
  
</section>



{/* image CARDS */}
<section className='py-5 text-gray-400 bg-gray-900 body-font'>
<div className='container px-5 py-5 mx-auto'>
  <div className='flex flex-col text-center w-full mt-10'>
    
            {/* typewriter effect */}
            <h1 className="text-4xl font-black title-font mb-4  text-yellow-400 tracking-widest uppercase"><Typewriter
  options={{
    strings: [" My Projects"],
    autoStart: true,
    loop: true,
  }}
/></h1>


  </div>
</div>
<div className='  bg-gray-900 flex flex-row justify-around'>
{/* calculator */}
<div className="bg-grey border shadow-[0_4px_25px_rgba(0,0,0,0.1)]  p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
  <div className="min-h-[245px] transition-transform duration-300 ease-in-out transform hover:scale-110">
    <Image className="w-full rounded-lg h-80" src="/images/card.png" alt="person coding" fill   />
  </div>
  <div className='p-4 text-center'>
    <h3 className="text-xl font-black">Calculator</h3>
    <p className='mt-3 text-sm text-gray-500 leading-relaxed'>
    Effortlessly perform arithmetic operations with this enhanced calculator, complete with memory functions and advanced features
    </p>
    <a href="https://vercel.com/hafsas-projects-61c24ba3/simple-calculator/97bJaAuGr81R8pyhiRzyp9p3V96P">
    <button className="mt-4 bg-blue-500  hover:bg-green-600 text-white py-2 px-4 rounded-lg">Explore It</button>
    </a>
  </div>
</div>
{/* resume */}
<div className="bg-grey border shadow-[0_4px_25px_rgba(0,0,0,0.1)]  p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
  <div className="min-h-[245px] transition-transform duration-300 ease-in-out transform hover:scale-110">
    <Image className="w-full rounded-lg h-80  border-b border-gray-300" src="/images/resume.png" alt="person coding" fill   />
  </div>
  <div className='p-4 text-center'>
    <h3 className="text-xl font-black">Resume Builder</h3>
    <p className='mt-3 text-sm text-gray-500 leading-relaxed'>
    Create polished, professional resumes effortlessly with my intuitive resume generator.
    </p>
    <a href="https://vercel.com/hafsas-projects-61c24ba3/unique-resume-builder/kHhKSWhzaC1RrTBFYGSPS6psntwA">
    <button className="mt-4 bg-blue-500  hover:bg-green-600 text-white py-2 px-4 rounded-lg">Explore It</button>
    </a>
  </div>
</div>

{/* timer */}
<div className="bg-grey border shadow-[0_4px_25px_rgba(0,0,0,0.1)]  p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
  <div className="min-h-[245px] transition-transform duration-300 ease-in-out transform hover:scale-110">
    <Image className="w-full rounded-lg h-80  border-b border-gray-300" src="/images/timer.png" alt="person coding" fill   />
  </div>
  <div className='p-4 text-center'>
    <h3 className="text-xl font-black">Countdown Timer</h3>
    <p className='mt-3 text-sm text-gray-500 leading-relaxed'>
    Efficiently track time with precision using my user-friendly and versatile timer tool.
    </p>
    <a href="https://vercel.com/hafsas-projects-61c24ba3/countdown-timer/oRhonQzioYgAy1MQuDQTen5EDS9N">
    <button className="mt-4 bg-blue-500  hover:bg-green-600 text-white py-2 px-4 rounded-lg">Explore It</button>
    </a>
  </div>
</div>
{/* number guessing game */}
<div className="bg-grey border shadow-[0_4px_25px_rgba(0,0,0,0.1)]  p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
  <div className="min-h-[245px] transition-transform duration-300 ease-in-out transform hover:scale-110">
    <Image className="w-full rounded-lg h-80  border-b border-gray-300" src="/images/guess .png" alt="person coding" fill   />
  </div>
  <div className='p-4 text-center'>
    <h3 className="text-xl font-black">Number Guess Game</h3>
    <p className='mt-3 text-sm text-gray-500 leading-relaxed'>
    Challenge your intuition and have fun with my interactive number guessing game - perfect for sharpening your guessing skills!
    </p>
    <a href="https://vercel.com/hafsas-projects-61c24ba3/number-guessing-game/AL7mMJBSCTrxCc3KMuYqJ4LxXu2V">
    <button className="mt-4 bg-blue-500  hover:bg-green-600 text-white py-2 px-4 rounded-lg">Explore It</button>
    </a>
  </div>
</div>

{/* Bithday Wish App */}
<div className="bg-grey border shadow-[0_4px_25px_rgba(0,0,0,0.1)]  p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
  <div className="min-h-[245px] transition-transform duration-300 ease-in-out transform hover:scale-110">
    <Image className="w-full rounded-lg h-80  border-b border-gray-300" src="/images/birth.png" alt="person coding"  fill  />
  </div>
  <div className='p-4 text-center'>
    <h3 className="text-xl font-black">Bithday Wish App</h3>
    <p className='mt-3 text-sm text-gray-500 leading-relaxed'>
    Brighten someone's special day with personalized messages and festive animations using my birthday wishing app.
    </p>
    <a href="https://vercel.com/hafsas-projects-61c24ba3/birthday-wish-app/BtahwSQ44GvSxZjUV7gJaXzPnR16">
    <button className="mt-4 bg-blue-500  hover:bg-green-600 text-white py-2 px-4 rounded-lg">Explore It</button>
    </a>
  </div>
</div>


</div>
</section>

{/* features section */}
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
            {/* typewriter effect */}
            <h1 className="text-4xl font-black title-font mb-4  text-yellow-400 tracking-widest uppercase"><Typewriter
  options={{
    strings: ["  Project Features And Commads"],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <p className="text-base leading-relaxed xl:w-3/4 lg:w-1 mx-auto">With advanced features like real-time collaboration, user authentication, and detailed analytics, my project ensures a seamless experience. You can easily manage commands with intuitive controls, making it both powerful and user-friendly.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 8_quiz-app_by_hafsa</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 7_adventure-game-by-hafsa</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 6_student-management-system</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 4_currency_converter_by_hafsa</span>
        </div>
      </div>


      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 26cli_number_guessing</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 0_simple-calculator-</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx 9_countdown_timer_by_hafs</span>
        </div>
      </div>

      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white"> npx 2345a_atm</span>
        </div>
      </div>
    </div>
    <a href="https://github.com/ihuzaifamalik?tab=repositories">

    <button className="bg-yellow-500 flex mx-auto mt-16 text-white  py-1 px-4 rounded-lg items-center  hover:bg-blue-400  focus:outline-none">
      <Image className='w-20 h-15'  src="/images/github.png" alt="github"   width={20}
      height={15} />
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white-500 mb-1">GITHUB</span>
          <span className="title-font text-black font-bold">ihuzaifamalik</span>
        </span>
      </button>
    </a>
  </div>
</section>


{/* programming languages */}

<section className='bg-gray-800'>
<div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl '>
    {/* typewriter effect */}
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><Typewriter
  options={{
    strings: ['Programming Languages'],
    autoStart: true,
    loop: true,
  }}
/></h1>

{/* Icons */}
{/* Html5 */}
<div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<IoLogoHtml5 className='text-sky-500 text-6xl'/>
<span className='mt-2 text-lg text-black'>Html5</span>
</div>
{/* Css3*/}
<div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<FaCss3Alt className='text-orange-500 text-6xl'/>
<span className='mt-2 text-lg text-black'>Css3</span>
</div>
{/* js */}
<div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<IoLogoJavascript className='text-sky-500 text-6xl'/>
<span className='mt-2 text-lg text-black'>Javascript</span>
</div>
{/*ts*/}
<div className='flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<BiLogoTypescript className='text-orange-500 text-6xl'/>
<span className='mt-2 text-lg text-black'>Typescript</span>
</div>


</div>
</section>







{/* development Icons and framworks */}
<section className='bg-gray-800'>
<div className='container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2xl'>
{/* Icons */}
{/* vs code */}
<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<VscVscode className='text-sky-500 text-6xl'/>
<span className='mt-2 text-lg text-black'>Visual Studio Code</span>
</div>
{/* github */}
<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<VscGithub className='text-orange-500 text-6xl'/>
<span className='mt-2 text-lg text-black'>Github</span>
</div>
    {/* typewriter effect */}
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><Typewriter
  options={{
    strings: ['Development Tools And Frame Works'],
    autoStart: true,
    loop: true,
  }}
/></h1>


</div>
</section>

{/* Contact Us */}
<section className='py-5 text-gray-400 bg-gray-900 body-font'>
<div className='container px-5 py-5 mx-auto'>
  <div className='flex flex-col text-center w-full mt-20'>
    
            {/* typewriter effect */}
            <h1 className="text-4xl font-black title-font mb-4  text-yellow-400 tracking-widest uppercase"><Typewriter
  options={{
    strings: ["  Contact Us"],
    autoStart: true,
    loop: true,
  }}
/></h1>

    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
fill the form below for any queries
    </p>
  </div>
</div>
<section className=" container px-2 py-0 mx-auto text-gray-400 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900">
    <iframe title="map" width="100%" height="100%"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5">Please fill this form if you have any queries or have any message for us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Read our privacy policy for any issue.</p>
    </div>
  </div>
</section>
</section>

{/* footer */}
<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Huzaifa</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Huzaifa
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Portfolio</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-400">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>


{/*  */}


    </main>

  )
}
