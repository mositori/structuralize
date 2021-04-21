import { Text } from '@geist-ui/react';
import styled, { css } from 'styled-components';
import { unreachable } from 'utils';

const clampCss = (ellipsis: number) => {
  if (ellipsis < 1) {
    unreachable();
    return;
  }

  if (ellipsis === 1) {
    return css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `;
  }

  return css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${ellipsis};
    overflow: hidden;
  `;
};

export const TextWrap = styled(Text)<{ ellipsis?: number }>`
  margin: 0;
  ${({ ellipsis }) => ellipsis && clampCss(ellipsis)}
`;
