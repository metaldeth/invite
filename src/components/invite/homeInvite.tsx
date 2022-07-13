import React, {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const HomeInvite: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('0')
  }, [])

  return(
    <>
      hello home invite
    </>
  )
}

export default HomeInvite;
