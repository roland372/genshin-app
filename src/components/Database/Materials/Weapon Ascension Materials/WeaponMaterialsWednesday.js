import React from 'react';

//? <----- Components ----->
import WeaponMaterial from './WeaponMaterial';
import Table from './Components/Table';

const WeaponMaterialsWednesday = props => {
	return (
		<section>
			<Table days='Days'>
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
			</Table>
		</section>
	);
};

export default WeaponMaterialsWednesday;
