export interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: 'youtube' | 'soundcloud' | 'gallery';
  embedId: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
  date: string;
}