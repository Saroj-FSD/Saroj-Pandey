import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "North ABC",
    description: "Dreamy place with lots of peace and memories.",
    src: "/images/gallery-1.jpg",
  },
  {
    id: 2,
    type: "image",
    title: "Ranimahal",
    description: "Place of the queen, where time stands still.",
    src: "/images/gallery-2.jpg",
  },
  {
    id: 8,
    type: "image",
    title: "Pumdikot",
    description: "Blessings from the Lord Shiva(Mahadev).",
    src: "/images/gallery-3.jpg",
  },
  {
    id: 4,
    type: "image",
    title: "Way to Mardi",
    description: "Lost in Machapuchre.",
    src: "/images/gallery-4.jpg",
  },
  {
    id: 7,
    type: "image",
    title: "Kapuche Glacire Lake",
    description: "A serene lake surrounded by towering peaks.",
    src: "/images/gallery-5.jpg",
  },
  {
    id: 6,
    type: "image",
    title: "Pokhara Lakeside",
    description: "Boating on the serene lakeside(Fewa Lake).",
    src: "/images/gallery-6.jpg",
  },
];

export default function Gallery() {
  const { t } = useLanguage();

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden bg-foreground/5">

      {/* Title */}
      <motion.div
        style={{ y: titleY }}
        className="px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-current opacity-20" />
            {t("gallery_title")}
          </h2>

          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
            Gallery
          </h3>
        </div>

        <p className="text-white max-w-xs text-lg font-medium leading-relaxed">
          A collection of digital memories captured through images and motion.
        </p>
      </motion.div>

      {/* Scrollable Gallery */}
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
        className="flex gap-6 px-6 cursor-grab active:cursor-grabbing"
      >
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            className="flex-shrink-0 w-[300px] md:w-[420px] group relative"
            whileHover={{
              scale: 1.03,
              rotate: i % 2 === 0 ? 1 : -1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl mb-6">

              {/* IMAGE */}
              {item.type === "image" && (
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-6 backdrop-blur-sm">
                <div>

                  <h4 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}