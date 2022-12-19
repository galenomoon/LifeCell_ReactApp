import React from 'react'
import pic_1 from '../../assets/portifolio/pic 1.jpeg'
import pic_2 from '../../assets/portifolio/pic 2.jpeg'
import pic_3 from '../../assets/portifolio/pic 3.jpeg'
import pic_4 from '../../assets/portifolio/pic 4.jpeg'
import pic_5 from '../../assets/portifolio/pic 5.jpeg'
import pic_6 from '../../assets/portifolio/pic 6.jpeg'
import pic_7 from '../../assets/portifolio/pic 7.jpeg'
import pic_8 from '../../assets/portifolio/pic 8.jpeg'
import pic_9 from '../../assets/portifolio/pic 9.jpeg'

export default function Carousel() {
  const images = [
    pic_1,
    pic_2,
    pic_3,
    pic_4,
    pic_5,
    pic_6,
    pic_7,
    pic_8,
    pic_9,
  ]

  return (
    <div class="snap-x flex w-full h-fit py-5 overflow-scroll gap-5">
      {
        images.map((image, index) => (
          <img src={image} key={index} className="md:h-[325px] sm:h-[250px] rounded-2xl snap-center" />
        ))
      }
    </div >
  )
}
