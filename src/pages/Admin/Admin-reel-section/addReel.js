import React,{useState} from 'react'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import *as yup from 'yup'
import axios from 'axios'
import Adminsidebar from '../adminsidebar' 
import { ToastContainer, toast } from "react-toastify";

const AddReel = () => {

     const [video,setvideo]=useState()
    const Viseosetter=(e)=>{
        setvideo(e.target.files[0])
    }
    const defaultValue = {
         description:"",
   
       };
       const validationSchema = yup.object().shape({
        description: yup.string().required("Please enter description"),
           
       });
       const handleSubmit=async(value)=>{
        let allReel={...value,video:video}
                console.log(allReel);
try {
    let res=await axios.post('https://app.fuelfree.in/reels/add',allReel,{
        headers:{
            "Content-type":"multipart/form-data"
        }

    })
    let result =await res.data
    if(result.success==='success'){
        toast.success(result.message)
    }else{
        toast.error('Something is wrong')
    }
} catch (error) {
    toast.error('Something is wrong')
}
               
       }
  return (
    <>
      <>
        <ToastContainer/>
        <Adminsidebar />
            <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">

                                <Form>
                                    <h1 className='mb-3'>Add Reel</h1>
                                    <h5 className='mb-3'>welcome</h5>
                                    <div className="mb-4">
                                        <Field type="text" name='description' className="input form-control" placeholder='description' />
                                        <p className="text-danger">
                                            <ErrorMessage name="offerText" />
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <input type="file" accept="video/mp4,video/mkv, video/x-m4v,video/*" name='video' className="input form-control" placeholder='video'  onChange={Viseosetter} />
                                        <p className="text-danger">
                                            <ErrorMessage name="video" />
                                        </p>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}    >Submit</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </Formik>
            {/* <Footer /> */}
        </>
    </>
  )
}

export default AddReel
