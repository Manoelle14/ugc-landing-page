"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote:
        "Travailler avec FlipSide a transformé notre présence sur les réseaux sociaux. Le contenu authentique qu'ils ont créé nous a aidé à augmenter l'engagement de 215% et a entraîné une hausse significative des conversions.",
      author: "Sarah Johnson",
      title: "Directrice Marketing, BeautyBrand",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Le ROI que nous avons constaté grâce à nos campagnes UGC a été incroyable. Ce qui prenait des mois avec du contenu traditionnel se produit maintenant en quelques jours, et les résultats parlent d'eux-mêmes.",
      author: "Michael Chen",
      title: "Responsable E-commerce, TechGadgets",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "En tant que marque DTC, l'authenticité est tout pour nous. FlipSide nous a aidé à constituer une bibliothèque de contenu client authentique qui résonne avec notre audience d'une manière que les séances professionnelles ne pourraient jamais atteindre.",
      author: "Emma Rodriguez",
      title: "Fondatrice, EcoEssentials",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="w-full flex-shrink-0 border-none shadow-none">
                <CardContent className="flex flex-col items-center p-6 text-center sm:p-10">
                  <Quote className="h-12 w-12 text-primary/20" />
                  <p className="mt-4 text-xl font-medium leading-relaxed md:text-2xl">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              className={`h-2 w-2 rounded-full p-0 ${i === current ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrent(i)}
            >
              <span className="sr-only">Aller à la diapositive {i + 1}</span>
            </Button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background shadow-sm"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Diapositive précédente</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background shadow-sm"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Diapositive suivante</span>
        </Button>
      </div>
    </div>
  )
}
