import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {inviteList, inviteText, RouteInviteParam, startPosition, taskList} from "./inviteConst";

import './inviteCard.scss'
import {getTimer} from "./timer";
import {YandexMap} from "../YandexMap";
import {SeatingPlan} from "./seatingPlan";

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
          <div className="leo"/>
          <h1 className='item'>Анна и Александр</h1>
          <h1 className='item'>Нефёдовы</h1>
          {/*<span>Наплывает при переворачивании экрана на телефоне</span>*/}
        </div>
        <h1 className='item'>17.09.2022</h1>
      </div>
      <div className='content'>
        <div className='wrapper'>
          <h1 className='header'>{
            (invite.userList.length === 1) ? invite?.isWoman ? 'Дорогая' : 'Дорогой' : 'Дорогие'}
            {invite.userList.map((user, index, array) =>{
              return (
                <>{` ${user.name} ${(index + 1) < array.length ? 'и' : ''}`}</>
              )
            })}
          </h1>
          <div className='diver'/>
          <h3 className='inviteText'>{inviteText}</h3>
          <h3 className='inviteText'>{`
            Ждём ${(invite.userList.length === 1) ? 'тебя' : 'вас'} 
            ${startPosition[invite.locationId]?.time}
            ${startPosition[invite.locationId]?.position}
          `}</h3>
        </div>
      </div>
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
      <div className="instruction">
        <h1 className="headerLabel">План мероприятия</h1>
        {taskList.map(item => (
          <div className="instructionItem">
            <div className="instructionItem-substring">{item.caption}</div>
            <div className="instructionItem-substring">{item.time}</div>
            <div className="instructionItem-substring">{item.address}</div>
          </div>
        ))}
        {invite.locationId !== 3 && <h3>Автобус выезжает в 23:00 в п. Прохладный, далее в г. Екатеринбург ул. Калинина д. 59</h3>}
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
      {/*<SeatingPlan inviteId={validateId}/>*/}
      <div className="footer">
        <a href="http://metaldeth.ru:8080/" target="_blank">
          <div className='itemFirst'>Наши фоточки</div>
          <div className='itemLast'>Нажми на меня</div>
        </a>
      </div>
      {/*<YandexMap/>*/}
    </>
  )
}

export default InviteCard;
