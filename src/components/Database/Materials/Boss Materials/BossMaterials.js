import React from 'react';
import CardComponent from '../../../Layout/CardComponent';
import BossMaterial from './BossMaterial';

const BossMaterials = props => {
	const { characters } = props;

	return (
		<CardComponent title='Weekly Boss Materials'>
			<div className='table-responsive mx-3'>
				<table
					className='table table-sm table-hover table-striped table-dark align-middle'
					style={{ minWidth: '400px' }}
				>
					<thead>
						<tr>
							<th scope='col'>Materials</th>
							<th scope='col'>Boss Name</th>
							<th scope='col'>Characters</th>
						</tr>
					</thead>
					<tbody>
						<BossMaterial
							characters={characters}
							bossMaterial="Dvalin's Plume"
							bossName='Dvalin'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial="Dvalin's Claw"
							bossName='Dvalin'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial="Dvalin's Sigh"
							bossName='Dvalin'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Tail of Boreas'
							bossName='Andrius'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Ring of Boreas'
							bossName='Andrius'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Spirit Locket of Boreas'
							bossName='Andrius'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Tusk of Monoceros Caeli'
							bossName='Childe'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Shard of a Foul Legacy'
							bossName='Childe'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Shadow of the Warrior'
							bossName='Childe'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial="Dragon Lord's Crown"
							bossName='Azhdaha'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Bloodjade Branch'
							bossName='Azhdaha'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Gilded Scale'
							bossName='Azhdaha'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Molten Moment'
							bossName='Signora'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Hellfire Butterfly'
							bossName='Signora'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Ashen Heart'
							bossName='Signora'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Mudra of the Malefic General'
							bossName='Magatsu Mitake Narukami no Mikoto'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='Tears of the Calamitous God'
							bossName='Magatsu Mitake Narukami no Mikoto'
						/>
						<BossMaterial
							characters={characters}
							bossMaterial='The Meaning of Aeons'
							bossName='Magatsu Mitake Narukami no Mikoto'
						/>
					</tbody>
				</table>
			</div>
		</CardComponent>
	);
};

export default BossMaterials;
