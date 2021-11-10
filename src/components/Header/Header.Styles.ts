import styled from "styled-components";


export const IconBox = styled.div`
  position: relative;
  & > img {
    width: 28px;
  }
  & > div {
    color: white;
    position: absolute;
    top: -7px;
    right: -6px;
    background-color: #fa5151c9;
    padding: 7px;
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 9px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  & > a {
    color: rgb(75, 75, 75);
    padding: 0px 97px;
  }
  & > h1 {
    color: #88e881;
  }
`;
export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
  align-items: center;
  box-shadow: 1px 1px 5px #ccc;
`;
