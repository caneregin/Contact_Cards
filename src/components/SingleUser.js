import React from 'react'
import "../App.css"

const SingleUser = ({ item }) => {
  return (
    <div className='card'>
      <div className='user-left-img'>
        <img src={item.picture.medium} />
      </div>
      <div className='user-right'>
        <p><span>{item.id.name}</span><span>{item.id.value}</span></p>
        <p><span>{item.name.title}</span><span>{item.name.first}</span>&nbsp;<span>{item.name.last}</span></p>
        <p><span>{item.phone}</span></p>
        <p><span>{item.location.country}</span></p>
      </div>
    <div className='user-temp'></div>
    </div>
  )
}

export default SingleUser