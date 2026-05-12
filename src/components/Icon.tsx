export type IconName =
  | "commission"
  | "trade"
  | "network"
  | "insight"
  | "price"
  | "procure"
  | "bulk"
  | "logistics"
  | "mandi"
  | "leaf"
  | "shield"
  | "users"
  | "grain";

type IconProps = {
  name: IconName;
  className?: string;
};

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  switch (name) {
    case "commission":
      return (
        <svg className={className} {...baseProps}>
          <path d="M5 19V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12" />
          <path d="M8 9h8" />
          <path d="M8 13h4" />
          <path d="M6 19h12" />
          <path d="M15 13l2 2 3-4" />
        </svg>
      );
    case "trade":
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 7h11" />
          <path d="M12 4l3 3-3 3" />
          <path d="M20 17H9" />
          <path d="M12 14l-3 3 3 3" />
        </svg>
      );
    case "network":
      return (
        <svg className={className} {...baseProps}>
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 8.5l3 7" />
          <path d="M16 8.5l-3 7" />
          <path d="M8 7h8" />
        </svg>
      );
    case "insight":
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 18V6" />
          <path d="M4 18h16" />
          <path d="M8 15l3-4 3 2 4-6" />
          <path d="M18 7h-4" />
          <path d="M18 7v4" />
        </svg>
      );
    case "price":
      return (
        <svg className={className} {...baseProps}>
          <path d="M5 12h14" />
          <path d="M12 5v14" />
          <path d="M8 8.5c.8-1.4 2.1-2.1 4-2.1 2.1 0 3.6 1 3.6 2.5 0 3-7.2 1.3-7.2 4.8 0 1.6 1.6 2.7 3.9 2.7 1.9 0 3.3-.7 4.1-2" />
        </svg>
      );
    case "procure":
      return (
        <svg className={className} {...baseProps}>
          <path d="M6 8h12l-1 11H7L6 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
          <path d="M9 13h6" />
          <path d="M10 16h4" />
        </svg>
      );
    case "bulk":
      return (
        <svg className={className} {...baseProps}>
          <path d="M5 9l7-4 7 4-7 4-7-4Z" />
          <path d="M5 9v6l7 4 7-4V9" />
          <path d="M12 13v6" />
          <path d="M8.5 11l7-4" />
        </svg>
      );
    case "logistics":
      return (
        <svg className={className} {...baseProps}>
          <path d="M3 7h11v9H3z" />
          <path d="M14 10h4l3 3v3h-7" />
          <circle cx="7" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </svg>
      );
    case "mandi":
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 10h16" />
          <path d="M6 10V7l6-3 6 3v3" />
          <path d="M7 10v8" />
          <path d="M12 10v8" />
          <path d="M17 10v8" />
          <path d="M5 18h14" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 3l7 3v5c0 4.8-2.8 8.1-7 10-4.2-1.9-7-5.2-7-10V6l7-3Z" />
          <path d="M8.5 12l2.3 2.3 4.7-5" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} {...baseProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c.8-3.1 2.7-4.7 5.5-4.7s4.7 1.6 5.5 4.7" />
          <path d="M15 6.5a2.7 2.7 0 0 1 0 5.2" />
          <path d="M16.5 14.4c2.1.5 3.5 2 4 4.6" />
        </svg>
      );
    case "grain":
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 21V4" />
          <path d="M12 8c-3 0-5-1.5-6-4 3 0 5 1.5 6 4Z" />
          <path d="M12 12c3 0 5-1.5 6-4-3 0-5 1.5-6 4Z" />
          <path d="M12 16c-3 0-5-1.5-6-4 3 0 5 1.5 6 4Z" />
        </svg>
      );
    case "leaf":
    default:
      return (
        <svg className={className} {...baseProps}>
          <path d="M5 19c8 0 13-5 14-14-8 1-14 6-14 14Z" />
          <path d="M5 19c3-4 6-7 11-10" />
        </svg>
      );
  }
}