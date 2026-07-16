import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstractationPage = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>

			<Formik
				initialValues={{
					email: '',
					firstName: '',
					jobType: '',
					lastName: '',
					terms: false,
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Debe de tener 15 caracteres o menos')
						.required('Requerido'),
					lastName: Yup.string()
						.max(15, 'Debe de tener 10 caracteres o menos')
						.required('Requerido'),
					email: Yup.string()
						.email('El correo no tiene un formato válido')
						.required('Requerido'),
					terms: Yup.boolean().oneOf(
						[true],
						'Debe de aceptar las condiciones',
					),
					jobType: Yup.string()
						.notOneOf(['it-jr'], 'Est opción no es permitida')
						.required('Requerido'),
				})}>
				{() => (
					<Form>
						<MyTextInput
							label='First Name'
							name='firstName'
							placeholder='Jorge'
						/>

						<MyTextInput
							label='Last Name'
							name='lastName'
							placeholder='Paredes'
						/>

						<MyTextInput
							label='Email Address'
							name='email'
							placeholder='jorge@google.com'
							type='email'
						/>

						<MySelect label='Job Type' name='jobType' as='select'>
							<option value=''>Pick something</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-jr'>IT Junior</option>
						</MySelect>

						<MyCheckbox label='Terms and conditions' name='terms' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
