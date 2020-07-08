import styled from "@emotion/styled";

export const CollectionScrollButton = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 28px;
  cursor: pointer;
  color: #005c5b;
`;

export const AddPlantButton = styled.a`
  width: 30px;
  height: 30px;
  position: relative;
  margin-left: 1rem;
  margin-top: 8px;
  flex: 0 0 auto;
  cursor: pointer;
  &:after {
    content: " ";
    position: absolute;
    display: block;
    background-color: #5ba996;
    height: 3px;
    top: 50%;
    margin-left: 2px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  &:before {
    content: " ";
    position: absolute;
    display: block;
    background-color: #5ba996;
    width: 3px;
    left: 50%;
    margin-top: 2px;
    top: 0;
    bottom: 0;
    z-index: 9;
  }
`;
