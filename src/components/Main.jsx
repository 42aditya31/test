import React from 'react';
import { Link } from 'react-router-dom';
import Mainimg from "../assets/Background.png";
import Counts from "./Counts";

const Main = () => {
  return (
    <>
      <div className="relative lg:mt-0 md:mt-0">
        {/* Background Animation */}
        <div className="area absolute inset-0">
          <ul className="circles">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <li key={index}></li>
              ))}
          </ul>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col-reverse -mt-5 lg:px-20">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2 lg:p-8 lg:ml-12 ml-8 mr-8 text-center lg:text-left">
            <h2 className="lg:text-6xl text-4xl lg:mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-200 inline-block text-transparent bg-clip-text font-bold mb-4">
              Make your next <br />
              hire with <br />
              <span>Career Hub</span>
            </h2>
            <p className="text-gray-600 text-[1.4rem] py-3">
              We can help you expand your reach and get your jobs in front of the right candidates.
            </p>
            <div className="flex items-center lg:py-6 py-4 gap-4 lg:ml-0 lg:justify-start justify-center">
              {/* Hire Talent Button */}
              <button
                className="bg-blue-900 hover:bg-[#e7f3ff] hover:text-blue-900 rounded-md duration-200 font-semibold py-2 px-4 text-xl shadow-lg"
                type="button"
              >
                <Link to="/postform">Hire Talent</Link>
              </button>
              {/* Explore Jobs Button */}
              <button
                className="bg-blue-900 hover:bg-[#e7f3ff] hover:text-blue-900 duration-200 font-semibold rounded-md py-2 px-4 text-xl"
                type="button"
              >
                <Link to="/job">Explore Job</Link>
              </button>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2 pt-16 flex flex-col lg:space-y-4 lg:-ml-20 -mt-5">
            <img
              className="lg:h-[400px] lg:w-[700px] md:h-[400px] md:w-[700px] h-[150px] w-[300px] hidden lg:block opacity-50 lg:opacity-100 mix-blend-multiply"
              src={Mainimg}
              alt="Background"
            />
          </div>
        </div>

        {/* Counts Component */}
        <Counts />
      </div>
    </>
  );
};

export default Main;
