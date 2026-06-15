import React from "react";
import { motion } from "framer-motion";

import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithub,
  SiLinux,
  SiAnsible,
  SiNginx,
  SiGit,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";

const icons = [
  { Icon: FaAws, x: 0, y: -170 },
  { Icon: SiDocker, x: -140, y: -80 },
  { Icon: SiKubernetes, x: 140, y: -80 },
  { Icon: SiTerraform, x: -180, y: 40 },
  { Icon: SiJenkins, x: 180, y: 40 },
  { Icon: SiAnsible, x: -140, y: 160 },
  { Icon: SiNginx, x: 140, y: 160 },
  { Icon: SiGit, x: -60, y: 260 },
  { Icon: SiGithub, x: 60, y: 260 },
  { Icon: SiLinux, x: -100, y: 340 },
  { Icon: BsTerminal, x: 100, y: 340 },
];

export default function DevOpsIcons() {
  return (
    <div className="absolute left-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[550px]">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-full"
      >

        {icons.map(({ Icon, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-[#48bfe3] drop-shadow-[0_0_15px_rgba(72,191,227,0.8)]"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              x: [0, 8, -5, 0],
              y: [0, -10, 5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={65} />
          </motion.div>
        ))}

      </motion.div>

    </div>
  );
}
