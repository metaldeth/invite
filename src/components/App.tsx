import React, {FC} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import InviteRouter from "./invite";
import Gallery from "./Gallery";

const App: FC = () => {
  return(
    <Routes>
      <Route path='/gallery/*' element={<Gallery/>}/>
      <Route path='/*' element={<InviteRouter/>}/>
    </Routes>
  )
};

export default App;
