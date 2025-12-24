import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

const contactData = () => {
  firstName: "";
  lastName: "";
  jobTitle: "";
  institution: "";
  emailAddress: "";
  message: "";
}

const ForInstitute = () => {
  const [formSubmit, setFormSubmit] = useState(contactData);

  return (
    <div className='lg:px-15 md:px-10 px-7 py-10 lg:w-150 md:w-130 m-auto'>
      <form onClick={(e)=>e.preventDefault()} className='flex flex-col gap-5 text-black'>
        <TextField id="outlined-basic" label="First Name*" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name*" variant="outlined" />
        <TextField id="outlined-basic" label="Job Title*" variant="outlined" />
        <TextField id="outlined-basic" label="Institution*" variant="outlined" />
        <TextField id="outlined-basic" label="Email Address*" variant="outlined" />
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Enter your message"
          style={{ width: '100%', height: 100, border: '1px solid gray', borderRadius: 5, padding: 10 }}
        />
        <div className='flex gap-8'>
          <div>
            <PrimaryButton name={"Submit"} />
          </div>
          <div>
            <SecondaryButton name={"Reset"} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForInstitute;