import React from 'react';
import EventImage from '../assets/Spiral_Abyss_Event_-_Peoples_Choice.jpg';

const Events = () => {
	return (
		<main className='bg-secondary text-light pt-1 pb-1'>
			<div className='container'>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Current Events
					</h3>
					<div className='table-responsive mx-3'>
						<table className='table table-dark' style={{ minWidth: '700px' }}>
							<thead>
								<tr>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th scope='col'>Start</th>
									<th scope='col'>End</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img
											src={EventImage}
											className='img-fluid'
											width='500px'
											alt=''
										/>
									</td>
									<td>Spiral Abyss Event - People's Choice</td>
									<td>September 28, 2020 </td>
									<td>November 10, 2020</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Current Events
					</h3>
					<div className='table-responsive mx-3'>
						<table class='table table-dark' style={{ minWidth: '700px' }}>
							<thead>
								<tr>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th scope='col'>Start</th>
									<th scope='col'>End</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img
											src={EventImage}
											className='img-fluid'
											width='500px'
											alt=''
										/>
									</td>
									<td>Spiral Abyss Event - People's Choice</td>
									<td>September 28, 2020 </td>
									<td>November 10, 2020</td>
								</tr>
								<tr>
									<td>
										<img
											src={EventImage}
											className='img-fluid'
											width='500px'
											alt=''
										/>
									</td>
									<td>Spiral Abyss Event - People's Choice</td>
									<td>September 28, 2020 </td>
									<td>November 10, 2020</td>
								</tr>
								<tr>
									<td>
										<img
											src={EventImage}
											className='img-fluid'
											width='500px'
											alt=''
										/>
									</td>
									<td>Spiral Abyss Event - People's Choice</td>
									<td>September 28, 2020 </td>
									<td>November 10, 2020</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Events;
