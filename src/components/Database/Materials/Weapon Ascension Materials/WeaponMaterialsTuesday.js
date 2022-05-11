import React from 'react';

//? <----- Components ----->
import WeaponMaterial from './WeaponMaterial';
import Table from './Components/Table';

const WeaponMaterialsTuesday = props => {
	return (
		<section>
			<Table days='Days'>
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
			</Table>
		</section>
	);
};

export default WeaponMaterialsTuesday;
