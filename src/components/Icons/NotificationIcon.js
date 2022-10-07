import * as React from "react";

const NotificationIcon = (props) => (
  <svg
    width={169}
    height={174}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <g filter="url(#b)">
        <rect
          x={45}
          y={15.045}
          width={78.955}
          height={78.955}
          rx={4}
          fill="#FFB300"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m103.095 65.614-2.294-2.294c-.207-.205-.179-1.155-.179-1.447v-9.87c0-6.68-4.572-12.543-10.872-14.644v-.183c0-2.657-2.249-4.911-4.92-4.911-2.662 0-4.92 2.254-4.92 4.911v.183c-6.3 2.1-10.87 7.963-10.87 14.645v9.87c0 .291.025 1.24-.18 1.446l-2.293 2.294c-.711.71-1.477 2.029-1.477 3.249 0 1.54 1.395 2.793 3.11 2.793h8.638a7.815 7.815 0 0 0 7.598 5.996c3.687 0 7.477-2.477 8.29-5.91l8.735-.086c1.715 0 3.108-1.254 3.108-2.793 0-1.216-.763-2.537-1.474-3.25Zm-18.66 8.568a4.335 4.335 0 0 1-3.937-2.526h7.874a4.335 4.335 0 0 1-3.936 2.526Zm6.317-6.387c-.272-.067.273-.067 0 0H78.91c-.272-.067.272-.067 0 0h-9.87c.088-.34-.037.035 0 0l2.284-2.026c.855-.852 1.665-2.688 1.665-3.896v-9.87c0-5.62 3.53-10.327 9.067-11.651a1.735 1.735 0 0 0 1.333-1.688v-1.488c0-.723.718-.963 1.443-.963.744 0 1.439.227 1.439.963v1.488c0 .804.552 1.5 1.334 1.688 5.537 1.324 9.07 6.03 9.07 11.652v9.87c0 1.207.81 3.043 1.664 3.898l2.292 2.29c.037.037-.044-.313-.008-.267h-9.87Z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={5.045}
        width={168.955}
        height={168.955}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={35} />
        <feGaussianBlur stdDeviation={22.5} />
        <feColorMatrix values="0 0 0 0 0.190902 0 0 0 0 0.257471 0 0 0 0 0.305677 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_395" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_395"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={29}
        y={0.045}
        width={112.955}
        height={112.955}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1} dy={2} />
        <feGaussianBlur stdDeviation={8.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_395" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_395"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default NotificationIcon;
