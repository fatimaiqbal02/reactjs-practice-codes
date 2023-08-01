import React from 'react'

export default function Card(props) {

  let badgetext
  if(props.openspots === 0){
    badgetext = "SOLD OUT"
  } else if(props.location === "Online"){
    badgetext = "ONLINE"
  }

  return (
    <div className='card-details'>
      {/*props.openspots === 0 && <div className="card-badge">SOLD OUT</div>*/}

      {badgetext && <div className="card-badge">{badgetext}</div>}
      <img src={props.img} alt="" />
      <div className='details'>
        <p className='top-line'><i className="fa-solid fa-star"></i>{props.rating} <span> ({props.reviewCount}) &#x2022; {props.country}</span></p>
        <p className='header-line'>{props.title}</p>
        <p className='price'><span>From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}

/* props.item.coverImg, props.item.title, props.item.stats.rating */
/* props.coverImg, props.title, props.stats.rating */