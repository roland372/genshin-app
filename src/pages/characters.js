import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Characters from '../components/Characters/Characters';
import Albedo from '../components/Characters/Character/Albedo/Albedo';
import Aloy from '../components/Characters/Character/Aloy/Aloy';
import Amber from '../components/Characters/Character/Amber/Amber';
import AratakiItto from '../components/Characters/Character/Arataki Itto/AratakiItto';
import Barbara from '../components/Characters/Character/Barbara/Barbara';
import Beidou from '../components/Characters/Character/Beidou/Beidou';
import Bennett from '../components/Characters/Character/Bennett/Bennett';
import Chongyun from '../components/Characters/Character/Chongyun/Chongyun';
import Diluc from '../components/Characters/Character/Diluc/Diluc';
import Diona from '../components/Characters/Character/Diona/Diona';
import Eula from '../components/Characters/Character/Eula/Eula';
import Fischl from '../components/Characters/Character/Fischl/Fischl';
import Ganyu from '../components/Characters/Character/Ganyu/Ganyu';
import HuTao from '../components/Characters/Character/Hu Tao/HuTao';
import Jean from '../components/Characters/Character/Jean/Jean';
import KaedeharaKazuha from '../components/Characters/Character/Kaedehara Kazuha/KaedeharaKazuha';
import Kaeya from '../components/Characters/Character/Kaeya/Kaeya';
import KamisatoAyaka from '../components/Characters/Character/Kamisato Ayaka/KamisatoAyaka';
import Keqing from '../components/Characters/Character/Keqing/Keqing';
import Klee from '../components/Characters/Character/Klee/Klee';
import KujouSara from '../components/Characters/Character/Kujou Sara/KujouSara';
import Lisa from '../components/Characters/Character/Lisa/Lisa';
import Mona from '../components/Characters/Character/Mona/Mona';
import Ningguang from '../components/Characters/Character/Ningguang/Ningguang';
import Noelle from '../components/Characters/Character/Noelle/Noelle';
import Qiqi from '../components/Characters/Character/Qiqi/Qiqi';
import RaidenShogun from '../components/Characters/Character/Raiden Shogun/RaidenShogun';
import Razor from '../components/Characters/Character/Razor/Razor';
import Rosaria from '../components/Characters/Character/Rosaria/Rosaria';
import SangonomiyaKokomi from '../components/Characters/Character/Sangonomiya Kokomi/SangonomiyaKokomi';
import Sayu from '../components/Characters/Character/Sayu/Sayu';
import Sucrose from '../components/Characters/Character/Sucrose/Sucrose';
import Tartaglia from '../components/Characters/Character/Tartaglia/Tartaglia';
import TravelerAnemo from '../components/Characters/Character/Traveler/Anemo/TravelerAnemo';
import TravelerGeo from '../components/Characters/Character/Traveler/Geo/TravelerGeo';
import TravelerElectro from '../components/Characters/Character/Traveler/Electro/TravelerElectro';
import Venti from '../components/Characters/Character/Venti/Venti';
import Xiangling from '../components/Characters/Character/Xiangling/Xiangling';
import Xiao from '../components/Characters/Character/Xiao/Xiao';
import Xingqiu from '../components/Characters/Character/Xingqiu/Xingqiu';
import Xinyan from '../components/Characters/Character/Xinyan/Xinyan';
import Yanfei from '../components/Characters/Character/Yanfei/Yanfei';
import Yoimiya from '../components/Characters/Character/Yoimiya/Yoimiya';
import Zhongli from '../components/Characters/Character/Zhongli/Zhongli';

const characters = () => {
	// const { url, path } = useRouteMatch;
	// console.log('url', url);
	return (
		<Router>
			<Switch>
				<Route exact path={'/characters/'} component={Characters} />
				<Route exact path={'/characters/Albedo'} component={Albedo} />
				<Route exact path='/characters/Aloy' component={Aloy} />
				<Route exact path={'/characters/Amber'} component={Amber} />
				<Route
					exact
					path={'/characters/Arataki_Itto'}
					component={AratakiItto}
				/>
				<Route exact path='/characters/Barbara' component={Barbara} />
				<Route exact path='/characters/Beidou' component={Beidou} />
				<Route exact path='/characters/Bennett' component={Bennett} />
				<Route exact path='/characters/Chongyun' component={Chongyun} />
				<Route exact path='/characters/Diluc' component={Diluc} />
				<Route exact path='/characters/Diona' component={Diona} />
				<Route exact path='/characters/Eula' component={Eula} />
				<Route exact path='/characters/Fischl' component={Fischl} />
				<Route exact path='/characters/Ganyu' component={Ganyu} />
				<Route exact path='/characters/Hu_Tao' component={HuTao} />
				<Route exact path='/characters/Jean' component={Jean} />
				<Route
					exact
					path='/characters/Kaedehara_Kazuha'
					component={KaedeharaKazuha}
				/>
				<Route exact path='/characters/Kaeya' component={Kaeya} />
				<Route
					exact
					path='/characters/Kamisato_Ayaka'
					component={KamisatoAyaka}
				/>
				<Route exact path='/characters/Keqing' component={Keqing} />
				<Route exact path='/characters/Klee' component={Klee} />
				<Route exact path='/characters/Kujou_Sara' component={KujouSara} />
				<Route exact path='/characters/Lisa' component={Lisa} />
				<Route exact path='/characters/Mona' component={Mona} />
				<Route exact path='/characters/Ningguang' component={Ningguang} />
				<Route exact path='/characters/Noelle' component={Noelle} />
				<Route exact path='/characters/Qiqi' component={Qiqi} />
				<Route
					exact
					path='/characters/Raiden_Shogun'
					component={RaidenShogun}
				/>
				<Route exact path='/characters/Razor' component={Razor} />
				<Route exact path='/characters/Rosaria' component={Rosaria} />
				<Route
					exact
					path='/characters/Sangonomiya_Kokomi'
					component={SangonomiyaKokomi}
				/>
				<Route exact path='/characters/Sayu' component={Sayu} />
				<Route exact path='/characters/Sucrose' component={Sucrose} />
				<Route exact path='/characters/Tartaglia' component={Tartaglia} />
				<Route
					exact
					path='/characters/Traveler_Anemo'
					component={TravelerAnemo}
				/>
				<Route exact path='/characters/Traveler_Geo' component={TravelerGeo} />
				<Route
					exact
					path='/characters/Traveler_Electro'
					component={TravelerElectro}
				/>
				<Route exact path='/characters/Venti' component={Venti} />
				<Route exact path='/characters/Xiangling' component={Xiangling} />
				<Route exact path='/characters/Xiao' component={Xiao} />
				<Route exact path='/characters/Xingqiu' component={Xingqiu} />
				<Route exact path='/characters/Xinyan' component={Xinyan} />
				<Route exact path='/characters/Yanfei' component={Yanfei} />
				<Route exact path='/characters/Yoimiya' component={Yoimiya} />
				<Route exact path='/characters/Zhongli' component={Zhongli} />
			</Switch>
		</Router>
	);
};

export default characters;

// display all characters
