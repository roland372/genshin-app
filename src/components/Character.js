import React from 'react';
import CharacterAmberv2 from '../assets/Character_Amber_Avatar.png';
import RarityImage from '../assets/Icon_5_Stars.png';
import BowIcon from '../assets/Weapon-class-sword-icon.png';
import ElementPyro from '../assets/Element_Anemo.png';
import TalentBook from '../assets/Item_Teachings_of_Freedom.png';
import TalentImage from '../assets/Talent_Sharpshooter.png';

const Character = () => {
	return (
		<main className='bg-secondary text-light pt-1 pb-1'>
			<div className='container '>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3 '>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>Amber</h3>
					<div className='table-responsive mx-3'>
						<table
							className='table table-dark table-sm align-middle'
							style={{ minWidth: '600px' }}
						>
							<tbody>
								<tr>
									<td rowSpan='15'>
										<img
											src={CharacterAmberv2}
											width='200px'
											className='me-2'
											alt=''
										/>
									</td>
								</tr>
								<tr>
									<td>Rarity</td>
									<td>
										<img src={RarityImage} width='60px' alt='' />
									</td>
								</tr>
								<tr>
									<td>Weapon</td>
									<td>
										<img src={BowIcon} width='50px' alt='' />
									</td>
								</tr>
								<tr>
									<td>Element</td>
									<td>
										<img src={ElementPyro} width='50px' alt='' />
									</td>
								</tr>
								<tr>
									<td>Sex</td>
									<td>Female</td>
								</tr>
								<tr>
									<td>Birthday</td>
									<td>August 10th</td>
								</tr>
								<tr>
									<td>Constellation</td>
									<td>Lepus</td>
								</tr>
								<tr>
									<td>Nation</td>
									<td>Mondstadt</td>
								</tr>
								<tr>
									<td>Affiliation</td>
									<td>Knights of Favonius</td>
								</tr>
								<tr>
									<td>Special Dish</td>
									<td> Outrider's Champion Steak!</td>
								</tr>
								<tr>
									<td>In-game descrption</td>
									<td>
										Always energetic and full of life, Amber's the best - albeit
										only - Outrider of the Knights of Favonius.
									</td>
								</tr>
								<tr>
									<td>Talent Book</td>
									<td>
										<img src={TalentBook} width='70px' alt='' />
									</td>
								</tr>
								<tr>
									<td>Ascension Materials</td>
									<td>
										<img src={BowIcon} width='50px' alt='' />
										<img src={BowIcon} width='50px' alt='' />
										<img src={BowIcon} width='50px' alt='' />
										<img src={BowIcon} width='50px' alt='' />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3 '>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>Stats</h3>
					<div className='table-responsive mx-2'>
						<table
							className='table table-sm table-dark table-striped align-middle text-center'
							text-center
							style={{ minWidth: '700px' }}
						>
							<thead>
								<tr>
									<th scope='col'>Ascension</th>
									<th scope='col'>Level</th>
									<th scope='col'>Base HP</th>
									<th scope='col'>Base ATK</th>
									<th scope='col'>Base DEF</th>
									<th scope='col'>CRIT Rate</th>
									<th scope='col'>CRIT DMG</th>
									<th scope='col'>ATK%</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowspan='2' width='50px'>
										0
									</td>
									<td>1</td>
									<td>793</td>
									<td>19</td>
									<td>50</td> <td>5%</td>
									<td>50%</td>
									<td>0%</td>
								</tr>
								<tr>
									<td>20</td>
									<td>2038</td>
									<td>48</td>
									<td>129</td>
									<td>5%</td>
									<td>50%</td>
									<td>0%</td>
								</tr>
								<tr>
									<td rowspan='2'>1</td>
									<td>20+</td>
									<td>2630</td>
									<td>62</td>
									<td>167</td>
									<td>5%</td>
									<td>50%</td>
									<td>0%</td>
								</tr>
								<tr>
									<td>40</td>
									<td>3940</td>
									<td>93</td>
									<td>250</td>
									<td>5%</td>
									<td>50%</td>
									<td>0%</td>
								</tr>
								<tr>
									<td rowspan='2'>2</td>
									<td>40+</td>
									<td>4361</td>
									<td>103</td>
									<td>277</td>
									<td>5%</td>
									<td>50%</td>
									<td>6%</td>
								</tr>
								<tr>
									<td>50</td>
									<td>5016</td>
									<td>118</td>
									<td>318</td>
									<td>5%</td>
									<td>50%</td>
									<td>6%</td>
								</tr>
								<tr>
									<td rowspan='2'>3</td>
									<td>50+</td>
									<td>5578</td>
									<td>131</td>
									<td>354</td>
									<td>5%</td>
									<td>50%</td>
									<td>12%</td>
								</tr>
								<tr>
									<td>60</td>
									<td>6233</td>
									<td>147</td>
									<td>396</td>
									<td>5%</td>
									<td>50%</td>
									<td>12%</td>
								</tr>
								<tr>
									<td rowspan='2'>4</td>
									<td>60+</td>
									<td>6654</td>
									<td>157</td>
									<td>422</td>
									<td>5%</td>
									<td>50%</td>
									<td>12%</td>
								</tr>
								<tr>
									<td>70</td>
									<td>7309</td>
									<td>172</td>
									<td>464</td>
									<td>5%</td>
									<td>50%</td>
									<td>12%</td>
								</tr>
								<tr>
									<td rowspan='2'>5</td>
									<td>70+</td>
									<td>7730</td>
									<td>182</td>
									<td>491</td>
									<td>5%</td>
									<td>50%</td>
									<td>18%</td>
								</tr>
								<tr>
									<td>80</td>
									<td>8385</td>
									<td>198</td>
									<td>532</td>
									<td>5%</td>
									<td>50%</td>
									<td>18%</td>
								</tr>
								<tr>
									<td rowspan='2'>6</td>
									<td>80+</td> <td>8806</td>
									<td>208</td>
									<td>559</td>
									<td>5%</td>
									<td>50%</td>
									<td>24%</td>
								</tr>
								<tr>
									<td>90</td>
									<td>9461</td>
									<td>223</td>
									<td>601</td>
									<td>5%</td>
									<td>50%</td>
									<td>24%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>Talents</h3>
					<div className='mx-3 table-responsive'>
						<section>
							<table className='table table-dark table-sm align-middle'>
								<thead>
									<tr>
										<th scope='col'>Icon</th>
										<th scope='col'>Name</th>
										<th scope='col'>Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width='50px'>
											<img
												src={TalentImage}
												className='me-5'
												width='50px'
												alt=''
											/>
										</td>
										<td>Sharpshooter</td>
										<td>Normal Attack</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<p>
												<b>Normal Attack: </b>
												Perform up to 5 consecutive shots with a bow.
											</p>
											<p>
												<b>Charged Attack: </b>
												Perform a more precise Aimed Shot with increased DMG.
												While aiming, flames will accumulate on the arrowhead. A
												fully charged flaming arrow will deal Pyro DMG.
											</p>
											<p>
												<b>Plunging Attack: </b>
												Fires off a shower of arrows in mid-air before falling
												an striking the ground, dealing AoE DMG upon impact.
											</p>
										</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<h4>Attribute Scaling</h4>
										</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<div className='table-responsive'>
												<table className='table table-dark table-sm align-middle'>
													<thead>
														<tr>
															<th scope='col'>Level</th>
															<th scope='col'>1</th>
															<th scope='col'>2</th>
															<th scope='col'>3</th>
															<th scope='col'>4</th>
															<th scope='col'>5</th>
															<th scope='col'>6</th>
															<th scope='col'>7</th>
															<th scope='col'>8</th>
															<th scope='col'>9</th>
															<th scope='col'>10</th>
															<th scope='col'>11</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>1-Hit DMG</td>
															<td>36.1%</td>
															<td>39.1%</td>
															<td>42%</td>
															<td>46.2%</td>
															<td>49.1%</td>
															<td>52.5%</td>
															<td>57.1%</td>
															<td>61.7%</td>
															<td>66.4%</td>
															<td>71.4%</td>
															<td>76.4%</td>
														</tr>
														<tr>
															<td>2-Hit DMG</td>
															<td>36.1%</td>
															<td>39.1%</td>
															<td>42%</td>
															<td>46.2%</td>
															<td>49.1%</td>
															<td>52.5%</td>
															<td>57.1%</td>
															<td>61.7%</td>
															<td>66.4%</td>
															<td>71.4%</td>
															<td>76.4%</td>
														</tr>
														<tr>
															<td>3-Hit DMG</td>
															<td>46.4%</td>
															<td>50.2%</td>
															<td>54%</td>
															<td>59.4%</td>
															<td>63.2%</td>
															<td>67.5%</td>
															<td>73.4%</td>
															<td>79.4%</td>
															<td>85.3%</td>
															<td>91.8%</td>
															<td>98.3%</td>
														</tr>
														<tr>
															<td>4-Hit DMG</td>
															<td>47.3%</td>
															<td>51.2%</td>
															<td>55%</td>
															<td>60.5%</td>
															<td>64.3%</td>
															<td>68.8%</td>
															<td>74.8%</td>
															<td>80.8%</td>
															<td>86.9%</td>
															<td>93.5%</td>
															<td>100.1%</td>
														</tr>
														<tr>
															<td>5-Hit DMG</td>
															<td>59.3%</td>
															<td>64.2%</td>
															<td>69%</td>
															<td>75.9%</td>
															<td>80.7%</td>
															<td>86.3%</td>
															<td>93.8%</td>
															<td>101.4%</td>
															<td>109%</td>
															<td>117.3%</td>
															<td>125.6%</td>
														</tr>
														<tr>
															<td>Aimed Shot</td>
															<td>43.9%</td>
															<td>47.4%</td>
															<td>51%</td>
															<td>56.1%</td>
															<td>59.7%</td>
															<td>63.7%</td>
															<td>69.4%</td>
															<td>75%</td>
															<td>80.6%</td>
															<td>86.7%</td>
															<td>92.8%</td>
														</tr>
														<tr>
															<td>Fully-Charged Aimed Shot</td> <td>124%</td>
															<td>133%</td>
															<td>143%</td>
															<td>155%</td>
															<td>164%</td>
															<td>174%</td>
															<td>186%</td>
															<td>198%</td>
															<td>211%</td>
															<td>223%</td>
															<td>236%</td>
														</tr>
														<tr>
															<td>Plunge DMG</td>
															<td>56.8%</td>
															<td>61.5%</td>
															<td>66.1%</td>
															<td>72.7%</td>
															<td>77.3%</td>
															<td>82.6%</td>
															<td>89.9%</td>
															<td>97.1%</td>
															<td>104.4%</td>
															<td>112.3%</td>
															<td>120.3%</td>
														</tr>
														<tr>
															<td>Low/High Plunge DMG</td> <td>114% /142%</td>
															<td>123% /153%</td>
															<td>132% /165%</td>
															<td>145% /182%</td>
															<td>155% /193%</td>
															<td>165% /206%</td>
															<td>180% /224%</td>
															<td>194% /243%</td>
															<td>209% /261%</td>
															<td>225% /281%</td>
															<td>240% /300%</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<td width='50px'>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>Explosive Puppet</td>
										<td>Elemental Skill</td>
									</tr>
									<tr>
										<td colSpan='3'>
											The ever-reliable Baron Bunny takes the stage.
											<br />
											<br />
											<p>
												<b>Baron Bunny: </b>
											</p>
											<ul>
												<li>
													Continuously taunts the enemy, drawing their fire.
												</li>
												<li>Baron Bunny's HP scales with Amber's Max HP.</li>
												<li>
													When destroyed or when its timer expires, Baron Bunny
													explodes, dealing AoE Pyro DMG.
												</li>
											</ul>
											<p>
												<b>Hold: </b>
												Adjusts the throwing direction of Baron Bunny. The
												longer the button is held, the further the throw.
											</p>
										</td>
									</tr>
									<tr>
										<td width='50px'>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>Fiery Rain</td>
										<td>Elemental Burst</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<p>
												Fires off a shower of arrows, dealing continuous AoE
												Pyro DMG.
											</p>
										</td>
									</tr>
									<tr>
										<td width='50px'>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>Every Arrow Finds Its Target</td>
										<td>1st Ascension Passive</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<p>
												Increases the CRIT Rate of Fiery Rain by 10% and widens
												its AoE by 30%.
											</p>
										</td>
									</tr>
									<tr>
										<td width='50px'>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>Precise Shot</td>
										<td>4th Ascension Passive</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<p>
												Aimed Shot hits on weak spots increase ATK by 15% for
												10s.
											</p>
										</td>
									</tr>
									<tr>
										<td width='50px'>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>Gliding Champion</td>
										<td>Utility Passive</td>
									</tr>
									<tr>
										<td colSpan='3'>
											<p>
												Decreases gliding Stamina consumption for your own party
												members by 20%.
												<br />
												Not stackable with Passive Talents that provide the
												exact same effects.
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</section>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Talent Leveling Materials
					</h3>
					<div className='mx-3 table-responsive'>
						<section>
							<table className='table table-dark table-sm align-middle text-center'>
								<thead>
									<tr>
										<th scope='col'>Level</th>
										<th scope='col'>Materials</th>
										<th scope='col'>Mora Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>2</th>
										<td className='d-flex justify-content-center'>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2 '>x2</span>
											</div>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2'>x2</span>
											</div>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2'>x2</span>
											</div>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2'>x2</span>
											</div>
										</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
											<span className='ms-2'>x12500</span>
										</td>
									</tr>
									<tr>
										<th>3</th>
										<td className='d-flex justify-content-center'>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2 '>x2</span>
											</div>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2'>x2</span>
											</div>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2'>x2</span>
											</div>
											<div>
												<img src={TalentImage} width='50px' alt='' />
												<span className='mx-2'>x2</span>
											</div>
										</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
											<span className='ms-2'>x12500</span>
										</td>
									</tr>
								</tbody>
							</table>
						</section>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Constellation
					</h3>
					<div className='mx-3 table-responsive'>
						<section>
							<table className='table table-dark table-sm align-middle'>
								<thead>
									<tr>
										<th scope='col'>Level</th>
										<th scope='col'>Icon</th>
										<th scope='col'>Name</th>
										<th scope='col'>Effect</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>One Arrow to Rule Them All</td>
										<td>
											Fires 2 arrows per Aimed Shot. The second arrow deals 20%
											of the first arrow's DMG.
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>One Arrow to Rule Them All</td>
										<td>
											Fires 2 arrows per Aimed Shot. The second arrow deals 20%
											of the first arrow's DMG.
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>One Arrow to Rule Them All</td>
										<td>
											Fires 2 arrows per Aimed Shot. The second arrow deals 20%
											of the first arrow's DMG.
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>One Arrow to Rule Them All</td>
										<td>
											Fires 2 arrows per Aimed Shot. The second arrow deals 20%
											of the first arrow's DMG.
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>One Arrow to Rule Them All</td>
										<td>
											Fires 2 arrows per Aimed Shot. The second arrow deals 20%
											of the first arrow's DMG.
										</td>
									</tr>
									<tr>
										<td>1</td>
										<td>
											<img src={TalentImage} width='50px' alt='' />
										</td>
										<td>One Arrow to Rule Them All</td>
										<td>
											Fires 2 arrows per Aimed Shot. The second arrow deals 20%
											of the first arrow's DMG.
										</td>
									</tr>
								</tbody>
							</table>
						</section>
					</div>
				</section>
				<section className='rounded-3 mt-3 mb-3 bg-dark p-3'>
					<h3 className='bg-primary rounded-2 p-2 mx-2 text-center'>
						Ascensions
					</h3>
					<div className='mx-3 table-responsive'>
						<section>
							<table
								className='table table-dark table-sm align-middle text-center'
								style={{ minWidth: '600px' }}
							>
								<thead>
									<tr>
										<th scope='col'>Ascension Phase</th>
										<th scope='col'>Mora Cost</th>
										<th scope='col' colSpan='2'>
											Character Ascension Materials
										</th>
										<th scope='col'>Local Specialties</th>
										<th scope='col'>Common Materials</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>0 → 1</th>
										<td>20,000</td>
										<td colSpan='2'>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
										<td>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
										<td>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
									</tr>
									<tr>
										<th>1 → 2</th>
										<td>40,000</td>
										<td>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
										<td>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
										<td>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
										<td>
											<img
												src={TalentImage}
												width='50px'
												alt=''
												className='me-2'
											/>
											<span className='badge bg-secondary'>x2</span>
											<br />
											<small>Agnidus Agate Sliver</small>
										</td>
									</tr>
								</tbody>
							</table>
						</section>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Character;
