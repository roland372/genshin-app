import React from 'react';

const Sidebar = ({
	notes,
	onAddNote,
	onDeleteNote,
	activeNote,
	setActiveNote,
}) => {
	// sort the notes descending based on when they were last modified
	const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

	return (
		<div className='app-sidebar'>
			<div className='app-sidebar-header'>
				<h1>Notes</h1>
				{/* create a new note */}
				<button onClick={onAddNote}>Add</button>
			</div>
			<div className='app-sidebar-notes'>
				{/* loop over notes and render them in sidebar*/}
				{sortedNotes.map(({ id, title, body, lastModified }, i) => (
					<div
						className={`app-sidebar-note ${id === activeNote && 'active'}`}
						onClick={() => setActiveNote(id)}
						key={id}
					>
						<div className='sidebar-note-title'>
							<strong>{title}</strong>
							{/* to delete note we need some reference to it, we can use it's id */}
							<button onClick={e => onDeleteNote(id)}>Delete</button>
						</div>
						{/* only render body if there's anything there, also limit characters to 100 */}
						<p>{body && body.substr(0, 100) + '...'}</p>
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
		</div>
	);
};

export default Sidebar;
