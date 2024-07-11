import { forwardRef } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import ArrowDownIcon from "/public/images/ic_arrow-down.svg";

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

const DropdownInput = ({
  placeholder = "선택해주세요",
  required,
  options,
  selected,
  onChange,
}: {
  placeholder?: string;
  required?: boolean;
  options: { label: string; value: string }[];
  selected?: { label: string; value: string };
  onChange: (option: { label: string; value: string }) => void;
}) => {
  return (
    <Dropdown className="relative">
      <Dropdown.Button
        className={`custom-input--primary w-full flex items-center`}
        activeClassName="[&_svg]:transition-transform [&_svg]:rotate-180">
        <p className={`${!selected && "text-cool-gray-400"}`}>
          {selected?.label || placeholder}
        </p>
        <ArrowDownIcon className="inline-block ml-auto" />
      </Dropdown.Button>

      <Dropdown.Content className="overflow-y-scroll w-full max-h-300 mt-8 bg-white border border-gray-200 rounded-12 shadow-sm overflow-hidden">
        {options.map((option) => (
          <Dropdown.Item
            className="custom-input--primary flex items-center border-none active:shadow-none focus:shadow-none hover:opacity-50 w-full"
            key={option.value}
            onClick={() => onChange(option)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
};

const Input = Object.assign(BaseInput, {
  TextArea: BaseTextArea,
  Dropdown: DropdownInput,
});

export default Input;
