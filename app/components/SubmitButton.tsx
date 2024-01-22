import { useFormStatus } from "react-dom"


export default function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" className="btn btn-wide btn-secondary dark:bg-stone-400" aria-disabled={pending}>
        Submit
      </button>
    )
  }