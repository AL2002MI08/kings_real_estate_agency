import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Kings<br />
              Real Estate
              <br /> Agency
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Effortlessly discover your ideal property with our expert assistance.</span>
            <span>Let us simplify your home search, effortlessly overcoming all difficulties.</span>
          </div>

          {/* <SearchBar/> */}

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={80} end={900} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Properties</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={15} end={200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-img.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
