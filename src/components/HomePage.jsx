import React, { useEffect } from "react";
import rakunBcoin from "../assets/rakun-bcoin.png";
import rakunGold from "../assets/rakun-gold-rush.png";
import rakunIndustrial from "../assets/rakun-industrial.png";
import rakunStock from "../assets/rakun-stock.png";
import rakunIconTrans from "../assets/rakun-icon-trans.png";
import rakunIcon from "../assets/rakun-icon.png";
import rakunRocket from "../assets/rakun-rocket.png";
import rakunWhitepaper from "../assets/RAKUN_Whitepaper.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaChartLine, FaUsers, FaGlobe, FaCode } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { FaXTwitter, FaDiscord, FaTelegram, FaTiktok } from "react-icons/fa6";

function HomePage() {
  // Add this function inside the HomePage component
  const handleWhitepaperClick = (e) => {
    e.preventDefault();
    window.open(rakunWhitepaper, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col lg:flex-row justify-between items-center p-3 lg:p-6 bg-gradient-to-r from-[#8cc0bb] via-[#9cd6d0] to-[#8cc0bb] shadow-lg backdrop-blur-sm font-montserrat">
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 mb-3 lg:mb-0">
          <img
            src={rakunIcon}
            alt="Rakun Icon"
            className="h-12 w-12 lg:h-24 lg:w-24 mr-3 md:mr-6 rounded-full object-cover border-2 lg:border-4 border-black shadow-lg hover:border-[#059284] transition-colors duration-300"
          />
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black drop-shadow-lg">
            $RAKUN
          </h1>
        </div>
        <nav className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl lg:rounded-2xl px-4 lg:px-6 py-2 lg:py-4 shadow-lg">
          <ul className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {["$RAKUN", "Story", "Roadmap", "Socials"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}-section`}
                  className="relative inline-block px-3 lg:px-6 py-2 lg:py-3 text-base lg:text-lg font-semibold text-white bg-[#059284] rounded-lg lg:rounded-xl 
                  hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl
                  transform hover:-translate-y-1 active:translate-y-0
                  before:content-[''] before:absolute before:top-0 before:left-0 
                  before:w-full before:h-full before:bg-white before:opacity-0 
                  before:transition-opacity before:duration-300 hover:before:opacity-10"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href={rakunWhitepaper}
                onClick={handleWhitepaperClick}
                className="relative inline-block px-3 lg:px-6 py-2 lg:py-3 text-base lg:text-lg font-semibold text-white bg-[#059284] rounded-lg lg:rounded-xl 
                hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl
                transform hover:-translate-y-1 active:translate-y-0
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-full before:h-full before:bg-white before:opacity-0 
                before:transition-opacity before:duration-300 hover:before:opacity-10"
              >
                Whitepaper
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="$rakun-section" className="font-montserrat">
        <div
          className="home-section min-h-screen bg-cover bg-center p-4 sm:p-6 md:p-8 lg:p-12 relative flex flex-col justify-end"
          style={{
            backgroundImage: `url(${rakunRocket})`,
            backgroundPosition: "center top 15%",
          }}
        >
          <div className="buy-section bg-gradient-to-br from-white via-[#9cd6d0] to-[#8cc0bb] p-6 rounded-2xl shadow-2xl border-4 border-black max-w-sm w-full flex flex-col items-center text-center mx-auto md:mx-0 md:ml-16 lg:ml-24 mb-8 md:mb-16 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-black">
              $RAKUN
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-black">
              Thrash kingdom, financial freedom!
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-gray-700">
              $RAKUN is a community-driven token that aims to empower holders
              through financial freedom.
            </p>
            <ul className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 text-left">
              <li className="flex items-center mb-2">
                <span className="mr-2 text-green-600">✓</span> 100% Fair-minted
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2 text-green-600">✓</span> No Pre-allocation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✓</span> Community-driven
              </li>
            </ul>

            <a
              href="https://t.me/kspr_home_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#059284] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-black transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Buy $RAKUN on KSPR Bot
            </a>
          </div>
        </div>
        <div
          id="story-section"
          className="story-section min-h-screen bg-gradient-to-br from-[#9cd6d0] via-[#a8e0da] to-[#8cc0bb] p-4 sm:p-6 md:p-8 lg:p-12 font-montserrat"
        >
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 w-full">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-12 relative">
              <span className="relative inline-block">Story</span>
            </h2>

            {/* Story Cards - Each card has enhanced styling */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-black/20">
              <img
                src={rakunGold}
                alt="rakun-gold-rush"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-2xl shadow-xl border-4 border-black/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4 bg-[#059284] text-white border-2 border-black rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                  Gold Rush
                </h3>
                <p className="text-base lg:text-lg border-2 border-black/20 rounded-xl p-6 bg-white/50 backdrop-blur-sm shadow-lg leading-relaxed">
                  Gold has always gone up in value since ancient times. But
                  people were always too late to buy gold. The fact that so much
                  value has been attached to a coloured metal for so long has
                  become a contradiction in terms to the normal course of life.
                  Let the holders of capital keep their gold. We're after
                  something else.
                </p>
              </div>
            </div>

            {/* Repeat the same enhanced styling for other story cards */}
            <div className="flex flex-col items-center sm:flex-row-reverse sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-black/20">
              <img
                src={rakunIndustrial}
                alt="rakun-industrial"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-2xl shadow-xl border-4 border-black/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4 bg-[#059284] text-white border-2 border-black rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                  Black Gold
                </h3>
                <p className="text-base lg:text-lg border-2 border-black/20 rounded-xl p-6 bg-white/50 backdrop-blur-sm shadow-lg leading-relaxed">
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

            <div className="flex flex-col items-center sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-black/20">
              <img
                src={rakunStock}
                alt="rakun-stock"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-2xl shadow-xl border-4 border-black/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4 bg-[#059284] text-white border-2 border-black rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                  Paper Gold
                </h3>
                <p className="text-base lg:text-lg border-2 border-black/20 rounded-xl p-6 bg-white/50 backdrop-blur-sm shadow-lg leading-relaxed">
                  Some burly guys in big hats scribbled something on a piece of
                  paper and suddenly it was worth a lot of money. They called
                  them shares and they went up and down until the men in boring
                  suits went home. You were born into the technology world, but
                  you didn't know NVIDIA would be worth that much. It doesn't
                  matter, the majority didn't either.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row-reverse sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse bg-white/30 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-black/20">
              <img
                src={rakunBcoin}
                alt="rakun-bcoin"
                className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-2xl shadow-xl border-4 border-black/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              />
              <div className="w-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4 bg-[#059284] text-white border-2 border-black rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                  Digital Gold
                </h3>
                <p className="text-base lg:text-lg border-2 border-black/20 rounded-xl p-6 bg-white/50 backdrop-blur-sm shadow-lg leading-relaxed">
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
      {/* After the story section and before the footer */}
      <div id="roadmap-section" className="bg-[#a8e0da] py-16 font-montserrat">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-12">
          Roadmap
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#8cc0bb",
              color: "#000",
              fontFamily: "Montserrat",
              border: "1px solid #000",
              fontSize: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="2024 October"
            iconStyle={{ background: "#9cd6d0", color: "#fff" }}
            icon={<IoRocketOutline />}
          >
            <h3 className="vertical-timeline-element-title text-center font-bold text-2xl border-2 bg-[#9ed5ce] border-black rounded-3xl px-4 py-2 shadow-md">
              Fair Launch & Community Minting
            </h3>
            <ul className="list-none mt-2">
              <li className="flex items-center mb-2 border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <IoRocketOutline className="mr-2 mt-1 flex-shrink-0 text-2xl text-white" />
                <p className="text-center">
                  Promote the minting process and encourage community
                  participation to reach the 28.7 billion $RAKUN supply cap.
                </p>
              </li>
              <li className="flex items-center border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <IoRocketOutline className="mr-2 mt-1 flex-shrink-0 text-2xl text-white" />
                <p className="text-center">
                  Emphasize transparency, with each token batch minted by the
                  community, creating a foundation of trust.
                </p>
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#8cc0bb",
              color: "#000",
              border: "1px solid #000",
              fontSize: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="2024 November"
            iconStyle={{ background: "#9cd6d0", color: "#fff" }}
            icon={<FaUsers />}
          >
            <h3 className="vertical-timeline-element-title text-center font-bold text-2xl border-2 bg-[#9ed5ce] border-black rounded-3xl px-4 py-2 shadow-md">
              Community Growth and Engagement
            </h3>
            <ul className="list-none mt-2 text-base lg:text-lg">
              <li className="flex items-center mb-2 border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaUsers className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Launch community-driven initiatives, educational content, and
                  social media campaigns.
                </p>
              </li>
              <li className="flex items-center border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaUsers className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Organize virtual events, AMAs, and collaborations with
                  influencers to spread awareness about $RAKUN's fair-launch
                  ethos and vision.
                </p>
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#8cc0bb",
              color: "#000",
              border: "1px solid #000",
              fontSize: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="2024 Mid-November"
            iconStyle={{ background: "#9cd6d0", color: "#fff" }}
            icon={<FaChartLine />}
          >
            <h3 className="vertical-timeline-element-title text-center font-bold text-2xl border-2 bg-[#9ed5ce] border-black rounded-3xl px-4 py-2 shadow-md">
              Exchange Listings (CEX & DEX)
            </h3>
            <ul className="list-none mt-2 text-base lg:text-lg">
              <li className="flex items-center mb-2 border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaChartLine className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Facilitate community-driven fundraising efforts to support CEX
                  and DEX listings.
                </p>
              </li>
              <li className="flex items-center border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaChartLine className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Engage the community in decision-making for potential exchange
                  partnerships to ensure alignment with $RAKUN's fair-launch
                  principles.
                </p>
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#8cc0bb",
              color: "#000",
              border: "1px solid #000",
              fontSize: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="TBA"
            iconStyle={{ background: "#9cd6d0", color: "#fff" }}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title text-center font-bold text-2xl border-2 bg-[#9ed5ce] border-black rounded-3xl px-4 py-2 shadow-md">
              NFTs & KRC-721 Integration
            </h3>
            <ul className="list-none mt-2 text-base lg:text-lg">
              <li className="flex items-center mb-2 border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaCode className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Develop a unique NFT collection to enable $RAKUN holders to
                  mint, collect, and trade NFTs.
                </p>
              </li>
              <li className="flex items-center border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaCode className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Promote NFT utility within the ecosystem, offering $RAKUN
                  community members exclusive access and benefits tied to NFT
                  ownership.
                </p>
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#8cc0bb",
              color: "#000",
              border: "1px solid #000",
              fontSize: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            date="TO THE MOON!!!"
            iconStyle={{ background: "#9cd6d0", color: "#fff" }}
            icon={<FaGlobe />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-2xl text-center border-2 bg-[#9ed5ce] border-black rounded-3xl px-4 py-2 shadow-md">
              Community-Driven Wealth Reallocation
            </h3>
            <ul className="list-none mt-2 text-base lg:text-lg">
              <li className="flex items-center mb-2 border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaGlobe className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Establish community funds and initiatives focused on financial
                  empowerment, supporting $RAKUN holders through community
                  projects and investments.
                </p>
              </li>
              <li className="flex items-center border-2 bg-[#aad5ce] border-black rounded-3xl px-4 py-2 shadow-md">
                <FaGlobe className="mr-2 mt-1 flex-shrink-0 text-xl text-white" />
                <p className="text-center">
                  Encourage decentralized governance to let $RAKUN holders vote
                  on strategic projects, fostering a token ecosystem that aligns
                  with the values of inclusivity and financial accessibility.
                </p>
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <footer
        id="socials-section"
        className="bg-gradient-to-r from-[#8cc0bb] via-[#9cd6d0] to-[#8cc0bb] text-black py-12 shadow-lg font-montserrat"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
              <img
                src={rakunIconTrans}
                alt="Rakun Icon"
                className="h-24 w-24 mb-4 rounded-full object-cover border-4 border-black shadow-lg hover:border-[#059284] transition-all duration-300 transform hover:scale-105"
              />
              <p className="text-base font-semibold text-center">
                © 2024 RAKUN. All rights reserved. NFA, DYOR.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-center border-b-4 border-[#059284] pb-2">
                Connect With Us
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://x.com/rakunkrc20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#059284] transition-all duration-300 transform hover:scale-110"
                >
                  <FaXTwitter className="text-3xl" />
                </a>
                <a
                  href="https://discord.gg/Y9CHvxnMf3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#059284] transition-all duration-300 transform hover:scale-110"
                >
                  <FaDiscord className="text-3xl" />
                </a>
                <a
                  href="https://t.me/rakunkrc20/15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#059284] transition-all duration-300 transform hover:scale-110"
                >
                  <FaTelegram className="text-3xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@rakunkrc20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#059284] transition-all duration-300 transform hover:scale-110"
                >
                  <FaTiktok className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
