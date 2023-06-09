import React from 'react';
import { motion } from 'framer-motion'

const Pierre = () => {

    const icon = {
        hidden: {
          rotate :0,
          opacity: 1,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          rotate :0,
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 0)"
        }
    };

    return (
        <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 575 629"
              className="item"
              >
              <motion.path
                  d="M266.999 496.057C259.499 445.224 272.999 343.857 386.999 345.057H234.498C203.832 347.557 143.798 325.257 148.998 216.057H279.499M16.8405 238.057C18.0037 284.751 20.0572 348.622 23.4985 427.557C31.4985 611.057 425.498 715.057 527.998 466.557C572.751 358.059 563.443 293.575 535.999 257.271M16.8405 238.057C15.8404 197.912 14.1564 170.557 15.4985 157.057C16.8405 143.557 11.9985 104.557 80.4985 104.557C148.998 104.557 134.499 157.057 141.539 157.057M16.8405 238.057C17.6237 264.391 31.2174 311.057 80.4985 311.057C164.498 311.057 141.539 211.057 141.539 157.057M141.539 157.057C141.539 157.057 119.5 28.4128 191.5 16.4128C263.507 4.41165 284.665 71.8905 279.499 104.557M279.499 104.557C279.165 73.3905 292.6 16.4128 347 16.4128C401.4 16.4128 418.832 73.3905 420.999 104.557M279.499 104.557V216.057M420.999 104.557C418.499 73.3905 429 16.4131 481 16.4131C533 16.4131 538.499 73.3905 535.999 104.557V257.271M420.999 104.557V216.057M535.999 257.271C513.157 227.055 477.753 216.36 450.498 216.057H420.999M420.999 216.057H279.499"
                  strokeWidth="40"
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  stroke="#FF4F44"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                  default: { duration: 4, ease: "easeInOut" },
                  fill: { duration: 1, ease: [1, 0.9, 0.8, 0.7]}
                  }}
              />
            </motion.svg>
            
        </div>
    );
};

export default Pierre;