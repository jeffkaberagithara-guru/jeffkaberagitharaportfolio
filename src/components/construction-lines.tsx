type ConstructionLinesProps = {
  variant?: "hero" | "section" | "footer";
  className?: string;
};

export function ConstructionLines({
  variant = "section",
  className,
}: ConstructionLinesProps) {
  if (variant === "hero") {
    return (
      <svg
        aria-hidden="true"
        className={["construction-lines", className].filter(Boolean).join(" ")}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 760"
      >
        <path
          d="M0 96h1440M96 0v760M1344 0v760"
          stroke="currentColor"
          strokeOpacity="0.42"
        />
        <path d="M0 660h1440" stroke="currentColor" strokeOpacity="0.3" />
        <path
          d="M96 96h96M96 96v96M1344 96h-96M1344 96v96"
          stroke="currentColor"
          strokeOpacity="0.75"
        />
        <path
          d="M96 660h64M1344 660h-64"
          stroke="currentColor"
          strokeOpacity="0.5"
        />
        <circle cx="96" cy="96" fill="currentColor" r="2.5" />
        <circle cx="1344" cy="660" fill="currentColor" r="2.5" />
      </svg>
    );
  }

  if (variant === "footer") {
    return (
      <svg
        aria-hidden="true"
        className={["construction-lines", className].filter(Boolean).join(" ")}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 300"
      >
        <path
          d="M0 1h1440M120 0v300M1320 0v300"
          stroke="currentColor"
          strokeOpacity="0.35"
        />
        <path
          d="M120 60h80M1320 60h-80M120 240h120M1320 240h-120"
          stroke="currentColor"
          strokeOpacity="0.5"
        />
        <circle cx="120" cy="60" fill="currentColor" r="2" />
        <circle cx="1320" cy="240" fill="currentColor" r="2" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={["construction-lines", className].filter(Boolean).join(" ")}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 500"
    >
      <path
        d="M0 40h1200M40 0v500M1160 0v500"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <path d="M0 460h1200" stroke="currentColor" strokeOpacity="0.22" />
      <path
        d="M40 40h56M40 40v56M1160 40h-56M1160 40v56"
        stroke="currentColor"
        strokeOpacity="0.55"
      />
      <circle cx="40" cy="40" fill="currentColor" r="2" />
    </svg>
  );
}
