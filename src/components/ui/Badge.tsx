import React, { ReactElement, SVGProps } from "react";

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  bgClassName?: string;
}

const Badge: React.FC<BadgeProps> = ({
  icon,
  text,
  className = "",
  iconClassName = "",
  textClassName = "",
  bgClassName = "bg-gray-100",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 ${bgClassName} ${className}`}
    >
      {icon && React.isValidElement(icon)
        ? React.cloneElement(icon as ReactElement<SVGProps<SVGSVGElement>>, {
            className: `${
              (icon as ReactElement<SVGProps<SVGSVGElement>>).props.className ?? ""
            } w-4 h-4 ${iconClassName}`.trim(),
          })
        : icon}
      <span className={`text-sm font-medium ${textClassName}`}>{text}</span>
    </div>
  );
};

export default Badge;
