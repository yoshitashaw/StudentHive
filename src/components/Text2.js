import styled from "styled-components";

const Text2 = styled.p`
  margin: 0;
`;
const Text2ContainerRoot = styled.div`
  font-size: 26px;
  line-height: 80px;
  font-weight: 600;
  font-family: var(--font-jost);
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  width: 707px;
  height: 533px;
`;

const Text2 = () => {
  return (
    <Text2ContainerRoot>
      <Text2>
        StudentHive: Where Learning Meets Living is a
      </Text2>
      <Text2>
        rental portal for the students who can easily find, compare, and rent
        accommodation for their studies. It's like an online hub where students
        can search for apartments or rooms near their universities, see photos
        and details, and connect with landlords or property managers to secure a
        place to live during their academic year.
      </Text2>
    </Text2ContainerRoot>
  );
};

export default Text2;
