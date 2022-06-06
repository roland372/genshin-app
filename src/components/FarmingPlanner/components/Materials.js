import React from 'react';

//? <----- Icons ----->
import { MdCalendarToday } from 'react-icons/md';

//? <----- Components ----->
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Materials = props => {
	const {
		charactersData,
		characterSelect,
		moraCharacter,
		moraTalent,
		expBooks,
		localSpeciality,
		characterCommonMaterial1,
		talentCommonMaterial1,
		characterCommonMaterial2,
		talentCommonMaterial2,
		characterCommonMaterial3,
		talentCommonMaterial3,
		bossAscensionMaterial,
		sliver,
		fragments,
		chunks,
		gemstones,
		bronzeTalentBooks,
		silverTalentBooks,
		goldTalentBooks,
		bossMaterial,
		crown,
	} = props;

	// Total cost calcs
	// Daily Resin = 180
	// 1 Mora Ley-Line = 20 resin = 60k mora
	// 1 Exp Ley-Line = 20 resin = 5 exp books
	// 1 Boss = 40 resin = 2.5 boss materials
	// 3 Bronze Talent Books = 1 Silver
	// 3 Silver Talent Books = 1 Gold
	// 1 Gold Talent book = 3 Silver = 9 Bronze

	// console.log('Total Mora');
	// console.log(moraCharacter + moraTalent);
	// console.log('Mora Ley-Lines');
	// console.log(Math.round((moraCharacter + moraTalent) / 60000));
	// console.log('Total Resin');
	// console.log(Math.round((moraCharacter + moraTalent) / 60000) * 20);
	// console.log('Total Days');
	// console.log(
	// 	Math.round((Math.round((moraCharacter + moraTalent) / 60000) * 20) / 180)
	// );

	// console.log('Total Exp Books');
	// console.log(expBooks);
	// console.log('Exp Ley-Lines');
	// console.log(Math.round(expBooks / 5));
	// console.log('Total Resin');
	// console.log(Math.round(expBooks / 5) * 20);
	// console.log('Total Days');
	// console.log(Math.round((Math.round(expBooks / 5) * 20) / 180));

	// console.log('Total Boss Materials');
	// console.log(bossAscensionMaterial);
	// console.log('Total Resin');
	// console.log(bossAscensionMaterial * 40);
	// console.log('Total Days');
	// console.log(Math.round((bossAscensionMaterial * 40) / 180));

	// console.log('Total Bronze Talent Books');
	// console.log(bronzeTalentBooks);
	// console.log('Total Domains');
	// console.log(bronzeTalentBooks / 2);
	// console.log('Total Resin');
	// console.log((bronzeTalentBooks / 2) * 20);
	// console.log('Total Days');
	// console.log(parseFloat((((bronzeTalentBooks / 2) * 20) / 180).toFixed(1)));

	// console.log('Total Silver Talent Books');
	// console.log(silverTalentBooks);
	// console.log('Total Domains');
	// console.log(silverTalentBooks / 2 - bronzeTalentBooks);
	// console.log('Total Resin');
	// console.log((silverTalentBooks / 2 - bronzeTalentBooks) * 20);
	// console.log('Total Days');
	// console.log(
	// 	parseFloat(
	// 		(((silverTalentBooks / 2 - bronzeTalentBooks) * 20) / 180).toFixed(1)
	// 	)
	// );

	// console.log('Total Gold Talent Books');
	// console.log(goldTalentBooks);
	// console.log('Total Domains');
	// console.log(goldTalentBooks);
	// console.log('Total Resin');
	// console.log(goldTalentBooks * 20);
	// console.log('Total Days');
	// console.log(parseFloat(((goldTalentBooks * 20) / 180).toFixed(1)));

	// const goldBooksDays = parseFloat(((goldTalentBooks * 20) / 180).toFixed(1));

	function round(value, precision) {
		let multiplier = Math.pow(10, precision || 0);
		return Math.round(value * multiplier) / multiplier;
	}

	const totalMora = moraCharacter + moraTalent;
	const moraLeyLines = Math.round(totalMora / 60000);
	const moraResin = moraLeyLines * 20;
	const moraDays = round(moraResin / 180, 1);

	const totalExpBooks = expBooks;
	const expBooksLeyLines = Math.round(totalExpBooks / 5);
	const expBooksResin = Math.round(expBooksLeyLines) * 20;
	const expBooksDays = round(expBooksResin / 180, 1);

	const bossMaterialsTotal = bossAscensionMaterial;
	const bossMaterialsBosses = bossAscensionMaterial / 2;
	const bossMaterialsResin = (bossAscensionMaterial / 2) * 40;
	const bossMaterialsDays = Math.round(
		((bossAscensionMaterial / 2) * 40) / 180
	);

	const bronzeBooks = bronzeTalentBooks;
	const bronzeBooksDomains = bronzeBooks / 2;
	const bronzeBooksResin = bronzeBooksDomains * 20;
	const bronzeBooksDays = round(bronzeBooksResin / 180, 1);

	const silverBooks = silverTalentBooks;
	const silverBooksDomains = silverBooks / 2;
	const silverBooksResin = silverBooksDomains * 20;
	const silverBooksDays = round(silverBooksResin / 180, 1);

	const goldBooks = goldTalentBooks;
	const goldBooksDomains = goldBooks;
	const goldBooksResin = goldBooksDomains * 20;
	const goldBooksDays = round(goldBooksResin / 180, 1);

	return (
		<section className='bg-primary-dark text-color my-2 rounded'>
			{charactersData.map(c =>
				characterSelect === c.data.name ? (
					<div className='' key={c.data.name}>
						<section className='rounded-top p-3 bg-primary-light'>
							<h5 className=''>Materials</h5>
						</section>
						<section className='bg-secondary-medium d-flex flex-wrap justify-content-xl-around justify-content-center rounded m-3 p-3'>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={<Tooltip>{'Mora'}</Tooltip>}
								>
									<img
										src='/images/Materials/Item_Mora.png'
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{totalMora.toLocaleString()}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={<Tooltip>{"Hero's Wit"}</Tooltip>}
								>
									<img
										src="/images/Materials/Character Materials/EXP/Item_Hero's_Wit.png"
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{expBooks}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[0].localSpeciality.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[0].localSpeciality.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{localSpeciality}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[0].commonMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[0].commonMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{characterCommonMaterial1 + talentCommonMaterial1}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[2].commonMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[2].commonMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{characterCommonMaterial2 + talentCommonMaterial2}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[4].commonMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[4].commonMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{characterCommonMaterial3 + talentCommonMaterial3}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[4].bossMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[4].bossMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{bossAscensionMaterial}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[0].ascensionMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[0].ascensionMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{sliver}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[1].ascensionMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[1].ascensionMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{fragments}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[3].ascensionMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[3].ascensionMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{chunks}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.characterAscension[5].ascensionMaterial.name}
										</Tooltip>
									}
								>
									<img
										src={c.data.characterAscension[5].ascensionMaterial.image}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{gemstones}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>{`Teachings of ${c.data.talentBook.substring(
											13
										)}`}</Tooltip>
									}
								>
									<img
										src={c.data.talentMaterials[0].talentBookImage}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{bronzeTalentBooks}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>{`Guide to ${c.data.talentBook.substring(
											13
										)}`}</Tooltip>
									}
								>
									<img
										src={c.data.talentMaterials[1].talentBookImage}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{silverTalentBooks}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>{`Philosophies of ${c.data.talentBook.substring(
											13
										)}`}</Tooltip>
									}
								>
									<img
										src={c.data.talentMaterials[5].talentBookImage}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{goldTalentBooks}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={
										<Tooltip>
											{c.data.talentMaterials[8].bossMaterialImage
												.substring(
													61,
													c.data.talentMaterials[8].bossMaterialImage.length - 4
												)
												.replaceAll('_', ' ')}
										</Tooltip>
									}
								>
									<img
										src={c.data.talentMaterials[8].bossMaterialImage}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{bossMaterial}</div>
							</div>
							<div>
								<OverlayTrigger
									placement='top'
									overlay={<Tooltip>{'Crown'}</Tooltip>}
								>
									<img
										src={c.data.talentMaterials[8].crownImage}
										width='60px'
										alt=''
									/>
								</OverlayTrigger>
								<div>{crown}</div>
							</div>
						</section>
						<div className='d-flex justify-content-center rounded px-3 py-2 mx-3 bg-danger'>
							<div>
								<h5>Total Cost</h5>
								<div className='d-flex align-items-center'>
									<h6>Resin</h6>
									<img
										src='images/Materials/Item_Fragile_Resin.png'
										width='50px'
										alt=''
									/>{' '}
									={' '}
									{moraResin +
										expBooksResin +
										bossMaterialsResin +
										bronzeBooksResin +
										silverBooksResin +
										goldBooksResin}
								</div>
								<div className='d-flex'>
									<h6>
										Days
										<span className='mx-2'>
											<MdCalendarToday size={30} /> ={' '}
											{round(
												moraDays +
													expBooksDays +
													bossMaterialsDays +
													bronzeBooksDays +
													silverBooksDays +
													goldBooksDays,
												1
											)}
										</span>
									</h6>
								</div>
							</div>
						</div>

						<section className='row g-0'>
							<div className='col-md-4'>
								{/*//* <----- Mora -----> */}
								<div className='bg-secondary-medium rounded p-2 ms-3 mt-3 me-md-1 me-3'>
									<OverlayTrigger
										placement='top'
										overlay={<Tooltip>{'Mora'}</Tooltip>}
									>
										<img
											src='/images/Materials/Item_Mora.png'
											width='60px'
											alt=''
										/>
									</OverlayTrigger>
									<div className='text-center'>
										<h6>Mora = {totalMora.toLocaleString()}</h6>
										<h6>Ley-Lines = {moraLeyLines}</h6>
										<h6>Resin = {moraResin}</h6>
										<h6>Days = {moraDays}</h6>
									</div>
								</div>
								{/*//* <----- Hero's Wit -----> */}
								<div className='bg-secondary-medium rounded p-2 ms-3 mt-3 me-md-1 me-3'>
									<OverlayTrigger
										placement='top'
										overlay={<Tooltip>{"Hero's Wit"}</Tooltip>}
									>
										<img
											src="/images/Materials/Character Materials/EXP/Item_Hero's_Wit.png"
											width='60px'
											alt=''
										/>
									</OverlayTrigger>
									<div className='text-center'>
										<h6>Hero's Wit = {totalExpBooks}</h6>
										<h6>Ley-Lines = {expBooksLeyLines}</h6>
										<h6>Resin = {expBooksResin}</h6>
										<h6>Days = {expBooksDays}</h6>
									</div>
								</div>
							</div>

							<div className='col-md-4'>
								{/*//* <----- Boss Materials -----> */}
								<div className='bg-secondary-medium rounded p-2 ms-3 mt-3 me-md-1 me-3'>
									<OverlayTrigger
										placement='top'
										overlay={
											<Tooltip>
												{c.data.characterAscension[4].bossMaterial.name}
											</Tooltip>
										}
									>
										<img
											src={c.data.characterAscension[4].bossMaterial.image}
											width='60px'
											alt=''
										/>
									</OverlayTrigger>
									<div className='text-center'>
										<h6>Boss Materials = {bossMaterialsTotal}</h6>
										<h6>Bosses = {bossMaterialsBosses}</h6>
										<h6>Resin = {bossMaterialsResin}</h6>
										<h6>Days = {bossMaterialsDays}</h6>
									</div>
								</div>
								{/*//* <----- Bronze Talent Books -----> */}
								<div className='bg-secondary-medium rounded p-2 ms-3 mt-3 me-md-1 me-3'>
									<OverlayTrigger
										placement='top'
										overlay={
											<Tooltip>{`Teachings of ${c.data.talentBook.substring(
												13
											)}`}</Tooltip>
										}
									>
										<img
											src={c.data.talentMaterials[0].talentBookImage}
											width='60px'
											alt=''
										/>
									</OverlayTrigger>
									<div className='text-center'>
										<h6>Bronze Talent Books = {bronzeBooks}</h6>
										<h6>Domains = {bronzeBooksDomains}</h6>
										<h6>Resin = {bronzeBooksResin}</h6>
										<h6>Days = {bronzeBooksDays}</h6>
									</div>
								</div>
							</div>

							<div className='col-md-4'>
								{/*//* <----- Silver Talent Books -----> */}
								<div className='bg-secondary-medium rounded p-2 m-3'>
									<OverlayTrigger
										placement='top'
										overlay={
											<Tooltip>{`Guide to ${c.data.talentBook.substring(
												13
											)}`}</Tooltip>
										}
									>
										<img
											src={c.data.talentMaterials[1].talentBookImage}
											width='60px'
											alt=''
										/>
									</OverlayTrigger>
									<div className='text-center'>
										<h6>Silver Talent Books = {silverBooks}</h6>
										<h6>Domains = {silverBooksDomains}</h6>
										<h6>Resin = {silverBooksResin}</h6>
										<h6>Days = {silverBooksDays}</h6>
									</div>
								</div>
								{/*//* <----- Gold Talent Books -----> */}
								<div className='bg-secondary-medium rounded p-2 m-3'>
									<OverlayTrigger
										placement='top'
										overlay={
											<Tooltip>{`Philosophies of ${c.data.talentBook.substring(
												13
											)}`}</Tooltip>
										}
									>
										<img
											src={c.data.talentMaterials[5].talentBookImage}
											width='60px'
											alt=''
										/>
									</OverlayTrigger>
									<div className='text-center'>
										<h6>Gold Talent Books = {goldBooks}</h6>
										<h6>Domains = {goldBooksDomains}</h6>
										<h6>Resin = {goldBooksResin}</h6>
										<h6>Days = {goldBooksDays}</h6>
									</div>
								</div>
							</div>
						</section>
					</div>
				) : (
					<div key={c.data.name}></div>
				)
			)}
		</section>
	);
};

export default Materials;
