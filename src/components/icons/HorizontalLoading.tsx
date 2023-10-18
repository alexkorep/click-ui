import DotsHorizontal from "./DotsHorizontal";
import styled, { keyframes } from "styled-components";

const animationCircle1 = keyframes`
  0 {
    r: 0;
  }
  30% {
    r: 1.5;
  }
  60% {
    r: 0;
  }
  100% {
    r: 0;
  }
`;
const animationCircle2 = keyframes`
  0 {
    r: 0;
  }
  20% {
    r: 0;
  }
  40% {
    r: 1.5;
  }
  80% {
    r: 0;
  }
  100% {
   r: 0
  }
`;
const animationCircle3 = keyframes`
  0 {
    r: 0;
  }
  40% {
    r: 0;
  }
  80% {
    r: 1.5;
  }
  100% {
   r: 0
  }
`;

const HorizontalLoading = styled(DotsHorizontal)`
  circle {
    r: 0;
    animation-name: example;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &:nth-child(1) {
      animation-name: ${animationCircle1};
    }
    &:nth-child(2) {
      animation-name: ${animationCircle2};
    }
    &:nth-child(3) {
      animation-name: ${animationCircle3};
    }
  }
`;

export default HorizontalLoading;