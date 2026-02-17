import Image from "next/image";

export default function PortfolioPage() {
    const images = [
        "/IMG_3457.JPG.jpeg",
        "/IMG_3766.JPG.jpeg",
        "/IMG_3774.JPG.jpeg",
        "/IMG_3990.JPG.jpeg",
        "/IMG_4114.JPEG",
        "/IMG_4275.JPEG",
        "/IMG_4277.JPEG",
        "/IMG_4278.JPEG",
        "/IMG_4600.JPG.jpeg",
        "/IMG_4601.JPG.jpeg",
        "/IMG_4625.JPG.jpeg",
        "/IMG_4853.JPEG",
        "/IMG_5160.JPG.jpeg",
        "/IMG_5201.JPG.jpeg",
        "/IMG_5209.JPG.jpeg"
    ];

    return (
        <main className="flex min-h-screen flex-col bg-white overflow-hidden py-24 px-4 md:px-10">
            <h1 className="text-4xl md:text-6xl font-serif uppercase mb-12 text-center md:text-left">
                Portfolio
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full aspect-[3/4] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group">
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
        </main>
    );
}
