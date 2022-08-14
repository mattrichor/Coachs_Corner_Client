import React from 'react'
import { useState, useEffect, createRef } from 'react'

const PlayerCard = (props) => {
  return <div className="players">{props.name}</div>
}

export default PlayerCard
