import React from "react"

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { User } from '../interfaces';

import { authService } from "../../services/authService";

const Register: React.FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
    const navigate = useNavigate();

    const registerUser = (data: User) => {
        authService.register(data)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    } 

    return (
        <section className="flex flex-col items-center">
            <form onSubmit={handleSubmit(registerUser)}>
                <article>
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register('username', { required: { value: true, message: 'Username is required!' }})} name="username" id="username" />
                </article>

                <article>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" {...register('first_name')} name="first_name" id="first_name" />
                </article>

                <article>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" {...register('last_name')} name="last_name" id="last_name" />
                </article>

                <article>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register('email', { required: { value: true, message: 'Email is required!' }})} name="email" id="email" />
                </article>

                <article>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register('password', { required: { value: true, message: 'Password is required!' }})} name="password" id="password" />
                </article>

                <article>
                    <input type="submit" value="Register" />
                </article>
            </form>
        </section>
    )
}

export default Register;