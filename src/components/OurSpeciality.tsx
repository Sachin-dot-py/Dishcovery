'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { useState, useEffect } from 'react'

const specialDishes = [
  {
    id: "dish1",
    image: "https://ext.same-assets.com/1218719127/3406219459.jpeg",
    name: "Butter Paneer Masala"
  },
  {
    id: "dish2",
    image: "https://ext.same-assets.com/1218719127/2873208029.jpeg",
    name: "Paneer Handi"
  },
  {
    id: "dish3",
    image: "https://ext.same-assets.com/1218719127/2485402333.jpeg",
    name: "Shahi Paneer"
  },
  {
    id: "dish4",
    image: "https://ext.same-assets.com/1218719127/2210756586.jpeg",
    name: "Paneer Lababdar"
  },
  {
    id: "dish5",
    image: "https://ext.same-assets.com/1218719127/1577544410.jpeg",
    name: "Paneer Nafeesi Mughlai"
  }
]

const OurSpeciality = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="p-70 bg1">
      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1 text-center max-w-3xl mx-auto">
            <h2 className="m-title">Our Speciality</h2>
            <p className="mb-6 text-gray-700">
              Naveen's Bapu Ki Kutia is an endeavour to take our guests on a culinary journey of authentic flavours.
              We embrace ourselves to the utmost standards and bring to you innovative catering options and impeccable service.
            </p>
            <h3 className="italic maroon-text text-xl mb-10">
              The chef creates divine combinations.
            </h3>
          </div>

          <div className="col-span-1">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {specialDishes.map((dish) => (
                  <CarouselItem key={dish.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                    <div className="relative overflow-hidden group rounded-md h-60 md:h-72">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nbk-darkBrown/80 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h4 className="text-xl font-medium">{dish.name}</h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-nbk-maroon/70 hover:bg-nbk-maroon text-white absolute left-2 -bottom-14" />
              <CarouselNext className="bg-nbk-maroon/70 hover:bg-nbk-maroon text-white absolute right-2 -bottom-14" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSpeciality
