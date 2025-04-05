
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Usando as imagens reais da escola
const SCHOOL_IMAGES = [
  {
    url: "/lovable-uploads/quadra.png",
    caption: "Evento esportivo na quadra coberta"
  },
  {
    url: "/lovable-uploads/podcast.png",
    caption: "Produção do podcast da escola"
  },
  {
    url: "/lovable-uploads/sustentavel.png",
    caption: "Alunos em atividade de projeto sustentável"
  },
  {
    url: "/lovable-uploads/cartas.png",
    caption: "Estudantes jogando cartas na sala de aula"
  },
  {
    url: "/lovable-uploads/brincar.png",
    caption: "Alunos participando de projeto de economia"
  },
  {
    url: "/lovable-uploads/atividade.png",
    caption: "Atividade cultural na quadra poliesportiva"
  }
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SCHOOL_IMAGES.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SCHOOL_IMAGES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div 
      className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-xl shadow-xl"
      role="region"
      aria-label="Carrossel de imagens da escola"
    >
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <p className="text-gray-600">Carregando imagens...</p>
        </div>
      ) : (
        <>
          {SCHOOL_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all transform duration-700 ${index === currentIndex ? 
                "opacity-100 translate-x-0" : 
                index < currentIndex ? 
                  "opacity-0 -translate-x-full" : 
                  "opacity-0 translate-x-full"
              }`}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm">
                <p className="text-center text-lg font-medium">{image.caption}</p>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 text-escola-azul z-10 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-escola-azul"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 text-escola-azul z-10 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-escola-azul"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            className="absolute bottom-14 left-0 right-0 flex justify-center gap-3"
            role="tablist"
            aria-label="Controles do carrossel"
          >
            {SCHOOL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all ${index === currentIndex ? 
                  "bg-white scale-110" : 
                  "bg-white/50 hover:bg-white/70"}
                  focus:outline-none focus:ring-2 focus:ring-white`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
