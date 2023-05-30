import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [isViewerVisible, setViewerVisible] = useState(false);

  const handleButtonClick = () => {
    setViewerVisible(!isViewerVisible);
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("src/assets/docs/hasanresume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "hasanhudaresume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="mb-10 flex justify-center">
          {/* <button onClick={handleButtonClick}>Toggle PDF Viewer</button>
          {isViewerVisible && (
            <Document file="src/assets/docs/hasanresume.pdf">
              <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                customTextRenderer={false}
              />
            </Document>
          )} */}
          <button
            className="bg-gradient-to-r from-light-purple to-dark-purple text-white py-2 px-4 rounded"
            onClick={onButtonClick}
          >
            Download Resume
          </button>
        </div>
        I am a skilled software engineer with experience in many languages and a
        wide range of frameworks. My foundation in these languages have been
        developed through rigorous coursework at Stony Brook University's
        Computer Science program as well Coding Dojo's Software Engineering
        Bootcamp. Working in these environments allowed me to collaborate with
        many diverse groups of like-minded software engineers to produce
        scalable and user-friendly applications.
        <br />
        <br />
        I'm currently seeking a full stack position where I can continue my
        journey as a Software Engineer and be an impactful team member as well.
        <br />
        <br />
        <p>
          <strong>Languages:</strong> TypeScript, JavaScript, Java, C#,
          Python, C, HTML5, CSS, SQL
        </p>
        <p>
          <strong>Frameworks/Libraries:</strong> React, React Native, Next.js,
          Node.js, Express, Java Spring, Flask, AJAX, Django, Tailwind, Material
          UI, Axios, Bootstrap, jQuery
        </p>
        <p>
          <strong>Databases:</strong> MySQL, MongoDB
        </p>
        <p>
          <strong>Other Technologies:</strong> Git, AWS, Bcrypt, Rest API,
          Docker
        </p>
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
