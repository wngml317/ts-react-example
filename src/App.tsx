import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import SideBar from './component/navigation/SideBar';
import Counter from './page/Counter';
import Todo from './page/Todo';
import Chart from './page/Chart';
import Map from './page/Map';
import MapApp from './component/map/MapApp';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    margin: 0
  }
`;
const Main = styled.div`
  display: flex;
`
function App() {
  return (
    // <MapApp />
    <div>
      <GlobalStyle />
      <Main>
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
