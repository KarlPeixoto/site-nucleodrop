 "use client";
 
 import { useMemo } from 'react';
 
 type ParticleInfo = {
   count: number;
   minSize: number;
   maxSize: number;
   animation: string;
 };
 
 const particleLayers: ParticleInfo[] = [
   { count: 15, minSize: 15, maxSize: 25, animation: 'floatSlow' },
   { count: 25, minSize: 6, maxSize: 12, animation: 'floatMedium' },
   { count: 50, minSize: 3, maxSize: 6, animation: 'floatFast' },
 ];
 
 function generateParticles(
   { count, minSize, maxSize, animation }: ParticleInfo,
   containerHeight: number
 ) {
   return Array.from({ length: count }, (_, i) => {
     const size = Math.random() * (maxSize - minSize) + minSize;
     const top = Math.random() * containerHeight;
     const left = Math.random() * 95; // horizontal %
     const delay = Math.random() * 5;
     const duration = Math.random() * 5 + 5;
 
     return (
       <div
         key={`${animation}-${i}`}
         className={`floating-dot ${animation}`}
         style={{
           width: `${size}px`,
           height: `${size}px`,
           top: `${top}px`,
           left: `${left}%`,
           animationDelay: `${delay}s`,
           animationDuration: `${duration}s`,
         }}
       />
     );
   });
 }
 
 export function ParticlesBackground() {
   // Um valor alto para garantir que cubra toda a página.
   // Uma abordagem mais robusta poderia usar um ref no <main> para obter a altura real,
   // mas para uma landing page, um valor fixo grande costuma ser suficiente e mais performático.
   const containerHeight = 4000;
 
   const particles = useMemo(
     () => particleLayers.flatMap((layer) => generateParticles(layer, containerHeight)),
     // A dependência está vazia para que as partículas sejam geradas apenas uma vez.
     // eslint-disable-next-line react-hooks/exhaustive-deps
     []
   );
 
   return <>{particles}</>;
 }