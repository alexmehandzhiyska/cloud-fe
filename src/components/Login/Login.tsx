import React from "react"

import { useForm } from "react-hook-form";
import { User } from '../interfaces';

import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
    const navigate = useNavigate();

    const loginUser = (data: User) => {
        authService.login(data)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    } 

    return (
        <section className="flex flex-col items-center">
            <form onSubmit={handleSubmit(loginUser)}>
                <article>
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register('username', { required: { value: true, message: 'Username is required!' }})} name="username" id="username" />
                </article>

                <article>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register('password', { required: { value: true, message: 'Password is required!' }})} name="password" id="password" />
                </article>

                <article>
                    <input type="submit" value="Login" />
                </article>
            </form>
        </section>
    )
}

export default Login;