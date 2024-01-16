import { useFormStatus } from "react-dom"


export default function SmallSubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" className="btn btn-circle btn-outline" aria-disabled={pending}></button>
    )
  }