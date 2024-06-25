import { useFormik } from "formik"
import * as yup from "yup"
import { FileParse } from "../utils/FileParse";

function RegisterPage() {
    // formik 
    const  VALID_TYPE = ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/webp", "image/svg"]
    let KB = 1024;
    let MB = KB * 1024;
    const formik = useFormik({
        initialValues : {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            gender : "",
            birthDate : "",
            image : "",     
        },
        // validacija
        validationSchema : yup.object({
            firstName : yup.string().required('Required'),
            lastName : yup.string().required('Required'),
            email : yup.string().email().matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).required('Required'),
            password: yup.string().required('Required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),
            gender : yup.string().required('You must insert your gender'),
            birthDate : yup.date().required('You must insert your birthdate'),
            image : yup.mixed().required('You must insert your image')
            .test('fileSize', 'File too large', (value) => value.size < MB * 2)
            .test('fileSize', 'Wrong File Type', (value) => VALID_TYPE.includes(value.type))
            

        }),
        // onSubmit
        onSubmit: (values) => {
            console.log(values);
            FileParse(values.image)
                .then((res) => {
                    localStorage.setItem("image", res)
                })
                .catch(err => console.log(err))
            formik.resetForm();
        }
    });
    const showError = (name)  => formik.errors[name] && formik.touched[name] && formik.errors[name]
    
    // firstName
    // lastName
    // email
    // password
    // gender
    // birthDate
    // image
  return (
    <div>
        <h2>Register Form</h2>
        {/* form here*/}
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-[500px] border border-blue-400 p-[15px] rounded-lg mx-auto mt-[100px]">
            <label htmlFor="firstName" className="text-[15px] text-gray-600 mt-3">FirstName <span className="text-[13px] text-red-600">{showError('firstName')}</span></label>
            <input type="text" placeholder="Insert FirstName" id="firstName" name="firstName" className="border border-blue-400 rounded-lg px-[10px] py-[5px]" value={formik.values.firstName} onChange={formik.handleChange}/>
            <label htmlFor="lastName" className="text-[15px] text-gray-600 mt-3">LastName  <span className="text-[13px] text-red-600">{showError('lastName')}</span></label>
            <input type="text" placeholder="Insert LastName" id="lastName" name="lastName" className="border border-blue-400 rounded-lg px-[10px] py-[5px]" value={formik.values.lastName} onChange={formik.handleChange}/>
            <label htmlFor="email" className="text-[15px] text-gray-600 mt-3">Email <span className="text-[13px] text-red-600">{showError('email')}</span></label>
            <input type="text" placeholder="Insert Email" id="email" name="email" className="border border-blue-400 rounded-lg px-[10px] py-[5px]" value={formik.values.email} onChange={formik.handleChange}/>
            <label htmlFor="password" className="text-[15px] text-gray-600 mt-3">Password  <span className="text-[13px] text-red-600">{showError('password')}</span></label>
            <input type="password" placeholder="Insert Password" id="password" name="password" className="border border-blue-400 rounded-lg px-[10px] py-[5px]" value={formik.values.password} onChange={formik.handleChange}/>
            <label htmlFor="gender" className="text-[15px] text-gray-600 mt-3">Gender  <span className="text-[13px] text-red-600">{showError('gender')}</span></label>
            <select id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                <option value="" defaultChecked disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label htmlFor="birthDate" className="text-[15px] text-gray-600 mt-3">BirthDate  <span className="text-[13px] text-red-600">{showError('birthDate')}</span></label>
            <input type="date" id="birthDate" name="birthDate" className="border border-blue-400 rounded-lg px-[10px] py-[5px]" value={formik.values.birthDate} onChange={formik.handleChange}/>
            <label htmlFor="image" className="text-[15px] text-gray-600 mt-3">Image  <span className="text-[13px] text-red-600">{showError('image')}</span></label>
            <input type="file"  id="image" name="image" className="border border-blue-400 rounded-lg px-[10px] py-[5px]" onChange={(e) => formik.setFieldValue("image", e.target.files[0])}/>
            <button type="submit" className="bg-blue-500 text-white rounded-lg px-[10px] py-[5px] mt-5">Register</button>
        </form>
    </div>
  )
}

export default RegisterPage