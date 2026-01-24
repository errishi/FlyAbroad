import React, { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ExclusiveCarousel from "./Home/ExclusiveCarousel";
import Autoplay from "embla-carousel-autoplay";

const slider = [
  {
    name:"Irfan",
    title: "My MBBS dream becomes real with FlyAbroad.",
    description: "World-class medical education with excellent clinical exposure. The teaching hospital provides invaluable practical experience. Couldn't have asked for better training."
  },
  {
    name:"Michael Chen",
    title: "Seamless Experience.",
    description: "The business program here is truly exceptional. It offers great networking opportunities, features amazing professors, and provides top-notch campus facilities for students. I would highly recommend this experience to everyone.",
  },
  {
    name:"Emily Rodriguez",
    title: "Special thanks to FlyAbroad.",
    description: "Great academic programs and excellent placement support. The library and labs are well-equipped. Campus life is vibrant with many clubs and activities."
  },
  {
    name:"David Patel",
    title: "FlyAbroad made my Dream real.",
    description: "Outstanding faculty and state-of-the-art facilities. The hands-on learning approach and industry connections have prepared me well for my career."
  },
  {
    name:"Shreya Mishra",
    title: "Thanks FlyAbroad.",
    description: "Excellent law program with great moot court opportunities. The faculty includes renowned legal experts, and the placement cell is very supportive."
  },

]

const CarouselOrientation = () => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true
    })
  );

  return (
    <Carousel
      // plugins={[plugin.current]}
      opts={{
        align: "start"
      }}
      // orientation="horizontal"
      className="w-full lg:px-8"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.play}
    >
      <CarouselContent className="-mt-1 lg:w-auto md:w-auto w-80">
        {slider.map((item, index) => (
          <CarouselItem key={index} className="pt-1 lg:basis-1/3 md:basis-1/2">
            <div className="lg:px-3 px-2">
              <ExclusiveCarousel title={item.title} description={item.description} userName={item.name} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="lg:block hidden">
      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel>
  )
}

export default CarouselOrientation;