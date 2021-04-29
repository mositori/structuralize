import Menu from '@geist-ui/react-icons/menu';
import { memo } from 'react';
import styled from 'styled-components';
import { centering } from 'utils/styles';

const TOGGLE_SIZE = 20;

interface Props {
  onClick: () => void;
}

function _Toggle({ onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <Menu size={TOGGLE_SIZE} />
    </Container>
  );
}

export const Toggle = memo(_Toggle);

const Container = styled.div`
  padding: 4px;
  color: ${({ theme }) => theme.palette.accents_3};
  cursor: pointer;
  border-radius: 40px;
  transition: color 0.2s;

  ${centering()};

  :hover {
    color: ${({ theme }) => theme.palette.accents_8};
  }
`;
