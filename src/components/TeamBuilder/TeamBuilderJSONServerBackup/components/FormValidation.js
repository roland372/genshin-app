const validation = (name, select) => {
	const errors = {};
	if (!name) {
		errors.name = 'Team name is required';
	}
	if (select.length < 4) {
		errors.select = 'Please select 4 team members';
	}
	return errors;
};

export default validation;