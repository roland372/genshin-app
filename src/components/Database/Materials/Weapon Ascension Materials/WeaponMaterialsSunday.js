import React from 'react';

//? <----- Components ----->
import WeaponMaterial from './WeaponMaterial';
import Table from './Components/Table';

const WeaponMaterialsSunday = props => {
	return (
		<section>
			<Table days='Domain'>
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
					ascensionMaterial='Copper Talisman of the Forest Dew'
					days='Tower of Abject Pride'
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
					ascensionMaterial="Oasis Garden's Reminiscence"
					days='Tower of Abject Pride'
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
				<WeaponMaterial
					weaponsData={props.weaponsData}
					ascensionMaterial='Echo of Scorching Might'
					days='Tower of Abject Pride'
				/>
			</Table>
		</section>
	);
};

export default WeaponMaterialsSunday;
