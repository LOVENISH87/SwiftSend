import { Check, X } from "lucide-react";

const rows = [
  { label: "Account Required", swift: "No", cloud: "Yes" },
  { label: "File Size Limit", swift: "Unlimited", cloud: "Usually Limited" },
  { label: "Privacy", swift: "Encrypted Direct Transfer", cloud: "Stored on Server" },
  { label: "Speed", swift: "Direct (P2P)", cloud: "Limited by Server" },
  { label: "Cost", swift: "Free Forever", cloud: "Freemium" },
];

export const Comparison = () => {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-4xl md:text-5xl">Why SwiftSend Is Better</h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-6 py-4 text-left font-medium text-muted-foreground"></th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">SwiftSend</th>
                <th className="px-6 py-4 text-left font-medium text-muted-foreground">Cloud Sharing</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                  <td className="px-6 py-4 font-medium">{row.label}</td>
                  <td className="px-6 py-4 text-primary">
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      {row.swift}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      {row.cloud}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
