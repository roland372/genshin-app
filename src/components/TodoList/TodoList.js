import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

import Container from '../Layout/Container';
import CardComponent from '../Layout/CardComponent';

const getLocalStorage = () => {
	// get list from local storage
	let list = localStorage.getItem('list');
	// if list exists - is in local storage
	if (list) {
		return JSON.parse(localStorage.getItem('list'));
	}
	// if list doesn't exists
	else {
		return [];
	}
};

const TodoList = () => {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		if (!name) {
			// display alert
			showAlert(true, 'danger', 'Please enter value');
		} else if (name && isEditing) {
			// deal with edit
			setList(
				list.map(item => {
					if (item.id === editID) {
						return { ...item, title: name }; // if we're editing correct element, then copy all previous values, but change that one we're editing
					}
					return item;
				})
			);
			setName('');
			setEditID(null);
			setIsEditing(false);
			showAlert(true, 'success', 'Item edited');
		} else {
			// show alert
			showAlert(true, 'success', 'Item added to the list');
			const newItem = { id: new Date().getTime().toString(), title: name };
			// get values from previous list, and add new one into it
			setList([...list, newItem]);
			setName(''); // clear imput after submitting
		}
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, 'danger', 'All items deleted');
		setList([]);
	};

	const removeItem = id => {
		showAlert(true, 'danger', 'Item deleted');
		setList(list.filter(item => item.id !== id));
	};

	const editItem = id => {
		const specificItem = list.find(item => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};

	// for local storage we wanna use useEffect, to call the function every time we change something in our todolist
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	return (
		<Container>
			<CardComponent title='Todo List'>
				<form className='mx-2 text-dark' onSubmit={handleSubmit}>
					{/* pass all properties to alert value ...alert */}
					{alert.show && (
						<Alert {...alert} removeAlert={showAlert} list={list} />
					)}
					<div className='input-group mb-3'>
						<input
							type='text'
							className='form-control'
							id='floatingInput'
							placeholder='Add item to the list'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<div className='input-group-append'>
							<button type='submit' className='btn btn-primary'>
								{isEditing ? 'Edit item' : 'Add item'}
							</button>
						</div>
					</div>
				</form>
				{list.length > 0 && (
					<div className=''>
						<List items={list} removeItem={removeItem} editItem={editItem} />
						<button className='btn btn-danger mt-2' onClick={clearList}>
							Delete all items
						</button>
					</div>
				)}
			</CardComponent>
		</Container>
	);
};

export default TodoList;
