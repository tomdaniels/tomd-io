import React from 'react';
import Header from './header';
import projects from './helpers/projects';
import Projects from './projects-list';

class TomdIo extends React.Component {
    state = {
        projects: [
            ...projects,
        ]
    };
    render () {
        return (
            <div>
            <Header/>
            <Projects
                projects={this.state.projects}
            />
            </div>
        )
    }
}

export default TomdIo;