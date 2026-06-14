import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Certifications from "./Certifications";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
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
          alt={title}
          className="w-35 h-35 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
        >
          Overview.
        </h2>
      </div>

      <div className="flex items-center">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Hello! I'm Mishal Biju, a Computer Science Engineering student and
          Cloud & DevOps enthusiast with practical experience in AWS, Linux,
          Docker, Terraform, Ansible, and automation.
          <br />
          <br />
          I enjoy building scalable cloud infrastructure, automating repetitive
          tasks, and managing Linux servers. Through personal projects and my
          internship experience at Technlogs, I've worked on AWS deployments,
          infrastructure as code, server administration, and DevOps workflows.
          <br />
          <br />
          I'm continuously expanding my knowledge of cloud technologies and
          backend systems while building practical projects that solve
          real-world problems.
          <br />
          <br />
          Feel free to explore my projects and get in touch at{" "}
          <a
            href="mailto:Mishalbiju07@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            Mishalbiju07@gmail.com
          </a>
          . I'm always open to new opportunities and collaborations!
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>

      <Certifications />
    </>
  );
};
export default SectionWrapper(About, "about");
