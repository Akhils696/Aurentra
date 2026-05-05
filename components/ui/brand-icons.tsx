import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function AutomationMark(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.4 18.1c4.6-7.8 9.3-9.1 15.9-7.6" />
      <path d="M8.5 22.9c5.1-1.1 8.3-3.2 10.8-8.6" />
      <path d="M22.8 8.2 25 11l-3.2 1.1" />
      <path d="M6.9 12.5h4.2M20.7 22h4.4M14.4 7.2v3.4" />
    </BaseIcon>
  );
}

export function WebMark(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5.8 9.5h20.4v13.2H5.8z" />
      <path d="M8.7 13.1h5.4M8.7 16.4h10.6M8.7 19.7h7.2" />
      <path d="m21.1 14.1 2.1 2.1-2.1 2.1M18.7 14.1l-2.1 2.1 2.1 2.1" />
    </BaseIcon>
  );
}

export function MobileMark(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M11 5.9h10.1c1.1 0 1.9.8 1.9 1.9v16.4c0 1.1-.8 1.9-1.9 1.9H11c-1.1 0-1.9-.8-1.9-1.9V7.8c0-1.1.8-1.9 1.9-1.9Z" />
      <path d="M13.4 9.8h5.1M14.6 22.3h2.8" />
      <path d="M12.6 14.7c2.9-1.9 5.5-1.8 7.7.3" />
    </BaseIcon>
  );
}

export function GrowthMark(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.8 23.6h18.5" />
      <path d="M9 20.4v-5.1M15.8 20.4v-9.6M22.5 20.4V8.4" />
      <path d="m8.1 12.8 5.4-3 4.1 2.1 6-5" />
    </BaseIcon>
  );
}

export const customServiceIcons = {
  "ai-automation": AutomationMark,
  "website-development": WebMark,
  "mobile-app-development": MobileMark,
  "business-optimization": GrowthMark,
};
