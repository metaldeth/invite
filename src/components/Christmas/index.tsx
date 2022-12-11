import {getTimer} from "./timer";
import React, {useEffect, useState} from "react";
import './Christmas.scss'

const Christmas = () => {
  const [timer, setTimer] = useState(getTimer())

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(getTimer())
    }, 1000);

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className='Christmas'>
      <div>
        <h1>До нового года осталось</h1>
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
    </div>
  )
}

export default Christmas;
