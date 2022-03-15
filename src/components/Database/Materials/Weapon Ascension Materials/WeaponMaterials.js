import React from 'react';
import CardComponent from '../../../Layout/CardComponent';
import WeaponMaterial from './WeaponMaterial';

const WeaponMaterials = props => {
	return (
		<CardComponent title='Weapon Ascension Materials'>
			<section>
				<h4 className='text-center my-2 mx-3 p-2 border-bottom'>Mondstadt</h4>
				<div className='table-responsive mx-3'>
					<table
						className='table table-sm table-hover table-striped table-dark align-middle'
						style={{ minWidth: '400px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Materials</th>
								<th scope='col'>Days</th>
								<th scope='col'>Weapons</th>
							</tr>
						</thead>
						<tbody>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial="Tile of Decarabian's Tower"
								days='Monday, Thursday'
							/>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial="Boreal Wolf's Milk Tooth"
								days='Tuesday, Friday'
							/>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial='Fetters of the Dandelion Gladiator'
								days='Wednesday, Saturday'
							/>
						</tbody>
					</table>
				</div>
			</section>
			<section>
				<h4 className='text-center my-2 mx-3 p-2 border-bottom'>Liyue</h4>
				<div className='table-responsive mx-3'>
					<table
						className='table table-sm table-hover table-striped table-dark align-middle'
						style={{ minWidth: '400px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Materials</th>
								<th scope='col'>Days</th>
								<th scope='col'>Weapons</th>
							</tr>
						</thead>
						<tbody>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial='Luminous Sands from Guyun'
								days='Monday, Thursday'
							/>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial='Mist Veiled Lead Elixir'
								days='Tuesday, Friday'
							/>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial='Grain of Aerosiderite'
								days='Wednesday, Saturday'
							/>
						</tbody>
					</table>
				</div>
			</section>
			<section>
				<h4 className='text-center my-2 mx-3 p-2 border-bottom'>Inazuma</h4>
				<div className='table-responsive mx-3'>
					<table
						className='table table-sm table-hover table-striped table-dark align-middle'
						style={{ minWidth: '400px' }}
					>
						<thead>
							<tr>
								<th scope='col'>Materials</th>
								<th scope='col'>Days</th>
								<th scope='col'>Weapons</th>
							</tr>
						</thead>
						<tbody>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial='Coral Branch of a Distant Sea'
								days='Monday, Thursday'
							/>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial="Narukami's Wisdom"
								days='Tuesday, Friday'
							/>
							<WeaponMaterial
								weaponsData={props.weaponsData}
								ascensionMaterial='Mask of the Wicked Lieutenant'
								days='Wednesday, Saturday'
							/>
						</tbody>
					</table>
				</div>
			</section>
		</CardComponent>
	);
};

export default WeaponMaterials;
