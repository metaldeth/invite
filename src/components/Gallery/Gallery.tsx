import React from "react";

import './Gallery.scss'

const listOfImageSrc = [
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4616.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4622.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4622.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4636.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4649.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4662.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4686.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4698.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4699.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4709.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4746.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4750.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4783.jpg',
  'https://metaldeth.hb.bizmrg.com/photo/photo/IMG_4804.jpg',

]
export const Gallery = () => {
  const ttt = 0;

  return (
    <>
      <h1 className="header">Нефедовы <span>Loading...</span></h1>
      <div className='gallery'>
        {listOfImageSrc.map(item => <div className="gallery__item"><img src={item} alt="Alt"/></div>)}
      </div>
      {/*{listOfImageSrc.map(item => <img src={item}/>)}*/}
    </>
  )
}