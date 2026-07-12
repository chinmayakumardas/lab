import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="147"
        height="40"
        viewBox="0 0 147 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx="20"
          cy="20"
          r="20"
          fill="#409A60"
          className="dark:fill-[#FFFFFF]"
        />
        
        {/* LAB */}
<text
  x="15"
  y="27"
  fontSize="18"
  fontWeight="700"
  fontFamily="Inter, Arial, sans-serif"
>
  <tspan fill="#ffffff">Ch</tspan>
  <tspan fill="#111827">inmaya.Lab</tspan>
</text>
      </svg>
    </div>
  );
};

export default Logo;
