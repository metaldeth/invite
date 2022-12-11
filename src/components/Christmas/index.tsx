import {getTimer} from "./timer";
import React, {useEffect, useState} from "react";
import './Christmas.scss'

const Christmas = () => {
  const [timer, setTimer] = useState(getTimer());
  const isHappy = !timer.month && !timer.day && !timer.hours && !timer.minute

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
      {isHappy
        ?
        <div className='happy'>С новым годом</div>
        :
        <div className='notHappy'>
          До нового года осталось
        </div>
      }
      <div className='timer'>
        {
          !!timer.month &&
          <div className='timerItem'>
            <div className='timerHeader'>Месяцев</div>
            <div className='timerSecondary'>{timer.month}</div>
          </div>
        }
        {
          !!timer.day &&
          <div className='timerItem'>
            <div className='timerHeader'>Дней</div>
            <div className='timerSecondary'>{timer.day}</div>
          </div>
        }
        {
          !!timer.hours &&
          <div className='timerItem'>
            <div className='timerHeader'>Часов</div>
            <div className='timerSecondary'>{timer.hours}</div>
          </div>
        }
        {
          !!timer.minute &&
          <div className='timerItem'>
            <div className='timerHeader'>Минут</div>
            <div className='timerSecondary'>{timer.minute}</div>
          </div>
        }
      </div>
    </div>
  )
}

export default Christmas;
