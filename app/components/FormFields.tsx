"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TextField = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="input input-bordered input-secondary text-base-content dark:text-neutral-content bg-base-100 dark:bg-neutral w-full max-w-xs md:max-w-2xl my-2"
    />
  );
};

export const FormCheckBox = ({
  label,
  name,
}: {
  label: string;
  name: string;
}) => {
  let value: boolean | undefined = undefined;
  return (
    <div className="form-control">
      <label className="label cursor-pointer block">
        <span className="label-text text-xl text-base-content dark:text-neutral-content mx-2">
          {label}
        </span>
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={() => {
            value = !value;
          }}
          className="checkbox"
        />
      </label>
    </div>
  );
};

export const ResumeIDTag = () => {
  const searchParams = useSearchParams();

  return (
    <input
      type="text"
      name="resumeId"
      value={`${searchParams.get("id")}`}
      className="hidden"
    />
  );
};

export const FormDatePicker = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  const [value, setValue] = useState(new Date());
  return (
    <label className="label block">
      <span className="label-text text-xl text-base-content dark:text-neutral-content mx-2">
        {placeholder}:{" "}
      </span>
      <DatePicker
        name={name}
        placeholderText={placeholder}
        selected={value}
        onChange={(date) => {
          date && setValue(date);
        }}
        className="input input-bordered input-secondary text-neutral dark:text-neutral-content bg-base-100 dark:bg-neutral my-2"
      />
    </label>
  );
};

export const FormTitle = ({title}: {title: string}) => {
  return (
    <h2 className="text-2xl font-semibold my-2">{title}</h2>
  )
}