import React from 'react';

//? <----- Components ----->
import EventItem from './EventItem';
import EventHeading from './EventHeading';

const EventsVersion = props => {
	const { eventsData, version } = props;

	return (
		<section>
			<h5 className='text-start ms-3 mt-4'>Version {version}</h5>
			<EventHeading>
				{eventsData.pastEvents[`version ${version}`].map((e, index) => {
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
		</section>
	);
};

export default EventsVersion;
