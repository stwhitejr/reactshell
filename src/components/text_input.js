import React from 'react';
import styled from 'styled-components';
import {colors, spacing} from '@root/core/theme';

const StyledTextInput = styled.input`
  background: white;
  border-radius: 3px;
  border: solid 1px ${colors.base};
  color: ${colors.base};
  margin: 0 1em;
  padding: ${spacing[1]};
  outline: none;
`;

export const TextInput = (props) => {
  return <StyledTextInput {...props} />;
};
