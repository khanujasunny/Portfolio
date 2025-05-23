import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
 
const personalDetails = [
  {
    label: "Name",
    value: "Aniket Kumar Gupta",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Durgapur,West Bengal",
  },
  {
    label: "Email",
    value: "aniketkrg34@gmail.com",
  },
  {
    label: "Contact",
    value: "+91 9333608825",
  },
];
 
const jobSummary =
"I am eager to begin my career in a dynamic organization where I can apply my technical skills, tackle challenges, and grow alongside experienced professionals. My goal is to contribute meaningfully while continuously learning and adapting in the fast-paced tech industry"
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
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
            <h3>Objective</h3>
            <p>{jobSummary}</p>
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
        {/* <div className="about__content__servicesWrapper"> */}
        {/* <Animate
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
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={50} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div> */}
      </div>
    </section>
  );
};
export default About;
 