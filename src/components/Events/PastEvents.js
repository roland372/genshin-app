import React from 'react';
import CardComponent from '../Layout/CardComponent';
import EventsVersion from './EventsVersion';

const PastEvents = props => {
	const { eventsData } = props;

	return (
		<CardComponent title='Past Events'>
			<EventsVersion version='2.6' eventsData={eventsData} />
			<EventsVersion version='2.5' eventsData={eventsData} />
			<EventsVersion version='2.4' eventsData={eventsData} />
			<EventsVersion version='2.3' eventsData={eventsData} />
			<EventsVersion version='2.2' eventsData={eventsData} />
			<EventsVersion version='2.1' eventsData={eventsData} />
			<EventsVersion version='2.0' eventsData={eventsData} />
			<EventsVersion version='1.6' eventsData={eventsData} />
			<EventsVersion version='1.5' eventsData={eventsData} />
			<EventsVersion version='1.4' eventsData={eventsData} />
			<EventsVersion version='1.3' eventsData={eventsData} />
			<EventsVersion version='1.2' eventsData={eventsData} />
			<EventsVersion version='1.1' eventsData={eventsData} />
			<EventsVersion version='1.0' eventsData={eventsData} />

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
