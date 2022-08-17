import { render, screen } from '@testing-library/react';
import CardComponent from './CardComponent';

describe('CardComponent', () => {
	it('should render same text passed into title prop', () => {
		render(<CardComponent title='test 1' />);
		const headingElement = screen.getByText('test 1');
		expect(headingElement).toBeInTheDocument();
	});

	it('should render same text passed into title prop 2', () => {
		render(<CardComponent title='test 2' />);
		const headingElement = screen.getByRole('heading');
		expect(headingElement).toBeInTheDocument();
	});

	it('should render same text passed into title prop 3', () => {
		render(<CardComponent title='test 3' />);
		const headingElement = screen.getByRole('heading', { name: 'test 3' });
		expect(headingElement).toBeInTheDocument();
	});

	it('should render same text passed into title prop 4', async () => {
		render(<CardComponent title='test 4' />);
		const headingElement = await screen.findByText(/test 4/i);
		expect(headingElement).toBeInTheDocument();
	});

	it('should not render same text passed into title prop', () => {
		render(<CardComponent title='test 5' />);
		const headingElement = screen.queryByText('test 4');
		expect(headingElement).not.toBeInTheDocument();
	});

	it('should render only one heading', () => {
		render(<CardComponent title='test 6' />);
		const headingElement = screen.getAllByRole('heading');
		expect(headingElement.length).toBe(1);
	});
});
