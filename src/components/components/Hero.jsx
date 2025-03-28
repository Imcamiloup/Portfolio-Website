import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div>
      <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center bg-no-repeat pt-20">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl left-0 mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]">
              <div className="mt-4 w-1 marker:w-1 rounded-full sm:h-70 h-20 violet-gradient bg-[#915eff] ml-2">
                <div className="ml-4 w-80">
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    I'm <span className="text-[#915eff]">Luis</span>
                  </h1>
                  <p>
                    <span className={`${styles.heroSubText} text-[#dfd9ff]`}>
                      I develop API'S web applications and websites
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
