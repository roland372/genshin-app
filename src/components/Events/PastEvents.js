import React from 'react';
import EventItem from './EventItem';
import CardComponent from '../Layout/CardComponent';
import EventHeading from './EventHeading';

const PastEvents = props => {
	return (
		<CardComponent title='Past Events'>
			{/* <----- Version 2.4 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 2.4</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 2.4'].map((e, index) => {
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
			{/* <----- Version 2.3 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 2.3</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 2.3'].map((e, index) => {
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
			{/* <----- Version 2.2 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 2.2</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 2.2'].map((e, index) => {
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
			{/* <----- Version 2.1 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 2.1</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 2.1'].map((e, index) => {
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
			{/* <----- Version 2.0 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 2.0</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 2.0'].map((e, index) => {
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
			{/* <----- Version 1.6 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 1.6</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 1.6'].map((e, index) => {
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
			{/* <----- Version 1.5 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 1.5</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 1.5'].map((e, index) => {
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
			{/* <----- Version 1.3 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 1.3</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 1.3'].map((e, index) => {
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
			{/* <----- Version 1.2 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 1.2</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 1.2'].map((e, index) => {
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
			{/* <----- Version 1.1 -----> */}
			<section>
				<h5 className='text-start ms-3 mt-3'>Version 1.1</h5>
				<EventHeading>
					{props.eventsData.pastEvents['version 1.1'].map((e, index) => {
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
			{/* <----- Version 1.0 -----> */}
			<section>
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
			</section>
		</CardComponent>
	);
};

export default PastEvents;
