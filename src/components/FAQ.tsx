import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is SwiftSend really free?",
    a: "Yes! SwiftSend is free and open source under the MIT license. No hidden costs, no premium tiers.",
  },
  {
    q: "How does the file transfer work?",
    a: "SwiftSend uses peer-to-peer encrypted connections. Files go directly from your device to the receiver — no server stores your data.",
  },
  {
    q: "Is there a file size limit?",
    a: "No. You can send files and folders of any size. Transfer speed depends on your internet connection.",
  },
  {
    q: "Do I need an account?",
    a: "No accounts, no signups, no emails. Just open the app and start sharing.",
  },
  {
    q: "What platforms are supported?",
    a: "SwiftSend works on Windows, macOS, and Linux. Mobile support is coming soon.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-4xl md:text-5xl">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
