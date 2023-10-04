import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  h3 {
    margin-right: 10px;
  }

  .navlink {
    display: flex;
    color: grey;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 3px;
  }

  .navlink .logo {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: rgb(240 240 240);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    color: black;
  }

  .nav-items,
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`;
