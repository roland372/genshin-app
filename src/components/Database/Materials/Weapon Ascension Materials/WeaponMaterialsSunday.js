import React from 'react';
import WeaponMaterial from './WeaponMaterial';

const WeaponMaterialsSunday = props => {
	return (
		<section>
			<div className='table-responsive mx-3'>
				<table
					className='table table-sm table-hover table-striped table-dark align-middle'
					style={{ minWidth: '400px' }}
				>
					<thead>
						<tr>
							<th scope='col'>Materials</th>
							<th scope='col'>Domain</th>
							<th scope='col'>Weapons</th>
						</tr>
					</thead>
					<tbody>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial="Tile of Decarabian's Tower"
							days='Cecilia Garden'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial='Luminous Sands from Guyun'
							days='Hidden Palace of Lianshan Formula'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial='Coral Branch of a Distant Sea'
							days='Court of Flowing Sand'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial="Boreal Wolf's Milk Tooth"
							days='Cecilia Garden'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial='Mist Veiled Lead Elixir'
							days='Hidden Palace of Lianshan Formula'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial="Narukami's Wisdom"
							days='Court of Flowing Sand'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial='Fetters of the Dandelion Gladiator'
							days='Cecilia Garden'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial='Grain of Aerosiderite'
							days='Hidden Palace of Lianshan Formula'
						/>
						<WeaponMaterial
							weaponsData={props.weaponsData}
							ascensionMaterial='Mask of the Wicked Lieutenant'
							days='Court of Flowing Sand'
						/>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default WeaponMaterialsSunday;
