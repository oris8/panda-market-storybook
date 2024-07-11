import Input from "@/components/Input/Input";
import React from "react";

const FormGroupWrapper = ({
  className = "",
  children,
  required = false,
}: {
  className?: string;
  children: React.ReactNode;
  required?: boolean;
}) => (
  <div className={`relative flex flex-col gap-8 ${className}`}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return null;

      if (child.type === Label || child.type === Input) {
        return React.cloneElement(child, {
          required: required,
        } as LabelProps);
      }

      if (child.type === InputWrapper) {
        return React.cloneElement(child, {
          children: React.Children.map(child.props.children, (innerChild) => {
            if (React.isValidElement(innerChild) && innerChild.type === Input) {
              return React.cloneElement(innerChild, {
                required: required,
              } as LabelProps);
            }
            return innerChild;
          }),
        } as LabelProps);
      }

      return child;
    })}
  </div>
);

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = ({
  className = "",
  children,
  required = false,
  ...rest
}: LabelProps) => (
  <label className={`${className}`} {...rest}>
    {children}
    {required && <span className="ml-4">*</span>}
  </label>
);

const INPUT_VARIANT = {
  primary: "custom-input--primary",
  secondary: "custom-input--secondary",
};

const InputWrapper = ({
  className = "",
  children,
  variant,
  error = false,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  error?: boolean;
}) => {
  const dynamicStyles = `${error ? "custom-input--error" : ""} ${variant ? INPUT_VARIANT[variant] : ""}`;
  return (
    <div className={`relative flex-center ${dynamicStyles} ${className}`}>
      {children}
    </div>
  );
};

const ErrorMessage = ({
  className = "",
  errorMsg,
}: {
  className?: string;
  errorMsg: string | null;
}) => {
  if (!errorMsg) return null;
  return <p className={`${className}`}>{errorMsg}</p>;
};

const FormGroup = Object.assign(FormGroupWrapper, {
  Label: Label,
  InputWrapper: InputWrapper,
  InputField: Input,
  ErrorMessage: ErrorMessage,
});

export default FormGroup;
