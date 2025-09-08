export interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  image?: string
  category: 'concert' | 'festival' | 'formation'
  location: string
  ticketUrl?: string
}

export interface Artist {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface MediaItem {
  id: string
  title: string
  type: 'youtube' | 'soundcloud'
  embedId: string
  thumbnail?: string
  description?: string
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}