

export default function Video() {
  return (
    <div className="w-full max-w-4xl rounded-xl border border-white/80 bg-white/45 p-1.5 pb-0 opacity-50 shadow-[0_18px_50px_rgba(15,118,110,0.16)] backdrop-blur-sm [mask-image:radial-gradient(ellipse_at_center,black_62%,rgba(0,0,0,0.96)_74%,rgba(0,0,0,0.68)_88%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_62%,rgba(0,0,0,0.96)_74%,rgba(0,0,0,0.68)_88%,transparent_100%)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]">
      <video
        className="block aspect-video w-full rounded-lg bg-slate-100 object-cover shadow-sm py-3"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/jobTrackFast.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


