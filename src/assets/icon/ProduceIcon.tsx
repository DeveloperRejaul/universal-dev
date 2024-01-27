import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function ProduceIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25 } height={props.size || 25} viewBox='0 0 27 22' fill='none'>
      <Path d='M2 21.0022C2.55228 21.0022 3 20.5545 3 20.0022C3 19.4499 2.55228 19.0022 2 19.0022C1.44772 19.0022 1 19.4499 1 20.0022C1 20.5545 1.44772 21.0022 2 21.0022Z' fill={props.color || '#C89963'} />
      <Path d='M2 15.0022C2.55228 15.0022 3 14.5545 3 14.0022C3 13.4499 2.55228 13.0022 2 13.0022C1.44772 13.0022 1 13.4499 1 14.0022C1 14.5545 1.44772 15.0022 2 15.0022Z' fill={props.color || '#C89963'} />
      <Path d='M2 9.0022C2.183 9.0022 2.324 8.9512 2.433 8.9042C2.783 8.7392 3 8.3932 3 8.0022C3 7.4512 2.552 7.0022 2 7.0022C1.779 7.0022 1.575 7.0672 1.425 7.1812C1.422 7.1832 1.42 7.1862 1.417 7.1892C1.415 7.1902 1.413 7.1912 1.411 7.1922C1.409 7.1942 1.409 7.1972 1.407 7.1982C1.152 7.3852 1 7.6822 1 8.0022C1 8.5632 1.44 9.0022 2 9.0022Z' fill={props.color || '#C89963'} />
      <Path d='M26.373 13.1163C26.444 12.9683 26.437 12.7942 26.355 12.6522C26.273 12.5092 26.126 12.4172 25.962 12.4032C25.388 12.3562 23.993 12.2803 23.441 12.5983C23.297 12.6813 23.147 12.8282 23 13.0083V12.5022C23 12.2262 22.776 12.0022 22.5 12.0022H22V10.0022H22.5C22.776 10.0022 23 9.77825 23 9.50225V6.50225C23 6.22625 22.776 6.00225 22.5 6.00225H21.949C21.823 5.13125 21.378 4.37025 20.732 3.82925C20.887 3.84825 21.042 3.86625 21.18 3.86625C21.34 3.86625 21.484 3.85025 21.601 3.81425C22.211 3.62525 23.104 2.55025 23.459 2.09725C23.561 1.96825 23.592 1.79725 23.543 1.64025C23.494 1.48325 23.372 1.36025 23.215 1.31125C22.666 1.13925 21.324 0.75725 20.711 0.94825C20.153 1.12225 19.364 2.02925 18.961 2.53025C18.871 1.63825 18.49 0.78425 17.853 0.14725C17.658 -0.0477496 17.341 -0.0477496 17.146 0.14725C16.951 0.34225 16.951 0.65925 17.146 0.85425C17.688 1.39725 18 2.14825 18 2.91525V3.05125C16.562 3.25925 15.405 4.33425 15.09 5.73525C14.901 4.97125 14.431 4.31025 13.791 3.82425C13.984 3.84825 14.172 3.86425 14.34 3.86425C14.506 3.86425 14.654 3.85025 14.774 3.81725C15.454 3.62825 16.51 2.46825 16.818 2.11725C16.931 1.98825 16.97 1.80925 16.922 1.64525C16.874 1.48125 16.743 1.35325 16.577 1.30625C16.105 1.17425 14.514 0.75925 13.845 0.94325C13.17 1.13125 12.129 2.27025 11.811 2.63225C11.734 1.69225 11.3 0.79125 10.56 0.12825C10.355 -0.0547497 10.039 -0.0387501 9.854 0.16725C9.669 0.37325 9.687 0.68925 9.892 0.87325C10.505 1.42125 10.842 2.14625 10.842 2.91525V3.04725C9.428 3.21625 8.258 4.07225 7.758 5.24425C7.542 4.68725 7.185 4.20625 6.734 3.82825C6.889 3.84725 7.044 3.86525 7.182 3.86525C7.342 3.86525 7.486 3.84925 7.603 3.81325C8.213 3.62425 9.106 2.54925 9.461 2.09625C9.563 1.96725 9.594 1.79625 9.545 1.63925C9.496 1.48225 9.374 1.35925 9.217 1.31025C8.668 1.13825 7.326 0.75625 6.713 0.94725C6.155 1.12125 5.366 2.02825 4.963 2.52925C4.873 1.63725 4.492 0.78325 3.855 0.14625C3.66 -0.04875 3.343 -0.04875 3.148 0.14625C2.953 0.34125 2.953 0.65825 3.148 0.85325C3.69 1.39625 4.002 2.14725 4.002 2.91425V3.05025C2.473 3.27425 1.272 4.47525 1.051 6.00225H0.5C0.224 6.00225 0 6.22625 0 6.50225V9.50225C0 9.77825 0.224 10.0022 0.5 10.0022H1V12.0022H0.5C0.224 12.0022 0 12.2262 0 12.5022V15.5022C0 15.7782 0.224 16.0023 0.5 16.0023H1V18.0023H0.5C0.224 18.0023 0 18.2263 0 18.5023V21.5023C0 21.7782 0.224 22.0023 0.5 22.0023H22.5C22.777 22.0023 23.029 21.9753 23.271 21.9193C25.148 21.4893 26.335 19.6123 25.917 17.7313C25.68 16.6943 25.008 15.8652 24.121 15.4032C24.447 15.3702 24.745 15.3103 24.937 15.1993C25.491 14.8802 26.126 13.6362 26.373 13.1163ZM22 13.0022V14.2832C21.805 13.8012 21.521 13.3682 21.157 13.0022H21.5H22ZM21.008 1.90425C21.154 1.86325 21.633 1.93225 22.182 2.06425C21.804 2.48225 21.451 2.81025 21.305 2.85925C21.158 2.89925 20.68 2.83025 20.132 2.70025C20.51 2.28125 20.864 1.95425 21.008 1.90425ZM18.5 4.00225C19.707 4.00225 20.718 4.86225 20.95 6.00225H16.05C16.282 4.86225 17.293 4.00225 18.5 4.00225ZM14.111 1.90925C14.297 1.85725 14.874 1.93625 15.488 2.06925C15.084 2.46825 14.681 2.80725 14.506 2.85525C14.321 2.90725 13.744 2.82725 13.127 2.69525C13.533 2.29425 13.933 1.95925 14.111 1.90925ZM11.34 4.00225C12.716 4.00225 13.867 4.86225 14.132 6.00225H8.547C8.812 4.86225 9.963 4.00225 11.34 4.00225ZM7.008 1.90425C7.153 1.86325 7.632 1.93225 8.182 2.06425C7.804 2.48225 7.451 2.81025 7.305 2.85925C7.159 2.89925 6.68 2.83025 6.132 2.70025C6.51 2.28125 6.864 1.95425 7.008 1.90425ZM4.5 4.00225C5.707 4.00225 6.718 4.86225 6.95 6.00225H2.05C2.282 4.86225 3.293 4.00225 4.5 4.00225ZM1 8.00225V7.00225H1.5H2H7.5H7.989H14.689H15.5H21.5H22V9.00225H21.5H2H1.5H1V8.00225ZM2 10.0022H21V12.0022H2V10.0022ZM1 14.0022V13.0022H1.5H2H19.731C19.763 13.1172 19.832 13.2222 19.941 13.2902C20.566 13.6853 21 14.2922 21.19 15.0022H2H1.5H1V14.0022ZM2 16.0023H20.055C20.044 16.0133 20.035 16.0263 20.024 16.0373C19.94 16.1213 19.866 16.2133 19.791 16.3063C19.75 16.3573 19.705 16.4043 19.666 16.4573C19.588 16.5643 19.522 16.6793 19.457 16.7952C19.432 16.8403 19.401 16.8813 19.378 16.9272C19.295 17.0912 19.224 17.2623 19.167 17.4383C19.159 17.4633 19.156 17.4893 19.149 17.5142C19.104 17.6663 19.065 17.8213 19.041 17.9803C19.04 17.9873 19.037 17.9943 19.036 18.0023H2V16.0023ZM20.062 21.0023H2H1V20.0023V19.0023H1.5H2H19.032C19.045 19.0953 19.061 19.1852 19.082 19.2743C19.125 19.4583 19.184 19.6353 19.255 19.8073C19.278 19.8643 19.308 19.9163 19.334 19.9722C19.387 20.0842 19.442 20.1943 19.506 20.2993C19.543 20.3593 19.583 20.4163 19.623 20.4733C19.688 20.5673 19.757 20.6573 19.83 20.7443C19.876 20.7983 19.922 20.8503 19.971 20.9013C20.003 20.9343 20.029 20.9713 20.062 21.0023ZM24.941 17.9503C25.24 19.2943 24.39 20.6383 23.047 20.9443H23.046C22.878 20.9832 22.699 21.0023 22.499 21.0023C21.344 21.0023 20.316 20.1812 20.056 19.0522C20.018 18.8832 19.999 18.7033 19.999 18.5023C19.999 18.3453 20.018 18.1912 20.047 18.0403C20.211 17.1793 20.819 16.4463 21.671 16.1413C21.758 16.1093 21.847 16.0863 21.936 16.0633C21.941 16.0623 21.945 16.0633 21.95 16.0613C21.953 16.0603 21.955 16.0583 21.958 16.0573C22.124 16.0193 22.3 16.0002 22.499 16.0002C23.675 16.0023 24.68 16.8053 24.941 17.9503ZM24.439 14.3322C24.303 14.4052 23.829 14.4323 23.258 14.4353C23.535 13.9433 23.809 13.5463 23.94 13.4663C24.075 13.3943 24.56 13.3652 25.119 13.3632C24.842 13.8552 24.568 14.2522 24.439 14.3322Z' fill={props.color || '#C89963'} />
    </Svg>
  );
}