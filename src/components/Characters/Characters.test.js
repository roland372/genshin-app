import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Characters from './Characters';
import data from '../../assets/data/Characters/characters.json';

const MockCharacters = () => {
	return (
		<BrowserRouter>
			<Characters />
		</BrowserRouter>
	);
};

describe('Characters', () => {
	it('should be able to type in input field', () => {
		render(<MockCharacters />);

		const inputElement = screen.getByPlaceholderText('Search for a character');

		fireEvent.change(inputElement, { target: { value: 'hello' } });
		expect(inputElement.value).toBe('hello');
		// console.log(data);
	});

	it('should correctly filter characters based on input', () => {
		render(<MockCharacters />);

		const inputElement = screen.getByPlaceholderText('Search for a character');
		fireEvent.change(inputElement, { target: { value: 'Eula' } });

		const characterImage = screen.getByAltText('Eula');
		expect(characterImage).toBeInTheDocument();
	});

	it('should not display character if not in input', () => {
		render(<MockCharacters />);

		const inputElement = screen.getByPlaceholderText('Search for a character');
		const characterImage = screen.getByAltText('Diluc');
		fireEvent.change(inputElement, { target: { value: 'hello' } });

		expect(characterImage).not.toBeInTheDocument();
	});

	it('should be able to display all characters when "All" button is clicked', () => {
		render(<MockCharacters />);

		const buttonElement = screen.getByAltText('All');
		fireEvent.click(buttonElement);

		const characterImage = screen.getAllByTestId('character-container');
		expect(characterImage.length).toBe(data.characters.length);
	});

	it('should be able to display all characters when "All" button is clicked after clicking other filtering button', () => {
		render(<MockCharacters />);

		const buttonAnemoElement = screen.getByAltText('Anemo');
		fireEvent.click(buttonAnemoElement);

		const buttonAllElements = screen.getByAltText('All');
		fireEvent.click(buttonAllElements);

		const characterImage = screen.getAllByTestId('character-container');
		expect(characterImage.length).toBe(data.characters.length);
	});

	// todo
	// check if filters weapons, check if filters elements
});
