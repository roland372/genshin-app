import React from 'react';

//? <----- Components ----->
import CardComponent from '../../../Layout/CardComponent';
import WeaponMaterial from './WeaponMaterial';
import Table from './Components/Table';

const WeaponMaterials = props => {
	return (
		<CardComponent title='Weapon Ascension Materials'>
			<Table nation='Mondstadt' days='Days'>
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
			</Table>
			<Table nation='Liyue' days='Days'>
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
			</Table>
			<Table nation='Inazuma' days='Days'>
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
			</Table>
			<Table nation='Sumeru' days='Days'>
				<WeaponMaterial
					weaponsData={props.weaponsData}
					ascensionMaterial='Copper Talisman of the Forest Dew'
					days='Monday, Thursday'
				/>
				<WeaponMaterial
					weaponsData={props.weaponsData}
					ascensionMaterial="Oasis Garden's Reminiscence"
					days='Tuesday, Friday'
				/>
				<WeaponMaterial
					weaponsData={props.weaponsData}
					ascensionMaterial='Echo of Scorching Might'
					days='Wednesday, Saturday'
				/>
			</Table>
		</CardComponent>
	);
};

export default WeaponMaterials;
