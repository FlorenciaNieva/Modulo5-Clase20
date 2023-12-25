import React from 'react'
import { useState, useEffect } from 'react'
import moment from 'moment'

export default function Timer({ timeMode }) {
  const [time, setTime] = useState(timeMode === '24' ? moment().format('HH:mm:ss') : moment().format('hh:mm:ss A'));

  useEffect(() => {
    let intervalTime;
    if (timeMode === '24') {
      intervalTime = setInterval(() => {
      setTime(moment().format('HH:mm:ss'))
    }, 1000);
    } else {
      intervalTime = setInterval(() => {
        setTime(moment().format('hh:mm:ss A'))
      }, 1000);
    }
    return () => {
      clearInterval(intervalTime)
    }
  }, [])


  return (
    <>
      {time}
    </>
  )
}
