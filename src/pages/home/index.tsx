import React from 'react';
import { withRouter } from 'react-router';
// import Api from '../../lib/api';
// import useDocumentTitle from '../../utils/useDocumentTitle';

const Home = withRouter(({ location, history }) => {
  //   useDocumentTitle('ExamplePage', location);
  return <div>hello world!</div>;
});

export default Home;
