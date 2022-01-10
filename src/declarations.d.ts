// This file holds ambient type declarations.
declare module '*.yml' {
  const data: string;
  export default data;
}
declare module '*.svg';
declare module '*.png';

type SocialType = 'instagram' | 'linkedin' | 'facebook' | 'twitter';
