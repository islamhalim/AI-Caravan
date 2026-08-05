// src/components/SummitInfo.tsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Award, Megaphone, Play } from "lucide-react";
import { Link } from "react-router-dom";

const SummitInfo: React.FC = () => {
  const speakers = [
    {
      img: "/imgs/AhmedDarwish.jpg",
      name: "Ahmed M. Darwish",
      title:"Former Minister of State for Administration Development and Chairman of the Suez Canal Economic Zone",
      affiliation: "",
      link: "https://www.amdarwish.com/",
    },
    {
      img: "/imgs/grace.jpg",
      name: "Grace A. Lewis",
      title: "IEEE Computer Society 2026 President and Principal Researcher",
      affiliation: "Carnegie Mellon Software Engineering Institute (SEI), USA",
      link: "https://www.andrew.cmu.edu/user/gritter/lewis.html",
    },
    {
      img: "/imgs/Yuhong.jpg",
      name: "Yuhong Liu",
      title: "IEEE Computer Society GAC Chair and Associate Professor",
      affiliation: "Santa Clara University, USA",
      link: "https://www.scu.edu/engineering/faculty/liu-yuhong/",
    },
    {
      img: "/imgs/MahmoudALLAM.webp",
      name: "Mahmoud Allam",
      title: "Dean of the School of Continuing Education",
      affiliation: "The American University in Cairo (AUC)",
      link: "https://www.aucegypt.edu/fac/mahmoud-allam",
    },
    {
      img: "/imgs/David.jpg",
      name: "David Koehler",
      title: "Senior IEEE Volunteer/Executive Advisor",
      affiliation: "IEEE/Quanta Technology, USA",
      link: "https://www.linkedin.com/in/davidakoehler",
    },
    {
      img: "/imgs/SherifKishk.png",
      name: "Sherif Kishk",
      title: "Assistant Minister for Smart Governance",
      affiliation: "Ministry of Higher Education and Scientific Research",
      link: "https://eg.linkedin.com/in/kishk-sherif",
    },
    {
      img: "/imgs/AhmedMahdy.jpg",
      name: "Ahmed Hazem El-Mahdy",
      title:"Dean of the School of Information Technology and Computer Science",
      affiliation: "Nile University",
      link: "https://www.nu.edu.eg/academic-staff/prof-ahmed-hazem-el-mahdy",
    },
    {
      img: "/imgs/george.webp",
      name: "George Proeller",
      title: "Chair",
      affiliation: "IEEE Computer Society Distinguished Visitor Program (DVP)",
      link: "https://www.computer.org/profiles/george-proeller",
    },
    {
      img: "/imgs/Tamer.jpg",
      name: "Tamer A. Elbatt",
      title: "Professor at the CSE Dept",
      affiliation: "The American University in Cairo (AUC)",
      link: "https://www.aucegypt.edu/fac/tamer-el-batt",
    },
    {
      img: "/imgs/tantawy.jpg",
      name: "Ahmed N. Tantawy",
      title: "Founding Director of the Applied Innovation Center",
      affiliation:"Ministry of Communication and Information Technology (MCIT)",
      link: "https://www.linkedin.com/in/ahmed-tantawy-01439a3",
    },
    {
      img: "/imgs/Kostas-Karpouzis.jpg",
      name: "kostas karpouzis",
      title: "Associate professor, Panteion University of Social and Political Sciences",
      affiliation: "National Technical University of Athens (NTUA), Greece",
      link: "https://kkarpou.github.io/",
    },
    {
      img: "/imgs/KhaledNegm.png",
      name: "Khaled Ezzat Ahmed Negm",
      title: "ICT Minister Advisor for Digital Governance",
      affiliation:"Ministry of Communication and Information Technology (MCIT)",
      link: "https://eg.linkedin.com/in/khaled-negm-phd-7aa72b1a",
    },

        {
      img: "/imgs/sherifhazem.jpg",
      name: "Sherif Hazem",
      title: "CBE Sub Governor, Cybersecurity Sector",
      affiliation:"Central Bank of Egypt (CBE)",
      link: "https://www.linkedin.com/in/sherifhazem/",
    },
    {
      img: "/imgs/Ahmed Abdel-Hafez.jpg",
      name: "Ahmed Abdel-Hafez",
      title:"Cybersecurity Consultant",
      affiliation:"National Telecommunication Regulatory Authority (NTRA)",
      link: "https://www.tra.gov.eg/en/atrc-instructor/dr-ahmed-abdel-hafez/",
    },
    {
      img: "/imgs/Joaquim.jpeg",
      name: "Joaquim Jorge",
      title: "UNESCO Chair on AI & XR at IST",
      affiliation: "Universidade de Lisboa, Portugal",
      link: "https://web.tecnico.ulisboa.pt/jorgej/ieeecs",
    },
    {
      img: "/imgs/AbdEl-Monem.jpg",
      name: "AbdEl-Monem El-Sharkawy",
      title:"Chairman of the National Academy of Information Technology for Persons with Disabilities",
      affiliation:"Ministry of Communications and Information Technology (MCIT)",
      link: "https://eg.linkedin.com/in/abdel-monem-el-sharkawy-phd-256b84a",
    },
    {
      img: "/imgs/Atef.webp",
      name: "Atef El Fekky",
      title: "Founder and CEO",
      affiliation: "Digital Arrow",
      link: "https://eg.linkedin.com/in/atef-elfeki-306a8ba1",
    },
    {
      img: "/imgs/AhmedMadian.jpeg",
      name: "Ahmed H. Madian",
      title: "Chairman",
      affiliation: "IEEE Egypt Section",
      link: "https://www.nu.edu.eg/academic-staff/prof-ahmed-h-madian",
    },
        {
      img: "/imgs/sherineyoussef.jpg",
      name: "Sherin Youssef",
      title: "Head of Computer College of Engineering",
      affiliation: "Arab Academy for Science and Technology",
      link: "https://aast.edu/cv.php?ser=181825",
    },
    {
      img: "/imgs/DoaaSalem.jpg",
      name: "Doaa Salem",
      title: "Senior Director, Outreach and Partnerships",
      affiliation: "The American University in Cairo (AUC)",
      link: "https://eg.linkedin.com/in/doaa-salem-bashanfar-68a7b822",
    },
    {
      img: "/imgs/Shivam.jpg",
      name: "Shivam Abhilash",
      title: "Enterprise (AI) Architect",
      affiliation: "ZS Associates, India",
      link: "https://shivamabhilash.com/",
    },
    {
      img: "/imgs/EsamElGohary.jpg",
      name: "Esam ElGohary",
      title: "Assistant Minister for Development, Training and Digital Transformation",
      affiliation: "Ministry of Local Development",
      link: "https://eg.linkedin.com/in/esam-elgohary",
    },
    {
      img: "/imgs/WalidAtabany.jpeg",
      name: "Walid Al-Atabany",
      title:"Associate Dean for UG Programs & Director of Centre for Informatics (CIS)",
      affiliation: "Nile University",
      link: "https://www.nu.edu.eg/academic-staff/prof-walid-al-atabany",
    },
    {
      img: "/imgs/emna.jpg",
      name: "Emna AMRI",
      title: "Chair/Associate Professor",
      affiliation: "IEEE R8 WIE/Polytech'Annecy Chambér, France",
      link: "https://www.univ-smb.fr/listic/en/presentation_listic/membres/post-docs-doctorants/emna-amri/",
    },
    {
      img: "/imgs/MohamedFouad.jpg",
      name: "Mohamed Mostafa Fouad",
      title: "Associate Dean for Graduate Studies and Research",
      affiliation:"Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
      link: "https://aast.edu/cv.php?&ser=24250",
    },
    {
      img: "/imgs/HadeerEhab.jpg",
      name: "Hadeer Ehab",
      title: "Assistant Professor of Clinical Pharmacy",
      affiliation: "British University in Egypt (BUE)",
      link: "https://eg.linkedin.com/in/hadeer-ehab-5ba6862a1",
    },
    {
      img: "/imgs/BatoulHaidar.jpeg",
      name: "Batoul Rida Haidar",
      title:"Assistant Professor of Computer Science and Artificial Intelligence",
      affiliation: "Coventry University",
      link: "https://eg.linkedin.com/in/batoul-haidar-coven-egy",
    },
    {
      img: "/imgs/TarekShabaka.jpg",
      name: "Tarek Shabaka",
      title: "Founder and CEO",
      affiliation: "Mideast Communication Systems (MCS)",
      link: "https://eg.linkedin.com/in/tarek-shabaka-57b868225",
    },
    {
      img: "/imgs/IslamMousa.jpg",
      name: "Eslam Moussa",
      title: "Founder and CEO",
      affiliation: "TENET",
      link: "https://eg.linkedin.com/in/eslammoussamba",
    },
    {
      img: "/imgs/AhmedSaleh.png",
      name: "Ahmed Saleh",
      title: "Executive Director, Innovation and Entrepreneurship Center",
      affiliation: "Nile University",
      link: "https://eg.linkedin.com/in/ahmed-a-saleh",
    },
    {
      img: "/imgs/AmrIbrahim.jpg",
      name: "Amr Ibrahim",
      title: "Data & AI Cloud Solution Architect",
      affiliation: "Microsoft",
      link: "https://www.linkedin.com/in/amr-ibrahim-ai",
    },
    {
      img: "/imgs/MohamedAmin.jpg",
      name: "Mohamed Amin",
      title: "IEEE Industry Ambassador/Private Wireless Sales Lead",
      affiliation: "IEEE R8/Nokia",
      link: "https://www.linkedin.com/in/mohamedamin1",
    },
    {
      img: "/imgs/tamer arafa.jpg",
      name: "Tamer Arafa",
      title: "Assistant Professor and Program Director for Big Data Professional Diploma",
      affiliation: "School of Information Technology and Computer Science, Nile University",
      link: "https://www.nu.edu.eg/academic-staff/dr-tamer-arafa",
    },

        {
      img: "/imgs/samarnour.jpg",
      name: "Samar M.Nour",
      title: "Assistant Professor of Computer Engineering and Artificial Intelligence",
      affiliation: "Badr University in Cairo (BUC)",
      link: "https://eg.linkedin.com/in/samar-m-nour-14b16424",
    },
                {
      img: "/imgs/ramy.jpg",
      name: "Ramy A. Fathy",
      title: "Chief of International Cybersecurity Affairs",
      affiliation: "National Telecommunications Regulatory Authority (NTRA)",
      link: "https://www.linkedin.com/in/ramyfathy/?originalSubdomain=eg",
    },

            {
      img: "/imgs/Azim.jpg",
      name: "Abdulazim Ghoniem",
      title: "Director, ICT Operation Projects and AI Governance Expert",
      affiliation: "Ministry of Communications and Information Technology (MCIT)",
      link: "https://eg.linkedin.com/in/abdulazim-ghoniem-b7529219",
    },

                {
      img: "/imgs/hesham.jpg",
      name: "Hesham El-Badawy",
      title: "Director, Central Adminstraive for Research and Development",
      affiliation: "Ministry of Communications and Information Technology (MCIT)",
      link: "https://www.linkedin.com/in/hesham-el-badawy-654a3b81/?originalSubdomain=eg",
    },

                       {
      img: "/imgs/yehia.jpg",
      name: "Yehia Elgohary",
      title: "Group CISO",
      affiliation: "efinance",
      link: "https://eg.linkedin.com/in/yehia-elgohary-7b5b91b3",
    },

                   {
      img: "/imgs/mfatah.jpg",
      name: "Mohamed AbdelFattah",
      title: "Regional Business Development Manager IOT/OT",
      affiliation: "Fortinet",
      link: "https://www.linkedin.com/in/mohamedabdelfattah/?originalSubdomain=eg",
    },


    {
      img: "/imgs/IslamTharwat.jpg",
      name: "Islam Tharwat",
      title: "Assistant Professor/Regional Coordinator - EMEA",
      affiliation: "Nile University/IEEE Computer Society",
      link: "https://nu.edu.eg/academic-staff/dr-islam-tharwat",
    },
  ];

  const partners = [
    {
      img: "/imgs/NCAI.jpg",
      name: "National Council for Artificial Intelligence (NCAI)",
      link: "https://ai.gov.eg/",
    },
    {
      img: "/imgs/EGCERT.jpg",
      name: "EG-CERT (Egyptian Computer Emergency Readiness Team)",
      link: "https://egcert.eg/",
    },
    {
      img: "/imgs/AIC.png",
      name: "Applied Innovation Center(AIC)",
      link: "https://mcit.gov.eg/en/Applied_innovation_Center",
    },
  ];

  return (
    <section
      id="summit-info"
      className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Summit Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            IEEE Computer Society AI Caravan Regional Summit 2025
          </h1>
          <motion.div 
            className="mx-auto w-80 h-40 sm:w-[28rem] sm:h-56 bg-black flex items-center justify-center rounded-2xl mb-8 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/imgs/IEEE Computer Society R8 AI Caravan  (4) (1).png"
              alt="AI Caravan Regional Summit Logo"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          <p className="text-lg text-[#f9a31a] font-semibold mt-4">
            (R8 Edition – Cairo, Egypt)
          </p>
        </motion.div>

        {/* Honorary Chair */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-12 h-12 text-[#f9a31a] mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            AI Caravan Regional Summit Honorary Chair
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.a
              href="https://mohieldin.net/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/imgs/honorary_chair.png"
                alt="Prof. Mahmoud Mohieldin"
                className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-[#f9a31a]/40"
              />
            </motion.a>

            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                <a
                  href="https://mohieldin.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#f9a31a]"
                >
                  Prof. Mahmoud Mohieldin
                </a>
              </h3>
              <p className="text-lg text-gray-700">
                United Nations Special Envoy on Financing the 2030 Sustainable
                Development Agenda <br />
                Former Minister of Investment, Egypt
              </p>
            </motion.div>
          </div>
        </motion.div>

       {/* ✨ UPDATED — TWO VIDEOS SIDE BY SIDE ✨ */}
<motion.div
className="mb-20"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
>
<Play className="w-12 h-12 text-[#f9a31a] mx-auto mb-4" />
<h2 className="text-3xl font-bold text-gray-900 mb-10">
Welcome Messages
</h2>


{/* Video grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-start">


{/* IEEE President Video */}
<div className="text-center">
<h3 className="text-xl font-semibold mb-4 text-[#f9a31a]">
IEEE President – Mary Ellen Randall
</h3>
<div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
<iframe
className="w-full h-64 sm:h-80 md:h-[22rem]"
src="https://ieeetv.ieee.org/ns/ieeetvdl/2025/CA_Presidents/RANDALL/02_ME_Randall_AI_Caravan_2025_IEEE.mp4"
title="IEEE President Welcome"
frameBorder="0"
allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>
</div>
</div>


{/* NEW — IEEE Computer Society Video */}
<div className="text-center">
<h3 className="text-xl font-semibold mb-4 text-[#f9a31a]">
IEEE CS 2025 President - Hironori Washizaki
</h3>
<div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
<iframe
className="w-full h-64 sm:h-80 md:h-[22rem]"
src="https://waseda.box.com/s/2q2y5sft8t1iewrhs3o5uwhmeu8k7cvq"
title="IEEE Computer Society Message"
frameBorder="0"
allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>
</div>
</div>


</div>
</motion.div>
        {/* END OF NEW VIDEO SECTION */}

        {/* Strategic Partners */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Strategic Partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center items-center">
            {partners.map((partner, idx) => (
              <motion.a
                key={idx}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-2xl shadow-md flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="h-32 md:h-40 w-auto object-contain"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Hosting Venues */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Building2 className="w-12 h-12 text-[#f9a31a] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hosting Venues
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            The <strong>IEEE Computer Society AI Caravan Regional Summit 2025</strong>{" "}
            will be jointly hosted by <br />
            <a
              href="https://www.aucegypt.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f9a31a] font-semibold hover:underline"
            >
              The American University in Cairo (AUC) - SCE
            </a>{" "}
            and{" "}
            <a
              href="https://www.nu.edu.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f9a31a] font-semibold hover:underline"
            >
              Nile University (NU) - ITCS
            </a>
            , from{" "}
            <span className="text-[#f9a31a] font-semibold">
              11–13 December 2025
            </span>
            .
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://www.aucegypt.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/imgs/auc_hall.jpg"
                alt="AUC Opening Hall"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  School of Continuing Education (SCE),
                  The American University in Cairo (AUC)
                </h3>
              </div>
            </motion.a>

            <motion.a
              href="https://www.nu.edu.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/imgs/nu_hall.jpg"
                alt="NU Closing Hall"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  School of Information Technology and Computer Science (ITCS),
                  Nile University (NU)
                </h3>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Speakers */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Users className="w-12 h-12 text-[#f9a31a] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Featured Speakers
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {speakers.map((speaker, idx) => (
              <motion.a
                key={idx}
                href={speaker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {speaker.name}
                </h3>
                <p className="text-gray-700">{speaker.title}</p>
                <p className="text-sm text-gray-500">{speaker.affiliation}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SummitInfo;
