import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	path,
} from 'react-router-dom';

import Characters from '../components/Characters/Characters';
import Albedo from '../components/Characters/Character/Albedo/Albedo';
import Aloy from '../components/Characters/Character/Aloy/Aloy';
import Amber from '../components/Characters/Character/Amber/Amber';
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
import KamisatoAyaka from '../components/Characters/Character/Kamisato Ayaka/KamisatoAyaka';
import Keqing from '../components/Characters/Character/Keqing/Keqing';
import Klee from '../components/Characters/Character/Klee/Klee';
import KujouSara from '../components/Characters/Character/Kujou Sara/KujouSara';
import Lisa from '../components/Characters/Character/Lisa/Lisa';
import Mona from '../components/Characters/Character/Mona/Mona';
import Ningguang from '../components/Characters/Character/Ningguang/Ningguang';

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
			</Switch>
		</Router>
	);
};

export default characters;

// display all characters
