import React, {FC} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import InviteRouter from "./invite";
import Christmas from "./Christmas";

const App: FC = () => {
  return(
    <Routes>
      <Route path='/*' element={<Christmas/>}/>
    </Routes>
  )
};

export default App;
