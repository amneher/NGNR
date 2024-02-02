'use client'

import { useFormStatus } from "react-dom"


export default function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" className="btn btn-wide btn-accent dark:bg-neutral dark:text-neutral-content" aria-disabled={pending}>
        Submit
      </button>
    )
  }