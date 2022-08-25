import React, {VFC} from 'react'
import './seatingPlan.scss'
import {seatingPlanConst} from "./seatingPlanConst";

export const SeatingPlan: VFC<{
  inviteId: number
}> = ({inviteId}) => {
  const participantCount = seatingPlanConst.length;

  return(
    <div className='seatingPlanContainer'>
      123
    </div>
  )
}
