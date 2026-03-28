'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function VideoCard({ src }: { src: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={encodeURI(src)}
        className="w-full h-full object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
        autoPlay
        loop
        muted
        playsInline
      />
      <button 
        onClick={toggleMute}
        className="absolute top-4 right-4 p-2.5 bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-all z-20"
        title={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </>
  );
}
