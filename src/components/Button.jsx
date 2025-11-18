import React from "react";
import PropTypes from "prop-types";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[30px] border px-4 " +
  "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const themeClass = {
  primary:
    "bg-[#2563EB] text-white ",
  secondary:
    "bg-white text-[#0257FF] border-black hover:brightness-110 focus-visible:ring-[#003d29]",
  ghost:
    "bg-transparent text-[#414141CC] border-transparent hover:bg-gray-100 focus-visible:ring-gray-300",
};

const Button = ({
  theme = "primary",
  icon,
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const cls = [base, themeClass[theme], fullWidth && "w-full", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={cls} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
