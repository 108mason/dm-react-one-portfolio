import React from 'react';


import java from "../assets/java.png";
import selenium from "../assets/selenium.png";
import appium from "../assets/appium.png";
import restapi from "../assets/restapi.png";
import testng from "../assets/testng.png";
import database from "../assets/database.png";
import sql from "../assets/sql.png";
// import jenkins from "../assets/jenkins.png";




export const ExperienceA = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src:  selenium,
            title: 'Selenium',
            style: 'shadow-green-500'
        },
        {
            id: 3,
            src: appium,
            title: 'Appium',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: restapi,
            title: 'Rest API',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: testng,
            title: 'TestNG',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: database,
            title: 'Database Testing',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: sql,
            title: 'SQL',
            style: 'shadow-blue-500'
        },
        
    ]



  return (
   <div name="experienceA"
    className="pt-80 bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >

    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Automation Experience 
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {techs.map(({ id, src, title, style }) => (
                <div
                 key={id}
                 className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                 >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
            ))}
        
        </div>
    </div>
   </div>
  );
};

