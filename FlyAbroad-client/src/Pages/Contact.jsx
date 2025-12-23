import ContactHeader from '@/Components/ContactUs/ContactHeader';
import React, { useState } from 'react'
import ForStudent from '../Components/ContactUs/ForStudent';
import ForInstitute from '@/Components/ContactUs/ForInstitute';

const Contact = () => {
  const [data, setData] = useState("");

  const userHandler = (child_data) => {
    setData(child_data);
  }

  return (
    <div className='text-center'>
      <ContactHeader setUser={userHandler} />
      {
        data ? <ForStudent /> : <ForInstitute />
      }
    </div>
  )
}

export default Contact;