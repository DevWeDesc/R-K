import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TabGenericInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className="min-w-4 min-h-4 accent-red-700 appearance-none checked:appearance-auto border border-red-700 rounded-sm bg-transparent"
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
