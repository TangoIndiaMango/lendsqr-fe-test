/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { SearchProvider } from "../hooks/SearchContext";
import Header from "./header";
import Sidebar from "./sidebar";

const withMainLayout = (component: React.ComponentType) => {
  const Wrapper = (...props: any) => {
    const Component = component;
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
    return (
      <SearchProvider>
        <main className="dashboard-container">
          <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
          <section className="side-content">
            <Sidebar showSidebar={showSidebar} />
            <div className="dashboard">
              <div className="content">
                <Component {...props} />
              </div>
            </div>
          </section>
        </main>
      </SearchProvider>
    );
  };

  return Wrapper;
};

export default withMainLayout;
