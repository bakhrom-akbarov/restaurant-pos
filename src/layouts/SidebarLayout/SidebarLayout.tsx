import React, { useEffect } from 'react';
import styled from 'styled-components';

export type SidebarLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

const SidebarLayoutWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const SidebarLayoutSidebar = styled.div`
  width: 240px;
  height: 100%;
`;

const SidebarLayoutContent = styled.div`
  flex: 1;
`;

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  sidebar,
  children,
}) => {
  useEffect(() => {
    console.log('SidebarLayout rendered');
  }, []);
  return (
    <SidebarLayoutWrapper>
      <SidebarLayoutSidebar>{sidebar}</SidebarLayoutSidebar>
      <SidebarLayoutContent>{children}</SidebarLayoutContent>
    </SidebarLayoutWrapper>
  );
};
