import "./App.css";
import rakunBcoin from "./assets/rakun-bcoin.png";
import rakunGold from "./assets/rakun-gold-rush.png";
import rakunIndustrial from "./assets/rakun-industrial.png";
import rakunStock from "./assets/rakun-stock.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9cd6d0] to-black p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
          <img
            src={rakunGold}
            alt="rakun-gold-rush"
            className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md"
          />
          <p className="text-sm sm:text-base lg:text-lg">
            Gold has always gone up in value since ancient times. But people
            were always too late to buy gold. The fact that so much value has
            been attached to a coloured metal for so long has become a
            contradiction in terms to the normal course of life. Let the holders
            of capital keep their gold. We're after something else.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse">
          <img
            src={rakunIndustrial}
            alt="rakun-industrial"
            className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md"
          />
          <p className="text-sm sm:text-base lg:text-lg">
            In Britain, an entrepreneur had the mad idea of introducing the
            steam engine into the manufacturing process. And it was a harbinger
            that this idea would change the whole world and bring us to where we
            are today. It was realised that these magical machines needed the
            essence of dinosaurs to work, and BAM! oil went from worthless
            sludge to black gold. Unfortunately, you weren't around when it all
            started and didn't get your share. But now you have a chance to
            reclaim the share you lost for reasons beyond your control.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
          <img
            src={rakunStock}
            alt="rakun-stock"
            className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md"
          />
          <p className="text-sm sm:text-base lg:text-lg">
            Some burly guys in big hats scribbled something on a piece of paper
            and suddenly it was worth a lot of money. They called them shares
            and they went up and down until the men in boring suits went home.
            You were born into the technology world, but you didn't know NVIDIA
            would be worth that much. It doesn't matter, the majority didn't
            either.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse">
          <img
            src={rakunBcoin}
            alt="rakun-bcoin"
            className="w-3/4 sm:w-1/2 lg:w-2/5 rounded-lg shadow-md"
          />
          <p className="text-sm sm:text-base lg:text-lg">
            On 3 January 2009, one or more programmers (it's still a mystery)
            started writing a few lines of code, not knowing they had created
            digital gold. This digital gold grew so big that it was worth enough
            to buy a pizza. If we take time out of the equation, that pizza is
            the equivalent of 2 Boeing 747 airliners. Needless to say, you
            missed them too. You also missed Doge, Shiba, PEPE, BONK and even
            NACHO. Now here's a train you can't miss!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
