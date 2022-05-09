import React from 'react';

import Loader from '../../Layout/Loader';

const Sidebar = ({
	notes,
	onAddNote,
	onDeleteNote,
	activeNote,
	setActiveNote,
	loading,
}) => {
	//* sort the notes descending based on when they were last modified
	const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

	return (
		<div className='app-sidebar'>
			<div className='app-sidebar-header'>
				<h1>Your Notes</h1>
				{/* create a new note */}
				<button className='btn btn-primary mt-2' onClick={onAddNote}>
					Add
				</button>
			</div>
			<div className='app-sidebar-notes'>
				{loading ? (
					<Loader />
				) : (
					<div>
						{/* loop over notes and render them in sidebar*/}
						{sortedNotes.map(({ id, title, body, lastModified }, i) => (
							<div
								className={`app-sidebar-note ${
									id === activeNote && 'active bg-primary-light'
								}`}
								onClick={() => setActiveNote(id)}
								key={id}
							>
								<div className='sidebar-note-title'>
									<strong>
										{title && title.length >= 30
											? title.substr(0, 30) + '...'
											: title}
									</strong>
									{/* delete note by referencing it's id */}
									<button
										className='btn btn-danger text-color'
										onClick={e => onDeleteNote(id)}
									>
										Delete
									</button>
								</div>
								{/* only render body if there's anything there, also limit characters to 100 */}
								<p className='text-start'>
									{body && body.length >= 100
										? body.substr(0, 100) + '...'
										: body}
								</p>
								<small className='note-meta'>
									Last Modified {/* format the date */}
									{new Date(lastModified).toLocaleDateString('en-GB', {
										hour: '2-digit',
										minute: '2-digit',
									})}
								</small>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
