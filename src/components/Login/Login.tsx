import React from "react"

import { useForm } from "react-hook-form";
import { User } from '../interfaces';

import { authService } from "../../services/authService";

const Login: React.FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

    const loginUser = (data: User) => {
        authService.login(data)
            .then(response => {
                console.log(response);
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
                    <input type="submit" value="Register" />
                </article>
            </form>
        </section>
    )
}

export default Login;