import Image from "next/image";
import React from "react";
import { projectsData } from "@/public/data/projects";
import Link from "next/link";
import GithubIcon from "../../components/icons/GithubIcon";
import { TProjectsInfo } from "@/src/types/projects";

interface ProjectsCardsProps {
  handleModal: any;
  projectData: TProjectsInfo[];
}

const ProjectsCards = ({ handleModal, projectData }: ProjectsCardsProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {projectData?.map((item) => (
          <div
            onClick={() => handleModal(item.id)}
            key={item.id}
            className="col-span-1 card cursor-pointer rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="h-44 relative">
              <Image src={item.img} alt={item.title} fill sizes="200" className="object-cover" />
            </div>
            <div className="card-body p-4 pb-3 text-start">
              <h3 className="line-clamp-2 h-12 font-semibold">{item.title}</h3>
              <p className="text-sm line-clamp-3 mt-2">{item.overview}</p>
              <div className="flex items-baseline justify-between pb-1">
                <div className="flex mt-3.5 items-center gap-2">
                  {item.techStack.map((item) => (
                    <span key={item.title} className="flex items-center gap-1">
                      {item.icon}
                    </span>
                  ))}
                </div>

                {item.repository && (
                  <Link href={item.repository} className="tooltip tooltip-left" data-tip="Github" target="_blank">
                    <GithubIcon size={20} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
