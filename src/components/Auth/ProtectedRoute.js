import { Redirect } from 'react-router-dom';

//? <----- Auth ----->
import { useUserAuth } from '../../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
	const { user } = useUserAuth();

	// user && console.log('User in Private Route: ', user.email, user.uid);
	if (!user) {
		return <Redirect to='/login' />;
	}
	return children;
};

export default ProtectedRoute;
