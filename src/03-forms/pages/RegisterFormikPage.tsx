import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(3, 'Debe de tener mínimo 3 caracteres')
						.max(15, 'Debe de tener máximo de 15 caracteres')
						.required('Este campo es necesario'),
					email: Yup.string()
						.email('El correo no tiene un formato válido')
						.required('Este campo es necesario'),
					password1: Yup.string()
						.min(6, 'Debe de tener mínimo 6 caracteres o más')
						.required('Este campo es necesario'),
					password2: Yup.string()
						.oneOf(
							[Yup.ref('password1')],
							'Las contraseñas deben coincidir',
						)
						.required('Este campo es necesario'),
				})}>
				{({ handleReset }) => (
					<Form>
						<MyTextInput
							label='Name'
							name='name'
							placeholder='Name'
						/>

						<MyTextInput
							label='Email'
							name='email'
							type='email'
							placeholder='Email'
						/>

						<MyTextInput
							label='Password'
							name='password1'
							type='password'
							placeholder='Password'
						/>

						<MyTextInput
							label='Password'
							name='password2'
							type='password'
							placeholder='Repeat Password'
						/>

						<button type='submit'>Create</button>
						<button type='button' onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
