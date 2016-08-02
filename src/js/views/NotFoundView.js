import React from 'react';
import { Link } from 'react-router';

const NotFoundView = () => (
	<div>
    <h1>This is a demo 404 page!</h1>
    <hr />
    <Link to='/'>Back To Home View</Link>
  </div>
);

export default NotFoundView;