import React from 'react';

const VersionButton = props => {
	return (
		<button
			className='btn btn-warning m-1'
			onClick={() => props.onClick(props.reference)}
		>
			Version {props.verNumber}
		</button>
	);
};

export default VersionButton;
