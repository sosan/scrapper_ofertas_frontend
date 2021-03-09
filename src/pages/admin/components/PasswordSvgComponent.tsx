import * as React from "react"

function PasswordSvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill="#FFFFFF" d="M19 21H5V9h14v12zM6 20h12V10H6v10z" />
      <path
        fill="#FFFFFF"
        d="M16.5 10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5 5.1 8.5 7v3h-1V7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v3zM12 16.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0-2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"
      />
    </svg>
  )
}

export default PasswordSvgComponent
