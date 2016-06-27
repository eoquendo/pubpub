import React, {PropTypes} from 'react';
import Radium from 'radium';

export const AtomReaderVersions = React.createClass({
	propTypes: {
		atomData: PropTypes.object,
	},

	render: function() {

		return (
			<div className={'atom-reader-header'}>
				
				<h2>Versions</h2>
				
			</div>
		);
	}
});

export default Radium(AtomReaderVersions);