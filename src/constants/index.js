/**
 * constants/index.js
 *
 * Personalized content for Mishal Biju's 3D Portfolio
 * Based on: https://github.com/jeffjiang13/3d-portfolio
 *
 * ONLY this file (and the assets it imports) should be replaced in the
 * cloned repository. All UI/UX, component structure, animations, and
 * visual behaviour from the original template are preserved.
 *
 * ──────────────────────────────────────────────────────────────────────
 * ASSET IMPORTS
 * ──────────────────────────────────────────────────────────────────────
 * The icon references below follow the same pattern as the original
 * template: import PNG/SVG files from ../assets and assign them to
 * the icon field in each data object.
 *
 * IMPORTANT: Drop your icon PNGs into src/assets/ using these filenames,
 * or adjust the import paths to match what you actually add.
 *
 * Tech icons (use official SVG/PNG downloads from their sites or
 * a CDN pack such as devicons):
 *   aws.png, docker.png, terraform.png, ansible.png, nginx.png,
 *   linux.png, bash.png, git.png, c.png, cpp.png
 *
 * Service-card icons (reuse or rename the originals from the template):
 *   cloud.png, devops.png, backend.png, automation.png
 *
 * Company icon (plain placeholder — replace with Technlogs logo if available):
 *   technlogs.png
 *
 * Project screenshots (create or capture from each repo's README):
 *   pomodoro.png, terraform.png (or terraform_infra.png),
 *   ansible.png (or ansible_cfg.png), netdata.png,
 *   static_site.png, systemd.png
 * ──────────────────────────────────────────────────────────────────────
 */


// ── Certification icons ─────────────────────────────────────
import linuxIntro from "../assets/certifications/linux_intro.png";
import linuxUnhatched from "../assets/certifications/linux_unhatched.png";
import networkingBasics from "../assets/certifications/networking_basics.png";

// ── Technology icons ─────────────────────────────────────────────────
import aws       from "../assets/tech/aws.png";
import docker    from "../assets/tech/docker.png";
import terraform from "../assets/tech/terraform.png";
import ansible   from "../assets/tech/ansible.png";
import nginx     from "../assets/tech/nginx.png";
import linux     from "../assets/tech/linux.png";
import bash      from "../assets/tech/bash.png";
import git       from "../assets/tech/git.png";
import c         from "../assets/tech/c.png";
import cpp       from "../assets/tech/cpp.png";

// ── Company / organisation icons ─────────────────────────────────────
import technlogs from "../assets/company/technlogs.png";

// ── Project screenshots ───────────────────────────────────────────────
import pomodoroImg    from "../assets/projects/pomodoro.png";
import terraformImg   from "../assets/projects/terraform_infra.png";
import ansibleImg     from "../assets/projects/ansible_cfg.png";
import netdataImg     from "../assets/projects/netdata.png";
import staticSiteImg  from "../assets/projects/static_site.png";
import systemdImg     from "../assets/projects/systemd.png";

// ─────────────────────────────────────────────────────────────────────
// NAV LINKS
// ─────────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: "about",   title: "About"   },
  { id: "work",    title: "Work"    },
  { id: "contact", title: "Contact" },
];

const certifications = [
  {
    title: "Introduction to Linux",
    subtitle: "Cisco Networking Academy",
    icon: linuxIntro,
  },
  {
    title: "NDG Linux Unhatched",
    subtitle: "Cisco Networking Academy",
    icon: linuxUnhatched,
  },
  {
    title: "Networking Basics",
    subtitle: "Cisco Networking Academy",
    icon: networkingBasics,
  },
];

// ─────────────────────────────────────────────────────────────────────
// TECHNOLOGIES  (spinning-ball / icon grid section)
// Only tools explicitly present in the resume or confirmed GitHub repos.
// ─────────────────────────────────────────────────────────────────────
const technologies = [
  { name: "AWS",       icon: aws       },
  { name: "Docker",    icon: docker    },
  { name: "Terraform", icon: terraform },
  { name: "Ansible",   icon: ansible   },
  { name: "Nginx",     icon: nginx     },
  { name: "Linux",     icon: linux     },
  { name: "Bash",      icon: bash      },
  { name: "Git",       icon: git       },
  { name: "C",         icon: c         },
  { name: "C++",       icon: cpp       },
];

