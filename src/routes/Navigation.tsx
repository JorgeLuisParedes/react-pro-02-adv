import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Routes,
} from 'react-router-dom';

import {
	FormikAbstractationPage,
	FormikBasicPage,
	FormikBasicYupPage,
	FormikComponentsPage,
	RegisterPage,
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<Router>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink
								to='/register'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-basic'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-yup'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-components'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-abstractation'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Abstractation
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/users'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/formik-basic' element={<FormikBasicPage />} />
					<Route
						path='/formik-yup'
						element={<FormikBasicYupPage />}
					/>
					<Route
						path='/formik-components'
						element={<FormikComponentsPage />}
					/>
					<Route
						path='/formik-abstractation'
						element={<FormikAbstractationPage />}
					/>
					<Route path='/' element={<h1>Home</h1>} />
				</Routes>
			</div>
		</Router>
	);
};
