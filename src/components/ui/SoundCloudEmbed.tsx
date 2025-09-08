'use client'

interface SoundCloudEmbedProps {
  trackId: string
  title?: string
  className?: string
}

export default function SoundCloudEmbed({ trackId, title, className = '' }: SoundCloudEmbedProps) {
  return (
    <div className={`relative ${className}`}>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23c9a961&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
        title={title || 'SoundCloud audio'}
        className="rounded-lg"
      />
    </div>
  )
}