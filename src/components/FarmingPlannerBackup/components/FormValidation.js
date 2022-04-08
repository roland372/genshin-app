const validation = select => {
	const errors = {};
	if (select.length < 1) {
		errors.select = 'Please select a character';
	}
	return errors;
};

export default validation;
