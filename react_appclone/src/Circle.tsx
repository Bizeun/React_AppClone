import styled from "styled-components";

interface ContainerProps {
  bgColor: string; //required
  borderColor: string; //required
}

interface CircleProps {
  bgColor: string; //required
  borderColor?: string; //optional
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor, borderColor, text = "default" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  ); //default bordercolor is bgColor
}

export default Circle;
