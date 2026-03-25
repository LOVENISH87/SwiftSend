import { motion } from "framer-motion";
import { Upload, Copy, Zap } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "1",
    title: "Drop your file or folder.",
    description: 'SwiftSend creates a one-time share code (called a "ticket").',
  },
  {
    icon: Copy,
    number: "2",
    title: "Share the ticket.",
    description: "Copy it and send it to your friend — via chat, email, or text.",
  },
  {
    icon: Zap,
    number: "3",
    title: "They receive it directly.",
    description: "Your friend pastes the ticket in their app, and the transfer begins.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl">How It Works</h2>
        <p className="mt-3 text-muted-foreground">Simple. Secure. Instant.</p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-2xl">
                {step.number}. {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
