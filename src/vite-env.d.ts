/// <reference types="vite/client" />

declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

