import React from 'react';
import ReactDOM from 'react-dom';
import TomdIo from './components/tomd-io';
import projects from './components/helpers/projects';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<TomdIo projects={projects} />, document.getElementById('app'));

