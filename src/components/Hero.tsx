import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          File transfer doesn't need to be complicated
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Direct, encrypted file transfers from your computer to anyone, anywhere — no signup, no cloud storage in between.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 italic text-muted-foreground"
        >
          Think of it like AirDrop for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            Free & Open source
          </a>

          <button className="group flex items-center overflow-hidden rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:shadow-md">
            <span className="flex items-center gap-2 px-6 py-3 text-sm font-medium">
              <Download className="h-4 w-4" />
              Download for Linux
            </span>
            <span className="border-l border-border px-3 py-3 text-xs text-muted-foreground transition-colors group-hover:bg-secondary">
              ▾
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12"
        >
          <img
            src={heroIllustration}
            alt="Two laptops exchanging files securely"
            width={1024}
            height={640}
            className="mx-auto max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};
