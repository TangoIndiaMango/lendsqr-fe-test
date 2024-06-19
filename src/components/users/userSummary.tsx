import React from "react";
import { usersStats } from "../../lib/navitems";
import CardSummary from "../common/card-summary";

const Usersummary = () => {
  return (
    <div className="user-summary" data-testid="user-summary">
      {usersStats.map((stat) => (
        <React.Fragment key={stat.title}>
          <CardSummary title={stat.title} icon={stat.icon} count={stat.count} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Usersummary;
