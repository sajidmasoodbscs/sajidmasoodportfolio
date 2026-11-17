import { useState } from 'react';
import { Play } from 'lucide-react';

const VIDEO_ID = 'Z1Tu4ZOBOA0';

const IntroVideo = () => {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`
  );

  return (
    <div id="intro" className="intro-video scroll-mt-28">
      <div className="relative aspect-video overflow-hidden rounded-[1.75rem] border border-white/80 bg-slate-950 shadow-elegant">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Sajid Masood — a short intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer text-left"
            aria-label="Play intro video"
          >
            <img
              src={thumb}
              alt=""
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              onError={() =>
                setThumb(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`)
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-slate-950/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="primary-gradient flex h-16 w-16 items-center justify-center rounded-full text-white shadow-primary ring-4 ring-white/30 transition duration-300 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-current" />
              </span>
              <span className="rounded-full bg-slate-950/55 px-3 py-1 text-sm font-medium tracking-wide text-white backdrop-blur-sm">
                Play intro
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default IntroVideo;
