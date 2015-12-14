import React, {PropTypes} from 'react';
import Radium from 'radium';


let styles = {};

const ErrorPlugin = React.createClass({
	propTypes: {
		children: PropTypes.string
	},
	render: function() {
		return (<span style={[styles.ref]}>[ERROR: {this.props.children}]</span>);
	}
});

styles = {
	ref: {
		'background-color': 'rgba(255,0,0,0.4)'
	}
};


export default Radium(ErrorPlugin);