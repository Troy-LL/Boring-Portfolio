import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';

const GALLERY_MEDIA = [
  {
    type: 'video',
    src: '/images/gallery/Research Intro Video (March 17).MOV',
    title: 'Research Intro',
    date: 'March 17',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    type: 'image',
    src: '/images/gallery/ASEAN AI Challenge Build Sprint (March 22).jpg',
    title: 'ASEAN AI Challenge Build Sprint',
    date: 'March 22',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Tech A Muna AI Discussion (Januray 28).jpg',
    title: 'Tech A Muna AI Discussion',
    date: 'January 28',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    type: 'image',
    src: '/images/gallery/AI Safety Webinar (December).jpg',
    title: 'AI Safety Webinar',
    date: 'December',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'video',
    src: '/images/gallery/Developer camp (March 6).MOV',
    title: 'Developer Camp',
    date: 'March 6',
    colSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/AI Workshop (Nov 30).jpg',
    title: 'AI Workshop',
    date: 'Nov 30',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    type: 'image',
    src: '/images/gallery/Cafe Cursor (March 14).jpg',
    title: 'Cafe Cursor',
    date: 'March 14',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/ASES @ UPSCALE (March).jpg',
    title: 'ASES @ UPSCALE',
    date: 'March',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Developer Camp 2ND Day (March 7).jpg',
    title: 'Developer Camp 2nd Day',
    date: 'March 7',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    type: 'image',
    src: '/images/gallery/Giro AI & Seekers (March 26).jpg',
    title: 'Giro AI & Seekers',
    date: 'March 26',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Developer Camp Day 3 (March 8).jpg',
    title: 'Developer Camp Day 3',
    date: 'March 8',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Hosted an event for Seekers Match & Hatch (Nov 13).jpg',
    title: 'Hosted Seekers Match & Hatch',
    date: 'Nov 13',
    colSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Hypetribe (Oct).jpg',
    title: 'Hypetribe',
    date: 'Oct',
    colSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    type: 'image',
    src: '/images/gallery/Kickstart (December 3).jpg',
    title: 'Kickstart',
    date: 'December 3',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Kickstart (February).jpg',
    title: 'Kickstart',
    date: 'February',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Seekers Guild Monthly Meetup (Feb 22).jpg',
    title: 'Seekers Guild Monthly Meetup',
    date: 'Feb 22',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    type: 'image',
    src: '/images/gallery/Hypetribe Networking Event (Oct).jpg',
    title: 'Hypetribe Networking Event',
    date: 'Oct',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Pre Planning ASEAN AI Build Sprint (March 21).jpg',
    title: 'Pre Planning ASEAN AI Build Sprint',
    date: 'March 21',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    type: 'image',
    src: '/images/gallery/Student Leader VPs and Presidents (December 1).jpg',
    title: 'Student Leader VPs & Presidents',
    date: 'December 1',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
];

export const metadata = {
  title: 'TL | Gallery',
  description: 'Community events, speaking engagements, and behind the scenes.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-8 selection:bg-accent selection:text-foreground">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>

        {/* Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Moments & <span className="text-gray-cool">Memories.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A visual journal of hackathons, speaking engagements, and the community 
            that makes building in tech worthwhile.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid items={GALLERY_MEDIA} />
      </div>
    </main>
  );
}
