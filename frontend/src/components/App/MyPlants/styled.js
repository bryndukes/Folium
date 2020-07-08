import styled from "@emotion/styled";

export const PlantCard = styled.div`
  border-radius: 3px;
  background-color: #005c5b;
  font-family: "Lustria", serif;
  color: white;
  text-align: center;
  margin: 0;
`;

export const FormField = styled.div`
  margin-bottom: 1rem;
  width: 270px;
`;

export const FullWidthFormField = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const HorizontalFormField = styled.div`
  margin-bottom: 1rem;
  width: 270px;
  display: flex;
  justify-content: space-between;
`;

export const FormLabel = styled.label`
  display: block;
  font-family: "Lustria", serif;
  font-size: 1rem;
  color: #005c5b;
`;

export const HorizontalFormLabel = styled.label`
  display: inline-block;
  margin-right: 1rem;
  font-family: "Lustria", serif;
  font-size: 1rem;
  color: #005c5b;
`;

export const TextInputField = styled.input`
  width: 100%;
  padding: 5px;
  border: 2px solid #005c5b;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const NumericInputField = styled.input`
  width: 38px;
  padding: 5px;
  border: 2px solid #005c5b;
  border-radius: 3px;
`;

export const TextAreaInputField = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border: 2px solid #005c5b;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const EscapeButton = styled.a`
  width: 30px;
  height: 30px;
  position: relative;
  margin-left: 1rem;
  margin-top: 8px;
  flex: 0 0 auto;
  transform: rotate(45deg);
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
