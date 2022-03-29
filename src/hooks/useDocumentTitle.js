import { useRef, useEffect } from 'react';

function useDocumentTitle(title, prevailOnUnmount = false) {
	const defaultTitle = useRef(document.title);

	useEffect(() => {
		document.title = title + ' | Genshin-App';
	}, [title]);

	useEffect(
		() => () => {
			if (!prevailOnUnmount) {
				document.title = defaultTitle.current;
			}
		},
		[prevailOnUnmount]
	);
}

export default useDocumentTitle;
