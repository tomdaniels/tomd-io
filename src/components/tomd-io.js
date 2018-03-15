import React from 'react';
import Header from './header';
import Projects from './projects-list';

const TomdIo = ({ projects }) => (
    <div>
        <Header/>
        <Projects
            projects={projects}
        />
    </div>
);

export default TomdIo;