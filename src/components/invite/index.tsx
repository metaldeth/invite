import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import InviteCard from "./inviteCard";
import HomeInvite from "./homeInvite";

const InviteRouter: FC = () => {
  return(
    <Routes>
      <Route path=':inviteId' element={<InviteCard/>}/>
       <Route path='/' element={<HomeInvite/>}/> 
    </Routes>
  )
}

export default InviteRouter;
