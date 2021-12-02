import { SVGAttributes } from "react";

export interface IconsProps extends SVGAttributes<1> {
  color?: string;
  size?: number;
  height?: number;
}

export const ChevronLeft = ({ size, color, ...rest }: IconsProps) => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.292786 5.29296L4.29279 1.29296C4.38503 1.19745 4.49538 1.12127 4.61738 1.06886C4.73939 1.01645 4.87061 0.988862 5.00339 0.987709C5.13616 0.986555 5.26784 1.01186 5.39074 1.06214C5.51364 1.11242 5.62529 1.18667 5.71918 1.28056C5.81307 1.37446 5.88733 1.48611 5.93761 1.60901C5.98789 1.7319 6.01319 1.86358 6.01204 1.99636C6.01088 2.12914 5.9833 2.26036 5.93089 2.38236C5.87848 2.50437 5.8023 2.61471 5.70679 2.70696L2.41379 5.99996L5.70679 9.29296C5.8023 9.38521 5.87848 9.49555 5.93089 9.61755C5.9833 9.73956 6.01088 9.87078 6.01204 10.0036C6.01319 10.1363 5.98789 10.268 5.93761 10.3909C5.88733 10.5138 5.81307 10.6255 5.71918 10.7194C5.62529 10.8132 5.51364 10.8875 5.39074 10.9378C5.26784 10.9881 5.13616 11.0134 5.00339 11.0122C4.87061 11.0111 4.73939 10.9835 4.61738 10.9311C4.49538 10.8787 4.38503 10.8025 4.29279 10.707L0.292786 6.70696C0.105315 6.51943 0 6.26512 0 5.99996C0 5.73479 0.105315 5.48049 0.292786 5.29296Z"
        fill="white"
      />
    </svg>
  );
};
