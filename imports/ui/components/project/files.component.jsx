import 'grommet/scss/vanilla/index';
// node_modules/grommet/scss/vanilla

import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { render } from 'react-dom';

import Frame from 'react-frame-component';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';

import ProjectContent from './project-content.component.jsx';

export default class Files extends Component {
	constructor(props) {
		super(props);
	}
  render() {
      return (
        <div className="Files">
        <App centered={false}>
          <Box pad='medium' className="box-container">
            <Frame>
            aaaa
              <ProjectContent />
            </Frame>
          </Box>
        </App>
        </div>
      )
  }
};
