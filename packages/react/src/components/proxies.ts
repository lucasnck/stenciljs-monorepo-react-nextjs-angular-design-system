import { JSX } from '@ds/core';
import { createReactComponent } from './stencil-generated/react-component-lib';
// import { HrefProps } from "./hrefprops";

// component-library
export const MyComponent = /*@__PURE__*/ createReactComponent<
  JSX.MyComponent,
  HTMLMyComponentElement
>('my-component');