import Link from "next/link";

const BUTTON_VARIANTS = {
  primary: {
    solid: "custom-button--primary",
    outline: "custom-button--primary-outline",
  },
  secondary: {
    solid: "custom-button--secondary",
    outline: "custom-button--secondary-outline",
  },
};

const BUTTON_SIZE = {
  sm: "custom-button--sm",
  md: "custom-button--md",
  lg: "custom-button--lg",
};

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  outline?: boolean;
  style?: React.CSSProperties;
}

function BaseButton({
  className = "",
  children,
  size = "md",
  variant,
  outline = false,
  style = {},
  ...rest
}: BaseButtonProps) {
  const variantStyle = `custom-button ${BUTTON_SIZE[size]} ${variant ? BUTTON_VARIANTS[variant][outline ? "outline" : "solid"] : ""}`;

  return (
    <button className={`${variantStyle} ${className}`} style={style} {...rest}>
      {children}
    </button>
  );
}

const PrimaryButton = (props: Omit<BaseButtonProps, "variant">) => (
  <BaseButton variant="primary" {...props} />
);

const PrimaryOutlineButton = (
  props: Omit<BaseButtonProps, "variant" | "outline">
) => <BaseButton variant="primary" outline={true} {...props} />;

const SecondaryButton = (props: Omit<BaseButtonProps, "variant">) => (
  <BaseButton variant="secondary" {...props} />
);

const SecondaryOutlineButton = (
  props: Omit<BaseButtonProps, "variant" | "outline">
) => <BaseButton variant="secondary" outline={true} {...props} />;

export const Button = Object.assign(BaseButton, {
  Primary: PrimaryButton,
  PrimaryOutline: PrimaryOutlineButton,
  Secondary: SecondaryButton,
  SecondaryOutline: SecondaryOutlineButton,
});

type BaseLinkButtonProps = Omit<
  BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>,
  ""
>;

function BaseLinkButton({
  className = "",
  children,
  size = "md",
  variant,
  outline = false,
  style = {},
  href = "",
  ...rest
}: BaseLinkButtonProps) {
  const variantStyle = `custom-button ${BUTTON_SIZE[size]} ${variant ? BUTTON_VARIANTS[variant][outline ? "outline" : "solid"] : ""}`;

  return (
    <Link
      className={`${variantStyle} ${className}`}
      style={style}
      href={href}
      {...rest}>
      {children}
    </Link>
  );
}

const PrimaryLinkButton = (props: Omit<BaseLinkButtonProps, "variant">) => (
  <BaseLinkButton variant="primary" {...props} />
);

const PrimaryOutlineLinkButton = (
  props: Omit<BaseLinkButtonProps, "variant" | "outline">
) => <BaseLinkButton variant="primary" outline={true} {...props} />;

const SecondaryLinkButton = (props: Omit<BaseLinkButtonProps, "variant">) => (
  <BaseLinkButton variant="secondary" {...props} />
);

const SecondaryOutlineLinkButton = (
  props: Omit<BaseLinkButtonProps, "variant" | "outline">
) => <BaseLinkButton variant="secondary" outline={true} {...props} />;

export const LinkButton = Object.assign(BaseLinkButton, {
  Primary: PrimaryLinkButton,
  PrimaryOutline: PrimaryOutlineLinkButton,
  Secondary: SecondaryLinkButton,
  SecondaryOutline: SecondaryOutlineLinkButton,
});
