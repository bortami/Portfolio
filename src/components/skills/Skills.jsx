import React from "react";

const skillContent = [
  {
    name: "HTML5",
    percent: "92",
    numberPercent: "92",
  },
  {
    name: "React JS",
    percent: "85",
    numberPercent: "85",
  },
  {
    name: "Vue Js",
    percent: "80",
    numberPercent: "80",
  },
  {
    name: "Ui/Ux",
    percent: "88",
    numberPercent: "88",
  },
];

const Skills = () => {
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span>{skill.percent}%</span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
