import styled from "styled-components";

const Text1 = styled.p`
  margin: 0;
`;
const Text1ContainerRoot = styled.div`
  font-size: 24px;
  line-height: 80px;
  font-weight: 600;
  font-family: var(--font-jost);
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  width: 514px;
  height: 414px;
`;

const Text1 = () => {
  return (
    <Text1ContainerRoot>
      <Text1>{`Let us help you to find the best stay `}</Text1>
      <Text1>which is no less than a home ---</Text1>
      <Text1>to the best of your budget, security and</Text1>
      <Text1>comfort. Happy Stay!</Text1>
    </Text1ContainerRoot>
  );
};

export default Text1;
