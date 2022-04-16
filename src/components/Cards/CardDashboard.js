// reactstrap components

import { Container } from "reactstrap";
import CardDescriptionValue from "./CardDescriptionValue";
import { formatDistanceToNow } from "date-fns";
import * as locales from "react-date-range/dist/locale";

const CardDashboard = ({sales , lastActivity}) => {
  const toKnowLastActivity = (date) => {
    let lastModified = "";
    if (typeof date !== "undefined") {
      lastModified = formatDistanceToNow(date, {
        addSuffix: true,
        locale: locales["en"],
      });
      lastModified =
        lastModified.charAt(0).toUpperCase() + lastModified.slice(1);
    }
    return lastModified;
  };
  return (
    <Container className="header pb-2 pt-2 bg-gradient-info" fluid>
      <CardDescriptionValue
        name="BUDGET SPENT / BUDGET FORECAST"
        value={`${sales?.[0]?.realValue || 0} Ar/${sales?.[0]?.sale || 0} Ar`}
        date={toKnowLastActivity(lastActivity)}
        percent={(sales?.[0]?.realValue/sales?.[0]?.sale ) * 100 || 100}
      />
    </Container>
  );
};

export default CardDashboard;
