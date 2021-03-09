import * as React from "react"

function EmailSvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="white" d="M17.5 24.64c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4H17.5zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c.8.6 2 .6 2.8 0l28.7-21v34.1H19.9v-34.1z" />
      <path fill="none" d="M0 0h100v100H0z" />
    </svg>
  )
}

export default EmailSvgComponent
