import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image 
          src="/tools.png"
          alt="tools"
          width={350}
          height={350}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}

        <h1 className=" text-[#3D3839] bold-52 lg:bold-88">Your Friendly Neighborhood Handymen</h1>
        <p className="regular-16 mt-6 text-[#FFC604] xl:max-w-[520px]">
         At L.F HandyWorks we pride ourselves on being a team of honest, hardworking professionals, dedicated to delivering quality workmanship at a moment's notice. With a steadfast commitment to excellence, 
         we approach every project with integrity and diligence, ensuring that our clients' visions are realized to perfection.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            100 + 
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href="#contact">
          <Button
            type="button" 
            title="Get Free Quote " 
            variant="btn_dark_green" 
          />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[650px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-4">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">New York </p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Email Us</p>
              <p className="bold-20 text-white">LFHandyWorks@gmail.com</p>
            </div> 

             <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Call Us</p>
              <p className="bold-20 text-white">(646)575-6488</p>
            </div> 


          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero