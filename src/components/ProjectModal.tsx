"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

interface Technology { name: string; icon: string | null }

interface Project {
  title: string;
  slug?: string;
  description: string;
  image: string;
  sourceLink: string;
  deploymentLink?: string;
  technologiesUsed: Technology[];
  latest?: boolean;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-neutral-900 text-white rounded-2xl max-w-3xl w-[92%] mx-4 overflow-hidden shadow-xl">
        <div className="flex items-start justify-between p-4 border-b border-neutral-800">
          <div>
            <h3 className="text-lg font-bold">{project.title}</h3>
            {project.latest && <span className="text-xs text-yellow-300">New</span>}
          </div>
          <button aria-label="Close" onClick={onClose} className="p-1 rounded-md hover:bg-white/5">
            <IoMdClose className="text-2xl" />
          </button>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-3 flex items-start justify-center">
            <Image src={project.image} alt={project.title} width={420} height={280} className="rounded-lg w-full h-auto object-cover" />
          </div>
          <div className="md:col-span-3 text-sm text-neutral-200">
            <p className="mb-3 text-left">{project.description}</p>

            <div className="mb-3">
              <h4 className="text-sm text-left font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologiesUsed.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 bg-neutral-800/30 p-2 rounded-md text-xs">
                    {t.icon ? (
                      <img src={t.icon} alt={t.name} className="w-4 h-4 rounded-sm" />
                    ) : null}
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a href={project.sourceLink} target="_blank" rel="noreferrer" className="bg-neutral-800 px-3 py-2 rounded-md text-xs">Source</a>
              {project.deploymentLink && (
                <a href={project.deploymentLink} target="_blank" rel="noreferrer" className="bg-neutral-800 px-3 py-2 rounded-md text-xs">Live</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
