import { useState } from 'react';
import Goals from './components/Goals';
import Transactions from './components/Transactions';
import Tree from './components/Tree';
import TipBox from './components/TipBox';
import './App.css';
import SpaceVideo from './assets/Space Flight Loop.mp4';
import Planet1 from './components/Planet1';
import Planet2 from './components/Planet2';
import Planet3 from './components/Planet3';

function App() {
  return (
    <>
      <div className='video-background'>
        <video autoPlay loop muted className='video h-full w-full object-cover'>
          <source src={SpaceVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='grid grid-cols-14 grid-flow-col h-[100vh] bg-opacity-0 bg-gray-900 text-white overflow-hidden overscroll-none'>
          <div className='col-span-4 w-0 min-w-full'>
            <Goals />
          </div>

          <div className='col-span-6 w-0 min-w-full'>
            <div className='h-[90vh] grid grid-rows-7 grid-flow-row my-8'>
              <div className='p-8 row-span-1'><img src='src/assets/logo.png' alt='Logo'></img></div>
              <div className='flex-1 flex justify-center items-center row-span-5'><img className='w-72 h-72 bounce' src='src/assets/rocket.gif' alt='Rocket'></img></div>
              <div className='row-span-1 flex flex-row'><TipBox /></div>
            </div>

          </div>
          
          <div className='col-span-4 w-0 min-w-full'>
            <div><Transactions /></div>
          </div>
        </div>
      </div>

      {/* Planets (absolute positioned) */}
      <div className='absolute top-[20vh] left-[63vw] select-none planet ease-out'>
        <Planet1 />
      </div>
      <div className='absolute top-[40vh] left-[30vw] select-none planet2 ease-out'>
        <Planet2 />
      </div>
      <div className='absolute top-[63vh] left-[54vw] select-none planet3 ease-out'>
        <Planet3 />
      </div>
    </>
  );
}

export default App;
