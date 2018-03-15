import React from 'react';
import ProjectCard from './project-card';

const Projects = ({ projects }) => (
    <div className="content-container">
        Live Projects
        {
            projects.map((project) =>
                <ProjectCard
                    key={project.name}
                    {...project}
                />
            )
        }

    </div>
);

export default Projects;