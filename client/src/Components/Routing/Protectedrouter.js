import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext } from '../../context/authContext'
import Spinner from 'react-bootstrap/Spinner'

import  Navbar from '../View/Navbar'

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
		
	return (
		<Route
			{...rest}
			render={(props )=>{
				if(isAuthenticated){
					console.log(isAuthenticated)
					return (						<>
						<Navbar/>
						<Component {...rest} {...props} />
					</>)

					}else{
						<Redirect to='/' />
					}
		
					
					
			
			}
			}
				
				
		/>
	)
}

export default ProtectedRoute