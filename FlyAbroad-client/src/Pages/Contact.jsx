import ContactHeader from '@/Components/ContactUs/ContactHeader';
import FAQ from '@/Components/ContactUs/FAQ';
import GetInTouch from '@/Components/ContactUs/GetInTouch';
import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>
      <ContactHeader />
      <FAQ />
      <GetInTouch />
    </div>
  )
}

export default Contact;