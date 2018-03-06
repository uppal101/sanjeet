import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';

const hobbyList = () => (
<div class="list">
  <ListGroup>
    <ListGroupItem bsStyle="info">A recent hobby of mine has been finding/cooking new healthy recipes</ListGroupItem>
    <ListGroupItem bsStyle="warning">Also I've recently been enjoying exploring new hikes (by no means am I a professional)</ListGroupItem>
    <ListGroupItem bsStyle="info">One huge thing to know about me is I am a foody I love exploring new restaurants and cuisines (I do it for the gram)</ListGroupItem>
  </ListGroup>
</div>
);

export default hobbyList;
