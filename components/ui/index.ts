import styled from "styled-components"

const Button = styled.div`
  padding: 15px;
`

export const ControllButton = styled(Button)`
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`


export const NavButton = styled(Button)`
  border-radius: 5px;
  text-align: center;
  color: white;
  background-color: rgb(36, 40, 47);
  cursor: pointer;

  & + & {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

export const BuyButton = styled(Button)`
    border-radius: 5px;
    text-align: center;
    color: #fff;
    min-width: 80px;
  background-color: rgb(21, 101, 192);
  margin-left: 80px;
  cursor: pointer;  

  & + & {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`

export const TextInfo = styled.p`
    font-size: 17px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.87)
`