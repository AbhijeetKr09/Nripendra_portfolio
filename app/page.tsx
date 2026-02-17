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
      {/* Name top left */}
      <div className="fixed top-6 left-10 z-[60] text-lg md:text-xl font-bold tracking-widest uppercase mix-blend-difference text-white pb-1 border-b-2 border-transparent hover:border-white transition-all cursor-pointer">
        Nripendra Singh
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* Background Text Layer - Behind the image */}
        <div className="absolute inset-0 z-0 flex flex-col justify-between p-4 md:p-10 select-none pointer-events-none">
          {/* Top Text */}
          <div className="w-full text-center md:text-left">
            <h1 className="text-[14vw] md:text-[16vw] leading-[0.8] font-serif font-medium text-black uppercase tracking-tighter">
              Nripendra
            </h1>
          </div>

          {/* Bottom Text */}
          <div className="w-full text-center md:text-right">
            <h1 className="text-[14vw] md:text-[16vw] leading-[0.8] font-serif font-medium text-black uppercase tracking-tighter">
              Singh
            </h1>
          </div>
        </div>

        {/* Hero Image - On top of text */}
        <div className="relative z-10 h-[92vh] w-full md:w-[80vw] max-w-6xl mt-10 md:mt-0">
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
        <div className="flex flex-col justify-center p-10 md:p-20 space-y-8">
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
      <section id="portfolio" className="py-20 px-4 md:px-10 border-t border-black bg-white z-20 relative">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-serif uppercase text-center md:text-left">
            Portfolio
          </h2>
          <a href="/portfolio" className="text-sm md:text-base font-medium uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
            View More
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </section>
    </main>
  );
}
