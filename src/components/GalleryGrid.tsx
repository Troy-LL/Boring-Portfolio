'use client';

import { useState } from 'react';
import { X, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const VideoCard = dynamic(() => import('./VideoCard'), { ssr: false });

interface MediaItem {
  type: string;
  src: string;
  title: string;
  date: string;
  colSpan?: string;
}

export default function GalleryGrid({ items }: { items: MediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Close modal on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedItem(null);
  };

  return (
    <>
      {/* Gallery Dense Grid (Maintains emphasis sizes) */}
      <div className="grid grid-cols-3 grid-flow-row-dense auto-rows-[100px] sm:auto-rows-[150px] md:auto-rows-[250px] gap-3 md:gap-6">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`group relative overflow-hidden bg-muted/20 border border-muted/30 rounded-lg ${item.type === 'image' ? 'cursor-pointer' : ''} ${item.colSpan || ''}`}
            onClick={() => {
              if (item.type === 'image') setSelectedItem(item);
            }}
          >
            {item.type === 'video' ? (
              <VideoCard src={item.src} />
            ) : (
              <Image
                src={encodeURI(item.src)}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                loading="lazy"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-col gap-0.5 md:gap-1 z-20">
              <span className="text-[7px] md:text-[10px] uppercase tracking-widest text-silver/80 font-mono drop-shadow-md">
                {item.date}
              </span>
              <p className="text-xs md:text-sm font-bold text-white tracking-wide leading-tight drop-shadow-md line-clamp-2 md:line-clamp-none">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-12"
          onClick={() => setSelectedItem(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-2 bg-muted/50 hover:bg-muted text-white rounded-full transition-colors z-[60]"
            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content container */}
          <div 
            className="relative w-full max-h-full flex flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking on media
          >
            {selectedItem.type === 'video' ? (
              <video
                src={encodeURI(selectedItem.src)}
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border border-muted/50 outline-none"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <div className="relative w-[95vw] md:w-[60vw] h-[80vh]">
                <Image
                  src={encodeURI(selectedItem.src)}
                  alt={selectedItem.title}
                  fill
                  className="rounded-lg shadow-2xl object-contain border border-muted/50"
                  priority
                />
              </div>
            )}

            {/* Captions inside modal */}
            <div className="flex flex-col items-center justify-center mt-6 text-center max-w-2xl px-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                {selectedItem.title}
              </h3>
              <p className="text-sm font-mono text-muted-foreground mt-2 uppercase tracking-widest border border-muted/30 px-3 py-1 rounded inline-block">
                {selectedItem.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
