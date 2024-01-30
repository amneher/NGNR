"use client";

export const FormCheckBox = ({label, name}: {label: string, name: string}) => {
    let value: boolean | undefined = undefined;
    return (
        <div className="form-control">
            <label className="label cursor-pointer block">
                <span className="label-text text-xl text-base-content dark:text-neutral-content mx-2">{label}</span> 
                <input type="checkbox" name={name} checked={value} onChange={() => {value = !value}} className="checkbox" />
            </label>
        </div>
    )
}