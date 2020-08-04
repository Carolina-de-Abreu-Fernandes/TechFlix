import styled from 'styled-components';

const ButtonIntern = styled.button`
  border: 1px solid var(--primary);
  background-color: var(--lightGrey);
  border-radius: 10px;
  color: var(--white);
  cursor: pointer;
  font-style: normal;
  @media (max-width: 700px) {
    display: grid;
    align-items: center;
  }
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export default ButtonIntern;
