import React, { useState } from 'react';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

import Modal from './Modal';
import Namecards from './Namecards';
import Avatar from './Avatar';
import Card from './Card';

import characters from '../../constants/characters';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const ImageGallery = () => {
	useDocumentTitle('Image Gallery');

	const filteredCharacters = characters.filter(
		c =>
			c.data.name !== 'Traveler Anemo' &&
			c.data.name !== 'Traveler Geo' &&
			c.data.name !== 'Traveler Electro' &&
			c.data.name !== 'Traveler Dendro' &&
			c.data.name !== 'Traveler Hydro' &&
			c.data.name !== 'Traveler Pyro' &&
			c.data.name !== 'Traveler Cryo'
	);

	const [clickedImage, setClickedImage] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(null);

	const handleClick = (item, index) => {
		setCurrentIndex(index);
		setClickedImage(item.data.namecard);
	};

	const handleLeft = () => {
		const totalLength = filteredCharacters.length;
		if (currentIndex + 1 >= totalLength) {
			setCurrentIndex(0);
			const newUrl = filteredCharacters[0].data.namecard;
			setClickedImage(newUrl);
			return;
		}

		const newIndex = currentIndex + 1;
		const newUrl = filteredCharacters.filter(item => {
			return filteredCharacters.indexOf(item) === newIndex;
		});
		const newImage = newUrl[0].data.namecard;
		setClickedImage(newImage);
		setCurrentIndex(newIndex);
	};

	const handleRight = () => {
		const totalLength = filteredCharacters.length;
		if (currentIndex === 0) {
			setCurrentIndex(totalLength - 1);
			const newUrl = filteredCharacters[totalLength - 1].data.namecard;
			setClickedImage(newUrl);
			return;
		}
		const newIndex = currentIndex - 1;
		const newUrl = filteredCharacters.filter(item => {
			return filteredCharacters.indexOf(item) === newIndex;
		});
		const newImage = newUrl[0].data.namecard;
		setClickedImage(newImage);
		setCurrentIndex(newIndex);
	};

	return (
		<Container>
			<CardComponent title='Image Gallery'>
				<Namecards characters={filteredCharacters} handleClick={handleClick} />
				<Avatar characters={filteredCharacters} />
				<Card characters={filteredCharacters} />
				{clickedImage && (
					<Modal
						clickedImage={clickedImage}
						handleLeft={handleLeft}
						handleRight={handleRight}
						setClickedImage={setClickedImage}
					/>
				)}
			</CardComponent>
		</Container>
	);
};

export default ImageGallery;
