import React from 'react'

const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={"border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-300 " + className}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
