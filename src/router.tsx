import React from 'react';
// @ts-ignore
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './pages/home';
export interface RouteType {
  routerPath: string;
  pageTitle: string;
  component: React.ComponentType;
  cache?: boolean;
}

// const pathPrefix = pg.homepage;

const routes: RouteType[] = [
  // {
  //   routerPath: '',
  //   pageTitle: 'home',
  //   component: () => (
  //     <div>
  //       <Link to={'example'}>To example</Link>
  //     </div>
  //   )
  // },
  {
    routerPath: 'home',
    pageTitle: '主页',
    component: Home
  }
];

function AppRouter() {
  return (
    <Router>
      {routes.map((route: RouteType, index: number) => {
        return (
          <Route
            // strict={true}
            exact={true}
            path={`/${route.routerPath}`}
            key={index}
            component={route.component}
          />
        );
      })}
      {/* <Redirect to="/" /> */}
    </Router>
  );
}

export default AppRouter;
