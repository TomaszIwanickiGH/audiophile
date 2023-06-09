import React, { useState } from 'react'
import { MainProduct, Devices, MainDescription, SectionImages } from '../components'
import { images, styles } from '../constants'

const HeadphonesWrapper = () => {
  const [currentProduct, setCurrentProduct] = useState({ id: 1, price: '$ 399.99', image: images.Hmain, title: 'XX99 MARK II' })

  return (
    <section>
      <MainProduct id={currentProduct.id} image={currentProduct.image} price={currentProduct.price} title={currentProduct.title} />
      <MainDescription />
      <SectionImages image1={images.Hman} image2={images.Hlaptop} image3={images.Hmain} />
      <div className={`${styles.padding} mx-auto flex flex-col mb-[-4rem]`}>
        <h2 className="text-primary text-center text-[36px] font-[500]">YOU MAY ALSO LIKE</h2>
        <div className="flex lg:flex-row flex-col items-center justify-between mt-16 gap-4">
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.HEX1} alt="hex1" className="w-[230px] px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">XX99 MARK I</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 2, price: '$ 289.99', image: images.HEX1, title: 'XX MARK I' })
              }}
            >
              See Product
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.HEX2} alt="hex2" className="w-[230px] px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">XX59</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 3, price: '$ 349.99', image: images.HEX2, title: 'XX59' })
              }}
            >
              See Product
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.HEX3} alt="hex3" className="w-full px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">X21 GEN 7</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 4, price: '$ 299.99', image: images.HEX3, title: 'X21 GEN 7' })
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>
      <Devices />
    </section>
  )
}

export default HeadphonesWrapper