// ─────────────────────────────────────────────────────────────────────
// EXPERIENCES  (vertical timeline)
// Source: resume — Work Experience + Education sections
// ─────────────────────────────────────────────────────────────────────
const experiences = [
  {
    title: "Cloud Computing Intern",
    company_name: "Technlogs",
    icon: technlogs,
    iconBg: "#1a1a2e",
    date: "2026 – Present",
    points: [
      "Create and manage AWS IAM users, groups, roles, and permissions to implement secure access control.",
      "Launch, configure, and maintain Amazon EC2 instances for application hosting and server administration.",
      "Set up and manage Amazon Route 53 hosted zones and DNS records for domain routing and management.",
      "Assist with cloud infrastructure deployment, basic networking, and Linux server administration.",
      "Follow cloud security best practices while supporting day-to-day infrastructure operations.",
    ],
  },
  {
    title: "B.E. — Computer Science & Engineering",
    company_name: "Toc H Institute of Science and Technology",
    icon: technlogs,          // replace with college logo if available
    iconBg: "#0f3460",
    date: "Ongoing",
    points: [
      "Relevant coursework: Object-Oriented Programming, Data Structures & Algorithms, Operating Systems, Computer Networks, Databases, Machine Learning.",
      "Solved 100+ problems on Codeforces, demonstrating applied skills in DSA.",
      "Attended Cyber Security Workshop at NIT Calicut and Cloud Computing Workshop at Toc H Institute of Science and Technology.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// Template section kept minimal; no real testimonials in resume.
// Remove or replace with genuine references when available.
// ─────────────────────────────────────────────────────────────────────
const testimonials = [];

// ─────────────────────────────────────────────────────────────────────
// PROJECTS
// Only repositories confirmed on GitHub profile: mishalbiju07
//   • mishalbiju07/Pomodoro-Timer
//   • mishalbiju07/aws-infrastructure-terraform
//   • mishalbiju07/Configuration-Management
//   • mishalbiju07/AWS-System-Monitoring-with-Netdata
//   • mishalbiju07/Static-Site-Server
//   • mishalbiju07/Dummy-Systemd-Service
//
// Tags reflect actual tools used per resume + repo descriptions.
// ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    name: "Pomodoro Timer — Containerized Cloud Deployment",
    description:
      "A containerized web application deployed on AWS EC2 using Docker and Nginx as a reverse proxy. Reusable container workflows cut deployment time from ~30 minutes to under 10 minutes and eliminated dependency mismatches across environments.",
    tags: [
      { name: "Docker",  color: "blue-text-gradient"  },
      { name: "AWS EC2", color: "green-text-gradient" },
      { name: "Nginx",   color: "pink-text-gradient"  },
    ],
    image: pomodoroImg,
    source_code_link: "https://github.com/mishalbiju07/Pomodoro-Timer",
  },
  {
    name: "Terraform AWS Infrastructure Provisioning",
    description:
      "Infrastructure-as-Code templates that provision EC2 instances and configure Security Groups on AWS. Reusable Terraform modules standardise deployments across environments, automating provisioning workflows and eliminating repeated manual steps.",
    tags: [
      { name: "Terraform", color: "blue-text-gradient"  },
      { name: "AWS",       color: "green-text-gradient" },
      { name: "IaC",       color: "pink-text-gradient"  },
    ],
    image: terraformImg,
    source_code_link: "https://github.com/mishalbiju07/aws-infrastructure-terraform",
  },
  {
    name: "Ansible Configuration Management",
    description:
      "Modular Ansible playbooks (base, SSH, Nginx, application deployment) for end-to-end automated server provisioning. Includes security hardening with Fail2Ban and SSH key-based authentication to improve system security.",
    tags: [
      { name: "Ansible",  color: "blue-text-gradient"  },
      { name: "Linux",    color: "green-text-gradient" },
      { name: "Nginx",    color: "pink-text-gradient"  },
    ],
    image: ansibleImg,
    source_code_link: "https://github.com/mishalbiju07/Configuration-Management",
  },
  {
    name: "AWS System Monitoring with Netdata",
    description:
      "Real-time system monitoring dashboard using Netdata on an AWS EC2 instance. Tracks CPU, memory, disk, and network metrics with alert-based monitoring, improving issue detection time and overall system reliability.",
    tags: [
      { name: "Netdata",  color: "blue-text-gradient"  },
      { name: "AWS EC2",  color: "green-text-gradient" },
      { name: "Monitoring", color: "pink-text-gradient" },
    ],
    image: netdataImg,
    source_code_link: "https://github.com/mishalbiju07/AWS-System-Monitoring-with-Netdata",
  },
  {
    name: "Static Site Server — Nginx + Automation",
    description:
      "Static website hosted on AWS EC2 with Nginx, fully automated using Bash and rsync. Script-based deployment improves consistency and minimises human error during updates.",
    tags: [
      { name: "Nginx",  color: "blue-text-gradient"  },
      { name: "Bash",   color: "green-text-gradient" },
      { name: "AWS",    color: "pink-text-gradient"  },
    ],
    image: staticSiteImg,
    source_code_link: "https://github.com/mishalbiju07/Static-Site-Server",
  },
  {
    name: "Linux Systemd Service — Background Process Automation",
    description:
      "Custom systemd services to manage background scripts and processes on Linux. Automated service management reduces manual process handling; journalctl integration enables efficient logging and debugging.",
    tags: [
      { name: "Linux",   color: "blue-text-gradient"  },
      { name: "Bash",    color: "green-text-gradient" },
      { name: "systemd", color: "pink-text-gradient"  },
    ],
    image: systemdImg,
    source_code_link: "https://github.com/mishalbiju07/Dummy-Systemd-Service",
  },
];

export {
  technologies,
  experiences,
  testimonials,
  projects,
  certifications,
};
