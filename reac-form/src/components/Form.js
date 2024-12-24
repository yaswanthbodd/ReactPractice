import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'

export const Form=()=>{
const scheme=yup.object().shape({
        fullName: yup.string().required("This is required Field"),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(5).required(),
        password:yup.string().min(4).max(20).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"password Don't Match").required(),
    })

    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver: yupResolver(scheme),
    });
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name.." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age.." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password.." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="confirm password.." {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" /> 
        </form>
    );
};