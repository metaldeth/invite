import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {inviteList, RouteInviteParam} from "./inviteConst";

import './inviteCard.scss'
import {getTimer} from "./timer";

const InviteCard: FC = () => {
  const { inviteId = 0 } = useParams<RouteInviteParam>();
  const validateId = Number(inviteId);
  const timer = getTimer();

  if(!inviteId) return null;

  const invite = inviteList[validateId];



  return(
    <>
      <div className='block1'>
        <div className='head'>
          <h1 className='item'>Анна и Александр</h1>
          <h1 className='item'>Нефёдовы</h1>
          {/* TODO: посмотреть что со шрифтами */}
          <span>Разобраться со шрифтами</span>
        </div>
        <h1 className='item'>17.09.2022</h1>
      </div>
      <div className='content'>
        <div className='wrapper'>
          <h1 className='header'>Дорогие {invite?.userList?.map((user, index, array) => {
            const postfix = (index + 1) < array.length ? 'и' : ''
            return(
              <>{`${user.name} ${postfix} `}</>
            )
          })}</h1>
          <div className='diver'/>
          <h3>{invite.caption}</h3>
        </div>
      </div>
      {/* <div className='instruction'>
        instruction
      </div> */}
      <div className='participant'>
        <div className="card">
          <div className="photo1"/>
          <div className="name">Александр</div>
        </div>
        <div className="card">
          <div className="photo2"/>
          <div className="name">Анна</div>
        </div>
      </div>
      <div className='timer'>
        <div className='timerItem'>
          <div className='timerHeader'>Месяцев</div>
          <div className='timerSecondary'>{timer.month}</div>
        </div>
        <div className='timerItem'>
          <div className='timerHeader'>Дней</div>
          <div className='timerSecondary'>{timer.day}</div>
        </div>
        <div className='timerItem'>
          <div className='timerHeader'>Часов</div>
          <div className='timerSecondary'>{timer.hours}</div>
        </div>
        <div className='timerItem'>
          <div className='timerHeader'>Минут</div>
          <div className='timerSecondary'>{timer.minute}</div>
        </div>
      </div>
    </>
  )
}

export default InviteCard;
