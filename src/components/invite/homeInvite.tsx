import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

const HomeInvite: FC = () => {
  const navigate = useNavigate()

  return(
    <button onClick={() => navigate('0')}>click me</button>
  )
}

export default HomeInvite;
