import { motion } from "framer-motion";
import { FileBox, UserX, Lock, Gauge, Monitor, Code } from "lucide-react";

const features = [
  { icon: FileBox, title: "Transfer Anything", desc: "Send files or folders of any size or format reliably." },
  { icon: UserX, title: "No Accounts Needed", desc: "Open, drop, share: that's it." },
  { icon: Lock, title: "Private & Encrypted", desc: "Files go straight to your friend: never stored anywhere online." },
  { icon: Gauge, title: "Fast Transfers", desc: "SwiftSend can saturate up to 4Gbps connections." },
  { icon: Monitor, title: "Cross-Platform", desc: "Works on Windows, macOS, and Linux." },
  { icon: Code, title: "Open Source & Transparent", desc: "Fully open source code: inspect, verify, and trust." },
];

export const Features = () => {
  return (
    <section id="features" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl md:text-5xl">Why People Love SwiftSend</h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
