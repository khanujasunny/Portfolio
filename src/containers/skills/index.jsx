 import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiJava, DiReact } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
 
 const personalDetails = [
  {
    label: "Languages:",
    value: "Java, C, Python, SQL",
  },
   {
    label: "Web Technologies:",
    value: "HTML, CSS, JavaScript, React.js",
  },
   {
    label: "Frameworks:",
    value: "Node.js",
  },
   {
    label: "Tools:",
    value: "GitHub, VS Code, Eclipse",
  },
];
 
// const jobSummary =
//   "Seasoned and results-driven professional with a proven track record in software development and project management. Adept at leading cross-functional teams to deliver high-quality software solutions on time and within budget. Strong analytical and problem-solving skills, with a focus on continuous improvement and innovation.";
 
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content">
        <div className="skills__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            {/* <h3>Front End Developer</h3> */}
            {/* <p>{jobSummary}</p> */}
          </Animate>
 
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="skills__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="skills__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJava size={80} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default Skills;
 





// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";
// import { DiReact, DiJava, } from "react-icons/di";
// import { FaDev, FaDatabase } from "react-icons/fa";
 
// const personalDetails = [
//   {
//     label: "Languages:",
//     value: "Java, C, Python, SQL",
//   },
//    {
//     label: "Web Technologies:",
//     value: "HTML, CSS, JavaScript, React.js",
//   },
//    {
//     label: "Frameworks:",
//     value: "Node.js",
//   },
//    {
//     label: "Tools:",
//     value: "GitHub, VS Code, Eclipse",
//   },
// ];
 

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <PageHeaderContent
//         headerText="My Skills"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="skills__content">
//         <div className="skills__content__personalWrapper">
//           <Animate
//             play
//             duration={1.5}
//             delay={1}
//             start={{
//               transform: "translateX(-900px)",
//             }}
//             end={{
//               transform: "translatex(0px)",
//             }}
//           >
//             {/* <h3>Front End Developer</h3> */}
//             {/* <p>{jobSummary}</p> */}
//           </Animate>
 
//           <Animate
//             play
//             duration={1.5}
//             delay={1}
//             start={{
//               transform: "translateX(500px)",
//             }}
//             end={{
//               transform: "translatex(0px)",
//             }}
//           >
//             <h3 className="personalInformationHeaderText">
//               Personal Information
//             </h3>
//             <ul>
//               {personalDetails.map((item, i) => (
//                 <li key={i}>
//                   <span className="title">{item.label}</span>
//                   <span className="value">{item.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </Animate>
//         </div>
//         <div className="skills__content__servicesWrapper">
//         <Animate
//             play
//             duration={1.5}
//             delay={1}
//             start={{
//               transform: "translateX(600px)",
//             }}
//             end={{
//               transform: "translatex(0px)",
//             }}
//           >
//           <div className="skills__content__servicesWrapper__innerContent">
//             <div>
//               <FaDev size={50} color="var(--yellow-theme-main-color)" />
//             </div>
//             <div>
//               <DiJava size={80} color="var(--yellow-theme-main-color)" />
//             </div>
//             <div>
//               <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
//             </div>
//             <div>
//               <DiReact size={60} color="var(--yellow-theme-main-color)" />
//             </div>
            
//           </div>
//           </Animate>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Skills;
 