import React, { useState } from 'react';
import CardComponent from '../Layout/CardComponent';
import EventsVersion from './EventsVersion';

const PastEvents = props => {
	const { eventsData } = props;

	const [searchTerm, setSearchTerm] = useState('');

	const versionsArray = [];
	Object.keys(eventsData.pastEvents).map(event =>
		versionsArray.push(event.slice(8))
	);

	return (
		<CardComponent title='Past Events'>
			<section className='m-2'>
				<input
					type='text'
					className='form-control'
					placeholder='Search for a version, e.g. 1.6'
					onChange={event => {
						setSearchTerm(event.target.value);
					}}
				/>
			</section>
			{versionsArray
				.filter(value => {
					if (value === '') {
						return value;
					} else if (
						value.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
					) {
						return value;
					}
					return 0;
				})
				.map(event => (
					<div key={event}>
						<EventsVersion version={event} eventsData={eventsData} />
					</div>
				))}

			{/* <----- Version 1.0 -----> */}
			{/* <section>
				<h5 className='text-start ms-3 mt-3'>Version 1.0</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 1.0'].map((e, index) => {
						return (
							<EventItem
								key={index}
								name={e.name}
								link={e.link}
								image={e.image}
								startDate={e.startDate}
								endDate={e.endDate}
							/>
						);
					})}
				</EventHeading>
			</section> */}
		</CardComponent>
	);
};

export default PastEvents;
