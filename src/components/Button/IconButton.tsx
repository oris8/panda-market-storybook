import React from "react";
import DeleteIcon from "/public/images/ic_delete.svg";
import DeleteActiveIcon from "/public/images/ic_delete-active.svg";
import HeartIcon from "/public/images/ic_heart.svg";
import HeartActiveIcon from "/public/images/ic_heart-active.svg";

interface BaseIconButtonProps {
  children: React.ReactNode | null;
  className?: string;
  activeClassName?: string;
  icon: React.ReactElement;
  activeIcon?: React.ReactElement;
  isActive: boolean | "hover";
  disabled?: boolean;
  size?: number;
}

const BaseIconButton = ({
  children = null,
  className = "",
  activeClassName = "",
  icon,
  activeIcon,
  isActive,
  disabled = false,
  size = 24,
  ...rest
}: BaseIconButtonProps) => {
  const hoverStyle =
    "[&_.active]:hidden [&_.inactive]:block [&:hover_.active]:block [&:hover_.inactive]:hidden";
  const stateStyle = `${isActive ? `[&_.active]:block [&_.inactive]:hidden ${activeClassName}` : "[&_.inactive]:block [&_.active]:hidden"}`;

  const variantStyle = `custom-button custom-button--icon ${className} ${isActive === "hover" ? hoverStyle : stateStyle} `;

  const ActiveIcon = () => {
    if (!activeIcon) return null;
    return React.cloneElement(activeIcon, {
      className: "active",
      width: size,
      height: size,
    });
  };

  const Icon = () =>
    React.cloneElement(icon, {
      className: "inactive",
      width: size,
      height: size,
    });

  return (
    <button className={variantStyle} type="button" {...rest}>
      <ActiveIcon />
      <Icon />
      {children}
    </button>
  );
};

const DeleteIconButton = (
  props: Omit<BaseIconButtonProps, "activeIcon" | "icon" | "size">
) => (
  <BaseIconButton
    activeIcon={<DeleteActiveIcon />}
    icon={<DeleteIcon />}
    size={24}
    {...props}
  />
);

const LikeIconButton = ({
  className = "",
  isLiked = false,
  likeCount = 0,
  size = 16,
  rest,
}: {
  className?: string;
  isLiked?: boolean;
  likeCount: number;
  size: number;
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <BaseIconButton
      className={`${className}`}
      activeIcon={<HeartActiveIcon />}
      icon={<HeartIcon />}
      children={likeCount}
      isActive={isLiked}
      size={size}
      {...rest}
    />
  );
};

const IconButton = Object.assign(BaseIconButton, {
  Delete: DeleteIconButton,
  Like: LikeIconButton,
});

export default IconButton;
