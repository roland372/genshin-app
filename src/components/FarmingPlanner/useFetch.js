import { useState, useEffect } from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log('use effect');
		fetch(url)
			.then(res => {
				// console.log(res);
				if (!res.ok) {
					throw Error('could not fetch data');
				}
				return res.json();
			})
			.then(data => {
				// console.log(data);
				setData(data);
				setLoading(false);
				setError(null);
			})
			.catch(error => {
				setLoading(false);
				// console.log(error.message);
				setError(error.message);
			});
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
