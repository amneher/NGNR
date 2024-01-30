"use client";

import { useSearchParams } from "next/navigation";

export const ResumeIDTag = () => {
    const searchParams = useSearchParams();
    
    return (
        <input type="text" name="resumeId" value={`${searchParams.get("id")}`} className="hidden" />
    )
}