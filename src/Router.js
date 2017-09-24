import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './Views/CommunityPage';
import BoardPage from './Views/BoardPage';
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginBottom: 0 }}>
      <Scene key="main" >
        <Scene key="home" component={Home} hideNavBar initial />
        <Scene key="board" component={BoardPage}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
