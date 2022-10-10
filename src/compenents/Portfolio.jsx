import React from 'react'

import GenAxia from '../assets/portfolio/GenAxia.png'
import Go2films from '../assets/portfolio/Go2films.png'
import Weatherapp from '../assets/portfolio/Weatherapp.png'
import nopcomm from '../assets/portfolio/nopcomm.png'
import todolist from '../assets/portfolio/todolist.png'
import RSPGame from '../assets/portfolio/RSPGame.png'
import memegenerator from "../assets/memegenerator.PNG";
import tenzies from "../assets/tenzies.png";

const Portfolio = () => {

    const Portfolios = [

        {
            id: 1, 
            src: GenAxia, 
            code: 'https://github.com/108mason/Axia-General',
            lnk: 'https://github.com/108mason/Axia-General'
            

        },
        {
            id: 2, 
            src: Go2films,
            code: 'https://go2films.com/',
            lnk: 'https://go2films.com/'
           
        },
        {
            id: 3, 
            src: Weatherapp,
            code: 'https://github.com/108mason/ResponsiveWeatherAppInReact',
            lnk: 'https://bright-otter-664eb7.netlify.app/'
            
        },
        {
            id: 4, 
            src: nopcomm,
            code: 'https://github.com/108mason/FullStackAutomationProject',
            lnk:'https://github.com/108mason/FullStackAutomationProject'
            
        },
        {
            id: 5, 
            src: todolist,
            code: 'https://github.com/108mason/ToDo-App',
            lnk: 'https://aesthetic-profiterole-310c9f.netlify.app/'
            
        },
        {
            id: 6, 
            src: RSPGame,
            code: 'https://github.com/108mason/RockPaperScissorsGame',
            lnk: 'https://incredible-gumdrop-b4bca1.netlify.app/'
           
        },
        {
            id: 7, 
            src: memegenerator,
            code: 'https://github.com/108mason/memegenerator',
            lnk: 'https://memegenerator-seven.vercel.app'
           
        },
        {
            id: 8, 
            src: tenzies,
            code: 'https://github.com/108mason/TenziesGame',
            lnk: 'https://tenzies-three-rho.vercel.app'
           
        },

    ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" 
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6 " >Check out some of my work right here</p>
            </div>

          

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                Portfolios.map(({id, src, lnk, code}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img
                     src={src}
                      alt=""
                      className="rounded-md duration=200 hover:scale-105"
                       />
                    <div className="flex items-center justify-center">
                       <a href={lnk}  className="w-1/2 px-6 py-3 m-4 duration-200 hover-scale-105" >Demo</a> 
                        <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover-scale-105">Code</a>
                    </div>
            </div>
                ))
            }
            
        </div>

    </div>
    </div>
  );
};

export default Portfolio
