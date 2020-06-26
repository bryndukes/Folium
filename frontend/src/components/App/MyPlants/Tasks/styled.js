import styled from "@emotion/styled";

export const TaskCategoryTitle = styled.div`
  font-family: "Lustria", serif;
  color: #00654b;
  font-size: 1.3rem;
  text-align: center;
`;

export const TaskListScrollButtonContainer = styled.div`
  background-color: #d0dfb2;
  margin: auto;
  width: 30px;
  text-align: center;
  padding: 10px 0.5rem 0 0.5rem;
`;

export const TaskListScrollButton = styled.a`
  font-size: 28px;
  cursor: pointer;
  color: #005c5b;
`;

export const TaskListContainer = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 16px;
  overflow: hidden;
  width: 100%;
`;
