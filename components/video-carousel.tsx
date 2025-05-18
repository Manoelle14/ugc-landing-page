"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

// Fonction pour extraire l'ID d'une vidéo YouTube à partir de son URL
const extractYouTubeId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ""
}

// Données des vidéos
const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/shorts/W-PKAWPksEY",
    title: "UGC Créatif",
  },
  {
    id: 2,
    url: "https://youtube.com/shorts/O-dL3BLGb1E",
    title: "Contenu Authentique",
  },
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [aspectRatio, setAspectRatio] = useState("16/9")

  // Détecter l'orientation de l'écran pour ajuster le ratio d'aspect
  useEffect(() => {
    const updateAspectRatio = () => {
      const isMobile = window.innerWidth < 768
      // Pour les appareils mobiles, utiliser un ratio plus vertical pour les shorts
      setAspectRatio(isMobile ? "9/16" : "16/9")
    }

    updateAspectRatio()
    window.addEventListener("resize", updateAspectRatio)
    return () => window.removeEventListener("resize", updateAspectRatio)
  }, [])

  const handleNext = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const handlePrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const currentVideo = videos[currentIndex]
  const videoId = extractYouTubeId(currentVideo.url)

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-lg">
      {/* Conteneur principal avec ratio d'aspect dynamique */}
      <div ref={videoContainerRef} className="relative w-full" style={{ aspectRatio }}>
        {isPlaying ? (
          // Vidéo en cours de lecture
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
            title={currentVideo.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        ) : (
          // Miniature avec bouton de lecture
          <div className="absolute inset-0">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={currentVideo.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to hqdefault if maxresdefault is not available
                ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              }}
            />

            {/* Overlay sombre avec bouton de lecture */}
            <div
              className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
              onClick={togglePlay}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation() // Empêcher la propagation de l'événement
                  togglePlay()
                }}
                className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-105"
                aria-label="Lire la vidéo"
              >
                <Play className="h-10 w-10 fill-primary pl-1 text-primary transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Titre de la vidéo */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-medium">{currentVideo.title}</h3>
            </div>
          </div>
        )}
      </div>

      {/* Flèches de navigation */}
      <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="h-12 w-12 rounded-full bg-white/80 text-gray-800 shadow-lg transition-transform hover:scale-105 hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Vidéo précédente</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="h-12 w-12 rounded-full bg-white/80 text-gray-800 shadow-lg transition-transform hover:scale-105 hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Vidéo suivante</span>
        </Button>
      </div>

      {/* Indicateurs de progression discrets */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-white" : "w-1.5 bg-white/40"
            }`}
            onClick={() => {
              setIsPlaying(false)
              setCurrentIndex(index)
            }}
          >
            <span className="sr-only">Vidéo {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
