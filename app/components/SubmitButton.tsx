import { useFormStatus } from "react-dom"


export default function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" className="btn btn-wide btn-primary" aria-disabled={pending}>
        Submit
      </button>
    )
  }