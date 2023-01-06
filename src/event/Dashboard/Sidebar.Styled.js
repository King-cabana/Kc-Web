import styled from 'styled-components';

export const SidebarNav = styled.nav`
  background: white;
  width: 20%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 90vh;
  display: flex;
  justify-content: center;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  padding-top: 2%;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const ContentBody = styled.div`
  /* height:90vh;
  background-color:#FEF5F7;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:60px; */
  width: 80%;
`