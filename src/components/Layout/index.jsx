import React from "react";

import HeaderSection from "./Header";
import FooterSection from "./Footer";
import LoadingSection from "./Loading";

const LayoutComponent = ({ children }) => {
  return (
    <div className="bg-blue-200 w-full">
      {false && <LoadingSection />}

      <HeaderSection />
      <div className="pt-16 pb-16 h-full">{children}</div>
      <FooterSection />
    </div>
  );
};

const withLayout = (Component) => (props) => {
  return (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  );
};

export default withLayout;
