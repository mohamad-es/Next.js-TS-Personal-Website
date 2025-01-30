"use client";

import { projectsData } from "@/public/data/projects";
import { useRef, createRef } from "react";
import { homeData } from "@/public/data/home";

const useModal = () => {
  const modalsRef: any = useRef(projectsData.projectsInfo.map(() => createRef()));

  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return { handleModal };
};

const Skills = () => {
  return (
    <div className="px-3 mt-16">
      <div className="flex flex-wrap justify-center gap-5">
        {homeData.skills.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
