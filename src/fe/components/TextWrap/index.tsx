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
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }

  return css`
    display: box;
    box-orient: vertical;
    -webkit-line-clamp: ${ellipsis};
    overflow: hidden;
  `;
};

export const TextWrap = styled(Text)<{ ellipsis?: number; weight?: 300 | 400 | 500 | 700 }>`
  margin: 0;
  font-weight: ${({ weight = 400 }) => weight};
  ${({ ellipsis }) => ellipsis && clampCss(ellipsis)}
`;
