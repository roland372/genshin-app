import React, { useRef } from 'react';
import CardComponent from '../Layout/CardComponent';
import EventsVersion from './EventsVersion';
import VersionButton from './VersionButton';

const PastEvents = props => {
	const { eventsData, gotoVersion } = props;

	const version26 = useRef(null);
	const version25 = useRef(null);
	const version24 = useRef(null);
	const version23 = useRef(null);
	const version22 = useRef(null);
	const version21 = useRef(null);
	const version20 = useRef(null);
	const version16 = useRef(null);
	const version15 = useRef(null);
	const version14 = useRef(null);
	const version13 = useRef(null);
	const version12 = useRef(null);
	const version11 = useRef(null);
	const version10 = useRef(null);

	return (
		<CardComponent title='Past Events'>
			{/* <----- Table of Contents -----> */}
			<section className='d-flex flex-wrap justify-content-start mx-2'>
				<VersionButton
					onClick={gotoVersion}
					reference={version26}
					verNumber={'2.6'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version25}
					verNumber={'2.5'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version24}
					verNumber={'2.4'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version23}
					verNumber={'2.3'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version22}
					verNumber={'2.2'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version21}
					verNumber={'2.1'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version20}
					verNumber={'2.0'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version16}
					verNumber={'1.6'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version15}
					verNumber={'1.5'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version14}
					verNumber={'1.4'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version13}
					verNumber={'1.3'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version12}
					verNumber={'1.2'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version11}
					verNumber={'1.1'}
				/>
				<VersionButton
					onClick={gotoVersion}
					reference={version10}
					verNumber={'1.0'}
				/>
			</section>

			{/* <----- Events -----> */}
			<EventsVersion
				version='2.6'
				eventsData={eventsData}
				reference={version26}
			/>
			<EventsVersion
				version='2.5'
				eventsData={eventsData}
				reference={version25}
			/>
			<EventsVersion
				version='2.4'
				eventsData={eventsData}
				reference={version24}
			/>
			<EventsVersion
				version='2.3'
				eventsData={eventsData}
				reference={version23}
			/>
			<EventsVersion
				version='2.2'
				eventsData={eventsData}
				reference={version22}
			/>
			<EventsVersion
				version='2.1'
				eventsData={eventsData}
				reference={version21}
			/>
			<EventsVersion
				version='2.0'
				eventsData={eventsData}
				reference={version20}
			/>
			<EventsVersion
				version='1.6'
				eventsData={eventsData}
				reference={version16}
			/>
			<EventsVersion
				version='1.5'
				eventsData={eventsData}
				reference={version15}
			/>
			<EventsVersion
				version='1.4'
				eventsData={eventsData}
				reference={version14}
			/>
			<EventsVersion
				version='1.3'
				eventsData={eventsData}
				reference={version13}
			/>
			<EventsVersion
				version='1.2'
				eventsData={eventsData}
				reference={version12}
			/>
			<EventsVersion
				version='1.1'
				eventsData={eventsData}
				reference={version11}
			/>
			<EventsVersion
				version='1.0'
				eventsData={eventsData}
				reference={version10}
			/>

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
