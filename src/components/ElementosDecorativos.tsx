
import React from 'react';

export const Lapis: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`escola-pencil ${className || ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87L20.71,7.04Z" />
    <path d="M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
  </svg>
);

export const Giz: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`escola-crayon ${className || ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.31,5.68L18.32,4.68C17.97,4.34 17.66,4 17,4H7C6.37,4 6,4.32 5.67,4.65L4.69,5.63C4.31,6 4.05,6.32 4,7C3.97,7.35 4,7.68 4.08,8H3.06L3,9L4.06,13H20.03L21,9L20.94,8H19.92C20,7.68 20.03,7.35 20,7C19.95,6.32 19.69,6 19.31,5.68M8.38,5H15.63L17,6.37V10H7V6.37L8.38,5Z" />
    <path d="M19,15H5L4.5,14H19.5L19,15M5,16H19L18,19H6L5,16Z" />
  </svg>
);

export const Livro: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`escola-book ${className || ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V6.5C10.55,5.4 8.45,5 6.5,5Z" />
  </svg>
);

export const ElementosDecorativos: React.FC = () => (
  <div className="hidden lg:block">
    <div className="fixed -top-2 right-10 transform rotate-12 opacity-30 pointer-events-none">
      <Lapis />
    </div>
    <div className="fixed top-20 left-4 transform -rotate-12 opacity-30 pointer-events-none">
      <Giz />
    </div>
    <div className="fixed bottom-20 right-10 transform rotate-3 opacity-30 pointer-events-none">
      <Livro />
    </div>
    <div className="fixed top-40 right-24 transform -rotate-12 opacity-30 pointer-events-none">
      <Giz />
    </div>
    <div className="fixed bottom-40 left-10 transform rotate-12 opacity-30 pointer-events-none">
      <Lapis />
    </div>
  </div>
);

export default ElementosDecorativos;
