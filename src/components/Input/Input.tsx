import { forwardRef } from "react";

interface BaseProps {
  className?: string;
  variant?: "primary" | "secondary";
  error?: boolean;
}

interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseProps {}

interface BaseTextAreaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseProps {}

const INPUT_VARIANT = {
  primary: "custom-input--primary",
  secondary: "custom-input--secondary",
};

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className = "", variant, error = false, ...rest }, ref) => {
    const dynamicStyles = `${error ? "custom-input--error" : ""} ${variant ? INPUT_VARIANT[variant] : ""}`;
    return (
      <input
        className={`custom-input ${dynamicStyles} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);
BaseInput.displayName = "BaseInput";

const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaInputProps>(
  ({ className = "", variant, error = false, ...rest }, ref) => {
    const dynamicStyles = `${error ? "custom-input--error" : ""} ${variant ? INPUT_VARIANT[variant] : ""}`;
    return (
      <textarea
        className={`custom-input ${dynamicStyles} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);
BaseTextArea.displayName = "BaseTextArea";

const Input = Object.assign(BaseInput, {
  TextArea: BaseTextArea,
});

export default Input;
