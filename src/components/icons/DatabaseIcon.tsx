import { SVGAttributes } from "react";

function DatabaseIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='25'
      fill='none'
      viewBox='0 0 24 25'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        stroke='currentColor'
        strokeWidth='0.5'
        d='M5.5 13.993c0 1.776 2.934 3.033 6.498 3.033 3.565 0 6.499-1.257 6.499-3.033a.433.433 0 10-.867 0c0 1.096-2.497 2.166-5.632 2.166s-5.632-1.07-5.632-2.166a.433.433 0 10-.866 0h0zM5.5 10.311c0 1.557 2.919 2.6 6.498 2.6 3.58 0 6.499-1.043 6.499-2.6a.433.433 0 10-.867 0c0 .836-2.512 1.733-5.632 1.733-3.12 0-5.632-.897-5.632-1.733a.433.433 0 10-.866 0h0zM17.63 6.412c0 .836-2.512 1.733-5.632 1.733-3.12 0-5.632-.897-5.632-1.733 0-.836 2.513-1.733 5.632-1.733 3.12 0 5.632.897 5.632 1.733zm.867 0c0-1.557-2.919-2.6-6.499-2.6-3.58 0-6.498 1.043-6.498 2.6 0 1.557 2.919 2.6 6.498 2.6 3.58 0 6.499-1.043 6.499-2.6z'
        clipRule='evenodd'
      ></path>
      <path
        fill='currentColor'
        fillRule='evenodd'
        stroke='currentColor'
        strokeWidth='0.5'
        d='M17.63 6.413V18.11c0 .284-.578.833-1.53 1.288-1.147.549-2.61.88-4.101.878-1.494.003-2.956-.33-4.102-.878-.953-.455-1.53-1.004-1.53-1.288V6.413a.433.433 0 10-.867 0V18.11c0 1.483 3.253 3.038 6.499 3.032 3.245.006 6.498-1.55 6.498-3.032V6.413a.433.433 0 00-.867 0h0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

export default DatabaseIcon;
