import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ExclusiveCarousel from "./Home/ExclusiveCarousel";

const slider = [
  {
    id:1,
    name:"Irfan",
    title: "My MBBS dream becomes real with UneFly.",
    description: "World-class medical education with excellent clinical exposure. The teaching hospital provides invaluable practical experience. Couldn't have asked for better training."
  },
  {
    id:2,
    name:"Michael Chen",
    title: "Seamless Experience.",
    description: "The business program here is truly exceptional. It offers great networking opportunities, features amazing professors, and provides top-notch campus facilities for students. I would highly recommend this experience to everyone.",
  },
  {
    id:3,
    name:"Emily Rodriguez",
    title: "Special thanks to UneFly.",
    description: "Great academic programs and excellent placement support. The library and labs are well-equipped. Campus life is vibrant with many clubs and activities."
  },
  {
    id:4,
    name:"David Patel",
    title: "UneFly made my Dream real.",
    description: "Outstanding faculty and state-of-the-art facilities. The hands-on learning approach and industry connections have prepared me well for my career."
  },
  {
    id:5,
    name:"Shreya Mishra",
    title: "Thanks UneFly.",
    description: "Excellent law program with great moot court opportunities. The faculty includes renowned legal experts, and the placement cell is very supportive."
  },

]

const CarouselOrientation = ({setReadFeedback, sendData}) => {
  

  return (
    <Carousel
      opts={{
        align: "start"
      }}
      className="w-full lg:px-8"
    >
      <CarouselContent className="-mt-1 lg:w-auto md:w-auto w-80">
        {slider.map((item, index) => (
          <CarouselItem key={index} className="pt-1 lg:basis-1/3 md:basis-1/2">
            <div onClick={()=>sendData({
              id: item.id,
              title: item.title,
              name: item.name,
              description: item.description
            })} id={item.id} className="lg:px-3 px-2">
              <ExclusiveCarousel setReadFeedback={setReadFeedback} title={item.title} description={item.description} userName={item.name} />
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