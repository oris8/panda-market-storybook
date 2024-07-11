import Input from "@/components/Input/Input";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "@storybook/preview-api";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    value: { control: "text" },
    placeholder: { control: "text" },
    autoComplete: {
      control: { type: "boolean" },
    },
    error: { control: { type: "boolean" } },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {
  placeholder: "기본 인풋입니다",
};

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
  variant: "primary",
  placeholder: "primary 인풋입니다",
};

export const PrimaryErrorInput = Template.bind({});
PrimaryErrorInput.args = {
  variant: "primary",
  placeholder: "primary 인풋입니다 error !!",
  error: true,
};

export const TextArea: StoryFn<typeof Input.TextArea> = (args) => (
  <Input.TextArea {...args} />
);
TextArea.args = {
  placeholder:
    "textarea 인풋입니다 varian prop으로 기본스타일(primary) 적용가능",
};

export const Dropdown: StoryFn<typeof Input.Dropdown> = (args) => {
  const [selected, setSelected] = useState<
    { label: string; value: string } | undefined
  >(undefined);
  return (
    <Input.Dropdown {...args} selected={selected} onChange={setSelected} />
  );
};
Dropdown.args = {
  placeholder: "지역을 선택해주세요",
  required: true,
  options: [
    { label: "서울특별시", value: "Seoul" },
    { label: "부산광역시", value: "Busan" },
    { label: "인천광역시", value: "Incheon" },
    { label: "대구광역시", value: "Daegu" },
    { label: "대전광역시", value: "Daejeon" },
    { label: "광주광역시", value: "Gwangju" },
    { label: "울산광역시", value: "Ulsan" },
    { label: "세종특별자치시", value: "Sejong" },
    { label: "경기도", value: "Gyeonggi" },
    { label: "경상남도", value: "Gyeongsangnam" },
    { label: "경상북도", value: "Gyeongsangbuk" },
    { label: "충청남도", value: "Chungcheongnam" },
    { label: "충청북도", value: "Chungcheongbuk" },
    { label: "전라남도", value: "Jeollanam" },
    { label: "전라북도", value: "Jeollabuk" },
    { label: "강원도", value: "Gangwon" },
    { label: "제주도", value: "Jeju" },
  ],
};
