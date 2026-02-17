import Image from "next/image";

export default function Home() {
  const images = [
    "/IMG_3990.JPG.jpeg",
    "/IMG_4114.JPEG",
    "/IMG_4275.JPEG",
    "/IMG_4600.JPG.jpeg",
    "/IMG_4601.JPG.jpeg",
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-60px)] md:h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* Top Text - Nripendra (Background) */}
        <div className="absolute top-[18vh] md:top-10 w-full text-center md:text-left z-0 select-none pointer-events-none px-2 md:px-10">
          <h1 className="text-[14vw] md:text-[18vw] leading-[0.8] font-serif font-medium text-black uppercase tracking-tighter w-full">
            Nripendra
          </h1>
        </div>

        {/* Hero Image - Middle Layer */}
        <div className="absolute bottom-0 z-10 h-[72vh] md:h-[90vh] w-[95vw] md:w-[60vw] max-w-7xl">
          <Image
            src="/Hero_Image.png"
            alt="Nripendra Singh Model"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
            priority
            quality={100}
            className="drop-shadow-2xl grayscale filter"
          />
        </div>

        {/* Bottom Text - Singh (Foreground) */}
        <div className="absolute bottom-[2vh] md:bottom-10 w-full text-center md:text-right z-20 select-none pointer-events-none px-2 md:px-10">
          <h1 className="text-[17vw] md:text-[18vw] leading-[0.8] font-serif font-medium text-black uppercase tracking-tighter w-full mix-blend-difference md:mix-blend-normal text-black md:text-black">
            Singh
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] border-t border-black bg-white z-20 relative">
        {/* Left Image */}
        <div className="relative w-full h-[500px] md:h-auto border-r border-black">
          <Image
            src="/IMG_3766.JPG.jpeg"
            alt="About Model"
            fill
            style={{ objectFit: 'cover' }}
            className="grayscale"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-10 md:p-20 space-y-8 contents-center">
          <h2 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter">
            About.
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed max-w-md font-sans text-justify">
            <p>
              I am a Delhi-based fashion model from Ayodhya, driven by vision, discipline, and a deep commitment to growth. After completing my Master’s degree, I made a conscious decision to pursue fashion professionally — transforming ambition into consistent action.
            </p>
            <p>
              With 20+ runway shows, magazine editorials, and e-commerce campaigns to my credit, I have collaborated with celebrity designers and have had the honor of walking as a show stopper for select showcases. Each experience has refined my runway presence, camera expression, and adaptability across commercial and editorial aesthetics.
            </p>
            <p>
              While maintaining a professional career in an MNC, I continue to invest in my modeling journey with structure, focus, and resilience. The unwavering support of my family and close friends remains my strongest foundation, grounding me as I aim higher.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 md:py-20 bg-white z-20 relative">
        <div className="w-full mb-12 border-y border-black py-2 md:py-4">
          <h2 className="text-[15.5vw] leading-[0.85] font-serif uppercase text-center tracking-tighter w-full block">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 px-4 md:px-10">
          {images.slice(0, 3).map((src, index) => (
            <div key={index} className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer group">
              <Image
                src={src}
                alt={`Portfolio ${index}`}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full px-4">
          <a href="/portfolio" className="inline-block px-8 py-3 bg-black text-white text-sm md:text-base font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors">
            View More
          </a>
        </div>
      </section>
    </main>
  );
}
