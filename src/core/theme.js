import {css} from 'styled-components';

const colors = {
  base: '#000',
  light: '#666',
  primary: '#333',
  white: '#fff',
};

const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  4: '12px',
  5: '16px',
  6: '20px',
  7: '24px',
  8: '28px',
  9: '32px',
  10: '36px',
  11: '40px',
};

const getStyledProps = (props) =>
  css`
    padding: ${spacing[props.p]};
    padding-top: ${spacing[props.pt]};
    padding-right: ${spacing[props.pr]};
    padding-bottom: ${spacing[props.pb]};
    padding-left: ${spacing[props.pl]};

    margin: ${spacing[props.m]};
    margin-top: ${spacing[props.mt]};
    margin-right: ${spacing[props.mr]};
    margin-bottom: ${spacing[props.mb]};
    margin-left: ${spacing[props.ml]};

    color: ${colors[props.color]}
    background-color: ${colors[props.backgroundColor]}
    border-color: ${colors[props.borderColor]}
  `;

export {colors, spacing, getStyledProps};
