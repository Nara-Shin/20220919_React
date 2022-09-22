// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from "react";
import { MYBOX, MYBTN } from './css/A04Style'
import { Button, Alert, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { IoIosAirplane } from 'react-icons/io';
import { FcAssistant } from "react-icons/fc";
/*
import styled from 'styled-components';
const MYBOX = styled.div`
  background: ${props => props.color || 'lightgray'};
  color: orange;
  padding: 10px;
  font-size: 24pt;
`;
const MYBTN = styled.button`
background: ${props => props.color || 'lightgray'};
border: 1px solid gray;
padding: 5px;

&:hover {
  background: black;
  color: white;
}
`
*/

function A04StyledComponent() {
  return (
    <div>
      <h3>A04 Styled Component</h3>

      <MYBOX color="black">Hello World</MYBOX>
      <MYBTN>Click</MYBTN>

      <hr />
      <Button color="primary" size="sm">Click</Button>

      <Alert color="primary">Hey! Pay attention.</Alert>

      <Card style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>

      <hr />
      <IoIosAirplane style={{ fontSize: '50pt', color: 'orange' }} />
      <FcAssistant style={{ fontSize: '50pt' }} />
    </div>
  );
}

export default A04StyledComponent;
