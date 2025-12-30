import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Client {
  id: number;
  name: string;
  url: string;
}

const clients: Client[] = [
  { id: 1, name: 'Cliente 1', url: 'https://rcwinnovation.com/' },
  { id: 2, name: 'Cliente 2', url: 'https://rcwinnovation.com/' },
  { id: 3, name: 'Cliente 3', url: 'https://rcwinnovation.com/' },
  { id: 4, name: 'Cliente 4', url: 'https://rcwinnovation.com/' },
  { id: 5, name: 'Cliente 5', url: 'https://rcwinnovation.com/' },
  { id: 6, name: 'Cliente 6', url: 'https://rcwinnovation.com/' },
  { id: 7, name: 'Cliente 7', url: 'https://rcwinnovation.com/' },
  { id: 8, name: 'Cliente 8', url: 'https://rcwinnovation.com/' },
];

const LogoPlaceholder = ({ name }: { name: string }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect width="120" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
    <text
      x="60"
      y="24"
      textAnchor="middle"
      fill="currentColor"
      fillOpacity="0.5"
      fontSize="10"
      fontWeight="500"
    >
      {name}
    </text>
  </svg>
);

export const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-border/20">
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
            Clientes que confían en nosotros
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empresas que han crecido con <span className="text-gradient-blue">RCW Innovation</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 md:gap-12"
          animate={{
            x: isPaused ? undefined : [0, -1920],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {/* Double the clients for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <a
              key={`${client.id}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-32 md:w-40 h-12 md:h-14 flex items-center justify-center 
                         text-muted-foreground/60 hover:text-foreground/80 
                         transition-all duration-300 hover:scale-110
                         filter grayscale hover:grayscale-0"
              aria-label={`Visitar sitio de ${client.name}`}
            >
              <LogoPlaceholder name={client.name} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Static grid for mobile */}
      <div className="container-custom mt-8 md:hidden">
        <div className="grid grid-cols-4 gap-4">
          {clients.map((client) => (
            <a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 flex items-center justify-center 
                         text-muted-foreground/60 hover:text-foreground/80 
                         transition-all duration-300"
              aria-label={`Visitar sitio de ${client.name}`}
            >
              <LogoPlaceholder name={client.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
