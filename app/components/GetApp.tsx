import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section id="contact"className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Contact Us</h2>
          <p className="regular-16 text-gray-10">Got a question? Do not hesitate to call.</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* <Button 
              type="button"
              title="Email"
              icon="/email5.svg"
              variant="btn_dark_green_outline"
              full
            />
            <Button 
              type="button"
              title="Instagram"
              icon="/instagram6.svg"
              variant="btn_dark_green_outline"
              full
            />
            <Button 
              type="button"
              title="Facebook"
              icon="/facebook3.svg"
              variant="btn_dark_green_outline"
              full
            /> */}
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">(646)575-6488</h2>
            
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp