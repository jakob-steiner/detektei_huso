import classNames from "classnames";
import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "white" | "primary";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  size = "sm",
  color = "white",
  className,
}) => {
  return (
    <button
      className={classNames(
        "rounded-2xl border-2 py-4 px-9 uppercase font-bold hover:scale-95 transition-all duration-300",
        {
          "text-white border-white border-opacity-40": color === "white",
          "border-primary text-primary": color === "primary",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
