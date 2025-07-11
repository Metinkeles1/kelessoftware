import React from "react";

interface SectionHeaderProps {
  title: string;
  titleGradient?: string;
  titleAfterGradient?: string;
  description?: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleGradient,
  titleAfterGradient,
  description,
  className = "",
  id,
}) => (
  <div className={`text-center ${className}`}>
    <h2
      id={id}
      className="mb-6 text-4xl font-bold tracking-tight text-color-text md:text-6xl"
    >
      {title}{" "}
      {titleGradient && (
        <span
          className="bg-clip-text text-transparent"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
          }}
        >
          {titleGradient}
        </span>
      )}
      {titleAfterGradient && ` ${titleAfterGradient}`}
    </h2>
    {description && (
      <p className="mx-auto mb-12 max-w-2xl text-lg text-color-muted">{description}</p>
    )}
  </div>
);

export default SectionHeader;
