import React, { ReactNode } from "react";
import NavigationBar from "../organisms/navigationBar";

interface TJSPageProps {
  children: ReactNode;
}

const TJSPage = ({ children }: TJSPageProps): JSX.Element => {
  return (
    <div className="mx-12 font-heading">
      <NavigationBar />
      {children}
    </div>
  );
};

export default TJSPage;
