// reactstrap components

import { Container } from "reactstrap";
import CardDescriptionValue from "./CardDescriptionValue";
import { formatDistanceToNow } from "date-fns";
import * as locales from "react-date-range/dist/locale";

const CardDashboard = () => {
  const toKnowLastActivity = (date) => {
    let lastModified = "";
    if (typeof date !== "undefined") {
      lastModified = formatDistanceToNow(new Date(date), {
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
        name="BUDGET SPENT"
        value="12000Ar / 50000Ar"
        date={toKnowLastActivity(new Date())}
        percent="12"
      />
    </Container>
  );
};

export default CardDashboard;
