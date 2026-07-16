import { type SubmitEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
	const {
		email,
		formData,
		isValidEmail,
		name,
		onChange,
		password1,
		password2,
		resetForm,
	} = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={onSubmit}>
				<input
					name='name'
					type='text'
					placeholder='Name'
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				<input
					name='email'
					type='text'
					placeholder='Email'
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && <span>Email no válido</span>}
				<input
					name='password1'
					type='password'
					placeholder='Password'
					value={password1}
					onChange={onChange}
				/>
				{password1.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>La contraseña tiene que tener al menos 6 letras</span>
				)}
				<input
					name='password2'
					type='password'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
				/>
				{password2.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{password2.trim().length > 0 && password1 !== password2 && (
					<span>Las contraseñas deben de ser iguales</span>
				)}
				<button type='submit'>Create</button>
				<button type='button' onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	);
};
