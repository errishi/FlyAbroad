import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { enquiryApi } from '@/services/enquiryApi';
import { CheckCircle, Loader2 } from 'lucide-react';

const ForInstitute = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track loading

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await enquiryApi.submitInstituteEnquiry(data);
      toast.success(res?.message || "Form submitted successfully!");
      setIsSuccess(true);
      reset(); 
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='lg:px-15 md:px-10 px-7 py-10 lg:w-150 md:w-130 m-auto'>
      {isSuccess ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-gray-100 animate-in fade-in zoom-in duration-300">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900">Request Received!</h2>
          <p className="text-gray-600 mt-2 mb-8">Thank you. We will get back to your institution shortly.</p>
          <SecondaryButton name={"Back to Form"} onClick={() => setIsSuccess(false)} />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 text-black'>
          <h2 className="text-2xl font-bold mb-2">Partner with Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField fullWidth label="First Name*" variant="outlined" {...register("firstName", { required: "first name is required" })} error={!!errors.firstName} helperText={errors.firstName?.message} />
            <TextField fullWidth label="Last Name*" variant="outlined" {...register("lastName", { required: "last name is required" })} error={!!errors.lastName} helperText={errors.lastName?.message} />
          </div>

          <TextField fullWidth label="Country*" variant="outlined" {...register("country", { required: "country is required" })} error={!!errors.country} helperText={errors.country?.message} />
          <TextField fullWidth label="Institution*" variant="outlined" {...register("institution", { required: "institution is required" })} error={!!errors.institution} helperText={errors.institution?.message} />
          <TextField fullWidth label="Email Address*" variant="outlined" {...register("email", { required: "email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} error={!!errors.email} helperText={errors.email?.message} />
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Message *</label>
            <TextareaAutosize
              minRows={4}
              placeholder="Tell us about your institution..."
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#09585e]"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>

          <div className='flex gap-4 mt-2'>
            <PrimaryButton 
              type="submit"
              className={isSubmitting ? "opacity-70 cursor-not-allowed w-100" : "w-100"}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
            </PrimaryButton>
            <SecondaryButton type="button" name={"Reset"} onClick={() => reset()} />
          </div>
        </form>
      )}
    </div>
  );
}

export default ForInstitute;