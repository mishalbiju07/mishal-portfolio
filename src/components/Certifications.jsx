import React from "react";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-gray-700"></div>

        <h2 className="mx-6 text-[22px] font-bold tracking-[4px] uppercase text-cyan-400">
          Certifications
        </h2>

        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="w-[180px] bg-tertiary rounded-2xl border border-cyan-500/30 p-5 flex flex-col items-center hover:scale-105 transition duration-300"
          >
            <img
              src={cert.icon}
              alt={cert.title}
              className="w-24 h-24 object-contain mb-4"
            />

            <h3 className="text-white text-center font-medium">
              {cert.title}
            </h3>

            <p className="text-cyan-400 text-sm text-center mt-2">
              {cert.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
