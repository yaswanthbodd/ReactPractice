import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

export const Form=()=>{
    const scheme=yup.object().shape({
        fullName: yup.string().required(),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(17).required(),
        password:yup.string().min(5).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],"password don't Match")
    })
    const {register,handleSubmit}=useForm({
        resolver:yupResolver(scheme)
    });
    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter Name..." {...register("fullName")}/>
        <input type="email" placeholder="Enter email..." {...register("email")}/>
        <input type="number" placeholder="Enter age.." {...register("age")}/>
        <input type="password" placeholder="Enter password" {...register("password")}/>
        <input type="password" placeholder="Re-Enter Password" {...register("confirmPassword")}/>
        <input type="submit" />
       </form>
    )
}