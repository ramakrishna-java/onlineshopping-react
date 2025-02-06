import React from 'react'
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup'

const EmployeeForm= ({errors, touched, handleSubmit}) => (
    <div> 
        <h1>Employee Form:</h1>
        
        <Form> <div>
            <Field type="text" name ="empName" placeholder="Emp Name"> 
                </Field>
                {touched.empName && errors.empName && <span style={{color:'red'}}>{errors.empName}</span>}
                </div>
                <div><label>
                    <Field type="checkbox" name="manager"></Field>Manager</label></div>
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
    </div>
)

const FormikEmployeeForm =withFormik({
    mapPropsToValues({employeename, bManager}){
        return {
            empName:employeename || '',
            manager:bManager || false
        }
    },
    validationSchema: Yup.object().shape({
        empName: Yup.string().min(3,"name must be 3 char length").required("name is mandatory")
    }),
    handleSubmit(values, {props, setErrors, resetForm}){
        //console.log(values)
        props.onSubmit(values)
  /*  setTimeout(() => {
        if(values.empName =='God') {
            setErrors({empName: 'you cannot add God as an employee'})
        } else {
            resetForm();
            alert(JSON.stringify(values))
        }
        
    }, 2000); */
    
    }
})(EmployeeForm)

export default FormikEmployeeForm