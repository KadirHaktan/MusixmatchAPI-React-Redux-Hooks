import React from "react";
import Track from "../Track/Track";
import Track10 from "../Track/Track10";
import Navi from "../Navi/Navi";
import Lyrics from "../Lyrics/Lyrics";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Card,
  CardBody,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function App() {
  return (
    <div>
      <Navi />
      <Container>
        <div className="col-md-12 center-block">
          <h1 className="display-6 text-center">
            <FontAwesomeIcon icon={faCompactDisc} /> Options
          </h1>
        </div>
        <Card body inverse className="card mb-4 shadow-sm">
          <CardBody className="card-body">
            <CardText style={{ color: "black" }}>
              <ListGroup>
                <ListGroupItem>
                  <Link to="/track/search">Search</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/track/10">Top10</Link>
                </ListGroupItem>
              </ListGroup>
            </CardText>
          </CardBody>
        </Card>
      </Container>

      <Switch>
        <Route path="/track/search" exact component={Track} />
        <Route path="/track/10" exact component={Track10} />
        <Route path="/lyrics/track/:id" exact component={Lyrics}/>
      </Switch>
    </div>
  );
}

export default App;
