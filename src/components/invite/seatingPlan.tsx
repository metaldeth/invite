import React, {useState, VFC} from 'react'
import './seatingPlan.scss'
import {SeatingPlanConst, seatingPlanConst} from "./seatingPlanConst";
import classNames from "classnames";
import {BsFillPersonFill, BsPerson} from "react-icons/bs";

export const SeatingPlan: VFC<{
  inviteId: number
}> = ({inviteId}) => {
  const [clickedItem, setClickedITem] = useState<string | null>(null);

  const renderSeatingItem = (item: SeatingPlanConst) => {
    const isSelect = inviteId === item.inviteId;

    return (
      <div
        className={classNames('item', isSelect && 'selected', clickedItem === item.name && 'clickedITem')}
        onClick={() => setClickedITem(item.name)}
      >
         <BsPerson  size='40px'/>
        {item.smallName}
      </div>
    )
  };

  // один ряд чётные, другой не чётные
  const renderSeatingItems = (type: 'left' | 'right') => {
    const items = seatingPlanConst.filter((_, index) =>
      (index % 2 !== 0 && type === 'left')
      || (index % 2 === 0 && type === 'right'));

    return (
      <div className='items'>
        {items.map((item, index) => renderSeatingItem(item))}
      </div>
    )
  };

  const renderSelectedItem = () => <>{clickedItem && <div className='clickedItem'>{clickedItem}</div>}</>

  // главный стол
  const renderNewlywedsItem = () =>
    <div className='newlywedsWrapper'>
      <div
        className={classNames('item', clickedItem === 'Нефёдов Александр' && 'clickedITem')}
        onClick={() => setClickedITem('Нефёдов Александр')}
      > <BsPerson  size='40px'/>Жених</div>
      <div
        className={classNames('item', clickedItem === 'Нефёдова Анна' && 'clickedITem')}
        onClick={() => setClickedITem('Нефёдова Анна')}
      > <BsPerson  size='40px'/>Невеста</div>
    </div>

  return(
    <div className='seatingPlanContainer'>
      {renderNewlywedsItem()}
      <div className='seatingPlanWrapper'>
        {renderSeatingItems('left')}
        <div className='table'><div className='table2'>{renderSelectedItem()}</div></div>
        {renderSeatingItems('right')}
      </div>
    </div>
  )
}
