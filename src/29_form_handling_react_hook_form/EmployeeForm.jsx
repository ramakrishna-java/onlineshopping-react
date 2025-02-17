import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

//validation details of the form
const schema=yup.object({
    empname: yup.string().required('Name is required').min(3, 'name must be 3 chars in length'),
    empage: yup.number().positive().integer().required('Age is required').max(100, 'Age cannot be more than 100'),
    empemail: yup.string().email('NOt a valid email').required('Email is required')
}).required();

//presentation component -pure UI
export default function EmployeeForm(props) {
    const {register, setError, reset, handleSubmit, formState :{errors,isValid}} =
    useForm({
        defaultValues:{
            empname:props.name || "",
            empage:props.age || 1,
            empemail:props.email|| ""
        },
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    const onSubmit =(data)=>{
        console.log("onSubmit form EMployee Form component")
        console.log(data)
        setTimeout(()=>{
            if(data.empname === 'God'){
                setError("empname", {
                    type:"manual",
                    message:"you canot add god as employee"
                })
            }else{
                alert(JSON.stringify(data))
                reset();
            }
        }, 2000)
    }

    return (<>
    <h1>Employee Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name: 
                <input type="text" placeholder="Enter name" {...register("empname")}/>
            </label>
            <p style={{color:'red'}}>{errors.empname?.message}</p>

        </div>
        <div>
            <label>Age:
                <input type="number" placeholder="Enter age" {...register("empage")}/>
            </label>
            <p style={{color:'red'}}>{errors.empage?.message}</p>
        </div>
        <div>
            <label>email:
            <input type="email" placeholder="Enter email" {...register("empemail")} />
            </label>
            <p style={{color:'red'}}>{errors.empemail?.message}</p>
            </div>
            <input type="submit" disabled={!isValid}/> 
    </form>
    </>)
}