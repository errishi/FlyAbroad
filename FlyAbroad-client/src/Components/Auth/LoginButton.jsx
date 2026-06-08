import React from 'react'

const LoginButton = ({name}) => {
  return (
    <div className='w-full rounded-full cursor-pointer bg-linear-to-r from-[#0B9AA7] via-[#22A6A5] to-[#FD8A1F] p-px shadow-[0_14px_30px_rgba(11,154,167,0.22)] transition-transform hover:scale-[1.01]'>
      <div className='flex h-12 items-center justify-center rounded-full bg-linear-to-r from-[#0E9BA7] via-[#18A7A7] to-[#FD8A1F] text-sm font-semibold text-white'>
        {name}
      </div>
    </div>
  )
}

export default LoginButton;