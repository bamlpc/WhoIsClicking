import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

interface Layout {
  children: any;
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }: Layout) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
