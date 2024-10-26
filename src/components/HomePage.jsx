import React from "react";
import rakunBcoin from "../assets/rakun-bcoin.png";
import rakunGold from "../assets/rakun-gold-rush.png";
import rakunIndustrial from "../assets/rakun-industrial.png";
import rakunStock from "../assets/rakun-stock.png";

import rakunIcon from "../assets/rakun-icon.png";
import rakunRocket from "../assets/rakun-rocket.png";
import { HashLink } from "react-router-hash-link";

function HomePage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center p-6 bg-[#9cd6d0] bg-opacity-70 shadow-md">
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0">
          <img
            src={rakunIcon}
            alt="Rakun Icon"
            className="h-20 w-20 md:h-28 md:w-28 mr-4 md:mr-6 rounded-full object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-bold">RAKUN</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 md:space-x-8">
            <li>
              <HashLink
                to="/"
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl border-2 border-black rounded-lg p-2"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#story-section"
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl border-2 border-black rounded-lg p-2"
              >
                Story
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact-section"
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl border-2 border-black rounded-lg p-2"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="pt-32 md:pt-40">
        <div
          className="home-section min-h-screen bg-cover bg-center p-4 sm:p-6 md:p-8 lg:p-12 font-montserrat relative"
          style={{
            backgroundImage: `url(${rakunRocket})`,
            backgroundPosition: "center top 37.5%",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 md:left-16 md:translate-x-0 lg:left-24 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg border-2 border-black max-w-xs md:max-w-sm w-full flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome to RAKUN</h2>
            <p className="text-sm md:text-base mb-4">
              Discover the world of digital assets and opportunities!
            </p>
            <a
              href="#" // Replace with your desired URL
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="story-section min-h-screen bg-[#9cd6d0] p-4 sm:p-6 md:p-8 lg:p-12 font-montserrat flex items-center justify-center">
          <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 w-full">
            <h2
              id="story-section"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-8"
            >
              Story
            </h2>
            <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-black bg-opacity-10 p-4 rounded-lg shadow-xl">
              <img
                src={rakunGold}
                alt="rakun-gold-rush"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md border-2 border-black hover:scale-105 transition-all duration-300"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-2 border-2 bg-[#9cd6d0] border-black rounded-3xl px-4 py-2 shadow-md">
                  Gold Rush
                </h3>
                <p className="text-sm sm:text-base lg:text-lg border-2 border-black rounded-lg p-4 bg-[#c7e9e3] bg-opacity-50 shadow-md">
                  Gold has always gone up in value since ancient times. But
                  people were always too late to buy gold. The fact that so much
                  value has been attached to a coloured metal for so long has
                  become a contradiction in terms to the normal course of life.
                  Let the holders of capital keep their gold. We're after
                  something else.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row-reverse sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse bg-black bg-opacity-10 p-4 rounded-lg shadow-xl">
              <img
                src={rakunIndustrial}
                alt="rakun-industrial"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md border-2 border-black hover:scale-105 transition-all duration-300"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-2 border-2 bg-[#9cd6d0] border-black rounded-3xl px-4 py-2 shadow-md">
                  Black Gold
                </h3>
                <p className="text-sm sm:text-base lg:text-lg border-2 border-black rounded-lg p-4 bg-[#c7e9e3] bg-opacity-50 shadow-md">
                  In Britain, an entrepreneur had the mad idea of introducing
                  the steam engine into the manufacturing process. And it was a
                  harbinger that this idea would change the whole world and
                  bring us to where we are today. It was realised that these
                  magical machines needed the essence of dinosaurs to work, and
                  BAM! oil went from worthless sludge to black gold.
                  Unfortunately, you weren't around when it all started and
                  didn't get your share. But now you have a chance to reclaim
                  the share you lost for reasons beyond your control.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-black bg-opacity-10 p-4 rounded-lg shadow-xl">
              <img
                src={rakunStock}
                alt="rakun-stock"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md border-2 border-black hover:scale-105 transition-all duration-300"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-2 border-2 bg-[#9cd6d0] border-black rounded-3xl px-4 py-2 shadow-md">
                  Paper Gold
                </h3>
                <p className="text-sm sm:text-base lg:text-lg border-2 border-black rounded-lg p-4 bg-[#c7e9e3] bg-opacity-50 shadow-md">
                  Some burly guys in big hats scribbled something on a piece of
                  paper and suddenly it was worth a lot of money. They called
                  them shares and they went up and down until the men in boring
                  suits went home. You were born into the technology world, but
                  you didn't know NVIDIA would be worth that much. It doesn't
                  matter, the majority didn't either.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row-reverse sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse bg-black bg-opacity-10 p-4 rounded-lg shadow-xl">
              <img
                src={rakunBcoin}
                alt="rakun-bcoin"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md border-2 border-black hover:scale-105 transition-all duration-300"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-2 border-2 bg-[#9cd6d0] border-black rounded-3xl px-4 py-2 shadow-md">
                  Digital Gold
                </h3>
                <p className="text-sm sm:text-base lg:text-lg border-2 border-black rounded-lg p-4 bg-[#c7e9e3] bg-opacity-50 shadow-md">
                  On 3 January 2009, one or more programmers (it's still a
                  mystery) started writing a few lines of code, not knowing they
                  had created digital gold. This digital gold grew so big that
                  it was worth enough to buy a pizza. If we take time out of the
                  equation, that pizza is the equivalent of 2 Boeing 747
                  airliners. Needless to say, you missed them too. You also
                  missed Doge, Shiba, PEPE, BONK and even NACHO. Now here's a
                  train you can't miss!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
