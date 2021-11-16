import { useEffect, useState } from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const res = await fetch(url);
				const json = await res.json();

				setData(json);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
		// if url ever changes then this hook will run again
	}, [url]);

	return { loading, error, data };
};

export default useFetch;
