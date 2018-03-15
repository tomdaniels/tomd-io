import React from 'react';
import Modal from 'react-modal';
import FaLaptop from 'react-icons/lib/fa/laptop';
import FaKeyboard0 from 'react-icons/lib/fa/keyboard-o';

class ProjectCard extends React.Component {
    state = {
      infoClick: false,
    };

    toggleInfoClick = () => {
        this.setState((prevState) => ({
            infoClick: !prevState.infoClick,
        }));
    };

    render() {
        return (
            <div>
                <div>
                    <h5>{ this.props.name }</h5>
                    <button onClick={this.toggleInfoClick}>Learn more</button>
                </div>
                {
                    this.state.infoClick &&
                    <Modal
                        isOpen={this.state.infoClick}
                        onrequestclose={this.toggleInfoClick}
                        closeTimeoutMS={400}
                    >
                        <p>{ this.props.description}</p>
                        <a href={this.props.url}>
                            <FaLaptop />
                            View live project
                        </a>
                        <a href={this.props.github}>
                            <FaKeyboard0 />
                            View project source code
                        </a>
                        <button
                            onClick={this.toggleInfoClick}
                        >
                            Cancel
                        </button>
                    </Modal>
                }
            </div>
        )
    }
}

export default ProjectCard;