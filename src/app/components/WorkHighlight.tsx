"use client";
import { projectsData } from "@/public/data/projects";
import Image from "next/image";
import React, { createRef, useRef, useState } from "react";
import Modal from "./global/Modal";
import { homeData } from "@/public/data/home";
import Link from "next/link";
import ProjectsCards from "../projects/_components/ProjectsCards";

const WorkHighlight = () => {
  const modalsRef: any = useRef(projectsData.projectsInfo.map(() => createRef()));
  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  const filterProject = projectsData.projectsInfo.slice(0, 4);

  return (
    <section className="overflow-hidden xl:overflow-visible px-10" id="work-highlight">
      <div className="flex flex-col xl:flex-row xl:items-end gap-2 mb-16 lg:mb-16">
        <h2>{homeData.workHighlights.title}</h2>
        <h3 className="text-gradient text-base font-medium">{homeData.workHighlights.subTitle}</h3>
      </div>

      <div className="flex flex-col justify-between gap-10">
        <div className="flex-1 order-2 lg:order-1 mt-10 text-center">
          <p>{homeData.workHighlights.description}</p>
          <Link href={homeData.workHighlights.callToAction.link}>
            <strong className="btn btn-primary mt-4">{homeData.workHighlights.callToAction.title}</strong>
          </Link>
        </div>

        <ProjectsCards projectData={filterProject} handleModal={handleModal} />
      </div>

      {projectsData.projectsInfo.map((item, index) => (
        <Modal key={index} data={item} modalRef={modalsRef.current[index]} />
      ))}
    </section>
  );
};

export default WorkHighlight;
