import ContactFormAction from "@/app/actions/ContactFormAction";
import SubmitButton from "@/app/components/SubmitButton";


export default async function ContactForm() {
    return (
        <form role="form" action={ContactFormAction} className="max-w-md bg-base-100 dark:bg-base-300">
            <div className="grid grid-cols-1 gap-2">
                <label className="block">
                    <span className="text-base-content dark:text-neutral-content">Full Name</span>
                    <input type="text" name="name" className="mt-1 block rounded-md w-full bg-base-100 dark:bg-base-200" />
                </label>
                <label className="block">
                    <span className="text-base-content dark:text-neutral-content">Email</span>
                    <input type="email" name="email" className="mt-1 block rounded-md w-full bg-base-100 dark:bg-base-200" />
                </label>
                <label className="block">
                    <span className="text-base-content dark:text-neutral-content">Message</span>
                    <textarea name="message" className="mt-1 block rounded-md w-full bg-base-100 dark:bg-base-200" rows={3} />
                </label>
                <label className="block">
                    <SubmitButton />
                </label>
            </div>
        </form>
    )
}