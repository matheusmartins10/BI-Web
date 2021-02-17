import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > img {
    height: 80px;
  }

  a {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }

  @media (max-width: 425px) {
    > img {
      display: none;
    }

    a {
      margin-left: auto;
      margin-right: 30px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: red;
      text-transform: capitalize;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
