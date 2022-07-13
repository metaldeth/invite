import React, {FC} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import InviteRouter from "./invite";

const App: FC = () => {
  return(
    <Routes>
      <Route path='/*' element={<InviteRouter/>}/>
    </Routes>
  )
};

export default App;
