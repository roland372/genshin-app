import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 2000);
		return () => clearTimeout(timeout);
	}, [list, removeAlert]);
	// every time list is changed, we wanna display alert again
	return <div className={`alert alert-${type}`}>{msg}</div>;
};

export default Alert;
