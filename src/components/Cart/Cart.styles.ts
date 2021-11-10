import styled from "styled-components";

export const SectionTitleContent = styled.div`
  width: 75%;
  padding-bottom: 80px;
`;

export const SectionTitle = styled.div`
  border-radius: 10px;
  overflow: hidden;
  padding: 15px;
  margin: 10px 20px 20px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  & > div {
    width: 200px;
  }
  & > div > span {
    color: #474747;
    font-size: 14px;
    font-weight: 600;
  }
  & > div:last-child {
    width: 100px;
  }
`;

export const CheckoutBox = styled.div`
  width: 25%;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin: 10px;
  padding: 0px 40px 40px;

  & > div > button {
    padding: 17px 40px;
    margin: 6px;
    background-color: #7670da;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    color: white;
    width: 100%;
  }
`;

export const TitleCheckout = styled.h2`
  color: rgb(75, 75, 75);
  font-weight: 600;
  border-bottom: 2px solid #cecece;
  margin-bottom: 30px;
`;

export const BoxTotalPrice = styled.div`
  display: flex;
  align-items: end;
  justify-content: left;

  & > p {
    margin: 0;
    font-size: 14px;
  }

  & > span {
    font-weight: 600;
    padding-left: 2px;
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #7e7e7e;
  margin: 2px 0 10px;
  text-align: left;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  padding-top: 20px;
  width: 90%;
  margin: auto;
`;
export const MessageBox = styled.div`
  width: 100%;
  text-align: center;
  & > h2 {
    color: #5e5757;
  }
`;
