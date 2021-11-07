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
			</Switch>
		</Router>
	);
};

export default characters;

// display all characters
