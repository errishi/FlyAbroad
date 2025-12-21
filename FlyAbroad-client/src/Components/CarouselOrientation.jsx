import React, { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ExclusiveCarousel from "./Home/ExclusiveCarousel";
import Autoplay from "embla-carousel-autoplay";

const slider = [
  {
    title: "Product Management Basic - Course",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 380,
    studentsEnroll: 40,
    mrp: 500,
    image: "/image-1.svg"
  },

  {
    title: "Product Management Basic - Course",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 380,
    studentsEnroll: 40,
    mrp: 500,
    image: "/image-2.svg"
  },

  {
    title: "Product Management Basic - Course",
    description: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    price: 380,
    studentsEnroll: 40,
    mrp: 500,
    image: "/image-3.svg"
  }
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
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true
      }}
      orientation="horizontal"
      className="w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent className="-mt-1 lg:h-80 h-auto lg:w-650">
        {slider.map((item, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <ExclusiveCarousel title={item.title} description={item.description} price={item.price} mrp={item.mrp} studentsEnroll={item.studentsEnroll} image={item.image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselOrientation;