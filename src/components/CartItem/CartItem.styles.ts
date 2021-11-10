import styled from "styled-components";

export const ProductBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div {
    width: 200px;
    display: inline-flex;
    align-items: center;
    place-content: space-around;
  }
  & > div:last-child {
    width: 100px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 150px;
  min-height: 150px;
  display: block;
  margin: 10px auto;
`;
export const Title = styled.h4`
  font-weight: 600;
  margin: 10px 0;
  font-size: 20px;
  color: #66cc66;
`;
export const Description = styled.h4`
  font-size: 14px;
  color: #8c8c8c;
  font-weight: 400;
  margin: 10px 0;
`;
export const FooterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const PriceContent = styled.div`
  & > p {
    margin: 0px;
    color: #bababa;
    font-size: 14px;
  }
  & > span {
    font-weight: 600;
    font-size: 18px;
    color: #4b4b4b;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;

  &>img{
    width:18px
  }
`;
