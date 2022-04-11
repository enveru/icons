import styled from 'styled-components';

import { icons } from '../assets';

const SvgContainer = styled.span`
  display: inline-block;
  line-height: 0;
  & > svg {
    height: ${({ height }) => (height ? height : '2rem')};
    fill: ${({ color }) => (color ? color : '#000000')};
  }
`;

export const Icon = ({ icon, ...props }) => {
  const StyledIcon = icons[icon];
  return (
    <SvgContainer {...props}>
      <StyledIcon />
    </SvgContainer>
  );
};
