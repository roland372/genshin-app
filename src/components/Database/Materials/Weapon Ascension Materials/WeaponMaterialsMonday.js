import React from 'react';

//? <----- Components ----->
import WeaponMaterial from './WeaponMaterial';
import Table from './Components/Table';

const WeaponMaterialsMonday = props => {
	return (
		<section>
			<Table days='Days'>
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
			</Table>
		</section>
	);
};

export default WeaponMaterialsMonday;
