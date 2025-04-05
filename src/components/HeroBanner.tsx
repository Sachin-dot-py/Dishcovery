'use client'

import { useState, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const heroImages = [
  {
    id: "hero1",
    url: "https://ext.same-assets.com/1218719127/1822307115.jpeg",
    title: "Delicious food",
    subtitle: "THAT WON'T HURT YOUR WALLET"
  },
  {
    id: "hero2",
    url: "https://ext.same-assets.com/1218719127/2997237060.jpeg",
    title: "Authentic Flavors",
    subtitle: "SERVED WITH ROYAL GENEROSITY"
  }
]

const HeroBanner = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Carousel className="w-full h-[50vh] md:h-[70vh] lg:h-[85vh] relative">
      <CarouselContent>
        {heroImages.map((image) => (
          <CarouselItem key={image.id} className="h-full">
            <Card className="h-full border-0 rounded-none">
              <CardContent className="h-full p-0">
                <div
                  className="h-full w-full flex flex-col justify-center items-center text-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image.url}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="container mx-auto px-4 flex flex-col items-center">
                    <h1 className="display-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                      {image.title}
                    </h1>
                    <p className="text-white text-xl sm:text-2xl md:text-3xl tracking-wide">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-nbk-maroon/70 hover:bg-nbk-maroon text-white" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-nbk-maroon/70 hover:bg-nbk-maroon text-white" />
    </Carousel>
  )
}

export default HeroBanner
