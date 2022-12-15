import React, {FC} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Christmas from "./Christmas";
import Game from "./Game";

const App: FC = () => {
  return(
    <Routes>
      <Route path='/*' element={<Christmas/>}/>
      <Route path='/game/*' element={<Game/>}/>
    </Routes>
  )
};

export default App;
