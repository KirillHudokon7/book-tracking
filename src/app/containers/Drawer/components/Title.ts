import styled from "styled-components";

interface TitleProps {
  readonly mode: string;
}

export const Title = styled.div<TitleProps>`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${(props) => (props.mode === "dark" ? "#c3c3c3" : "#696969")};
  margin-bottom: 33px;
`;
