import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TabGenericInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className="size-4 accent-red-700 appearance-none checked:appearance-auto border border-red-700 rounded-sm bg-white"
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
