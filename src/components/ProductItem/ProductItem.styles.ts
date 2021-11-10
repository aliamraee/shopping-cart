import styled from "styled-components";

export const ProductBox = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  margin: 20px 20px;
  background-color: white;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  min-height: 200px;
  display: block;
  margin: 10 auto;
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
  border: ${(props: { inCart: boolean }) =>
    props.inCart ? "none" : "1px solid #ccc"};
  border-radius: 10px;
  padding: 8px 18px;
  background-color: ${(props: { inCart: boolean }) =>
    props.inCart ? "#2ee466" : "white"};
  font-weight: 600;
  color: ${(props: { inCart: boolean }) =>
    props.inCart ? "white" : "#4b4b4b"};
  cursor: pointer;
`;
