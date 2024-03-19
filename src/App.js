import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import Home from './Component/Home.js';
import Success from './Component/Success.js';
import Error from './Component/Error.js';
import ProtectedRoute from './Component/ProtectedRoute.jsx';
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<ProtectedRoute element={<Success/>}/>} />
      <Route path="/*" element={<Error/>} />
     </Routes>
    </div>
  );
}

export default App;
