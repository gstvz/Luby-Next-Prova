import styled from "styled-components";

type SignButtonProps = {
  border?: boolean;
};

export const Header = styled.header`
  box-shadow: 0px 10px 30px #0000001a;
  height: 8rem;
  width: 100vw;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
`;

export const LogoWrapper = styled.div`
  align-items: baseline;
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

export const LogoExotic = styled.h1`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium_500};
`;

export const LogoCars = styled.h1`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_400};
`;

export const SearchBar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_input};
  border-radius: 18px;
  display: flex;
  justify-content: space-around;
  height: 3.6rem;
  width: 54rem;
`;

export const SearchParamsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`

export const SearchParam = styled.div`
  align-items: center;
  display: flex;
`;

export const SearchParamInput = styled.input`
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium_500};
  margin-left: 0.2rem;
`;

export const SearchParamDateInput = styled.input`
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium_500};
  margin-left: 0.2rem;
  width: 6rem;
`;

export const SearchButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  margin-right: 0.6rem;
  height: 2.8rem;
  width: 2.8rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SignButton = styled.button<SignButtonProps>`
  background: none;
  ${({ border, theme }) => border ? `border: 2px solid ${theme.colors.button_primary}` : `border: 2px solid ${theme.colors.background_primary}`};
  border-radius: 13px;
  color: ${({ theme }) => theme.colors.button_primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  padding: 0.6rem 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.button_primary};
    border: 2px solid ${({ theme }) => theme.colors.button_primary};  
    color: ${({ theme }) => theme.colors.background_primary};
  };
`;