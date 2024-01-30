"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

export const FormDatePicker = ({name, placeholder}: {name: string, placeholder: string}) => {
    const [value, setValue] = useState(new Date());
    return (
        <DatePicker name={name} placeholderText={placeholder} selected={value} onChange={(date) => {date && setValue(date)}} className="input input-bordered input-secondary text-neutral dark:text-neutral-content bg-base-100 dark:bg-base-300 my-2"/>
    )
}