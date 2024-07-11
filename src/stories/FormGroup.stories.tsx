import FormGroup from "@/components/FormGroup/FormGroup";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "@storybook/preview-api";

export default {
  title: "Components/FormGroup",
  component: FormGroup,
  argTypes: {
    label: { control: "text" },
    required: { toggle: "boolean" },
    errorMsg: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof FormGroup> = (args) => <FormGroup {...args} />;

const FormGroupBasic: StoryFn = (args) => (
  <FormGroup>
    <FormGroup.Label className="font-bold text-18">
      {args.label}
    </FormGroup.Label>
    <FormGroup.InputField variant="primary" error={!!args.errorMsg} />
    <FormGroup.ErrorMessage
      className="text-12 text-error"
      errorMsg={args.errorMsg || null}
    />
  </FormGroup>
);

const FormGroupWithWrapper: StoryFn = (args) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormGroup>
      <FormGroup.Label className="font-bold text-18">
        {args.label}
      </FormGroup.Label>
      <FormGroup.InputWrapper className="w-200" variant="primary" error={false}>
        <FormGroup.InputField type={showPassword ? "text" : "password"} />
        <button className="ml-8" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "🙈" : "👀"}
        </button>
      </FormGroup.InputWrapper>
      <FormGroup.ErrorMessage
        className="text-36 "
        errorMsg={args.errorMsg || null}
      />
    </FormGroup>
  );
};

const FormGroupWithRequired: StoryFn = (args) => {
  return (
    <FormGroup required={args.required}>
      <FormGroup.Label className="font-bold text-18">
        {args.label}
      </FormGroup.Label>
      <FormGroup.InputWrapper className="w-500" variant="primary">
        <FormGroup.InputField />
      </FormGroup.InputWrapper>
      <FormGroup.ErrorMessage
        className="text-12"
        errorMsg={args.errorMsg || null}
      />
    </FormGroup>
  );
};

export const Basic = FormGroupBasic.bind({});
Basic.args = {
  label: "라벨",
  errorMsg: "에러메세지",
};

export const WithWrapper = FormGroupWithWrapper.bind({});
WithWrapper.args = {
  label: "Password",
  errorMsg: "전부 커스텀 가능!!!",
};

export const WithRequired = FormGroupWithRequired.bind({});
WithRequired.args = {
  label: "WithRequired",
  required: true,
  errorMsg:
    "가장 위 Wrapper에 Required속성을 주면 이렇게 내부도 자동으로 required가 됩니다",
};
