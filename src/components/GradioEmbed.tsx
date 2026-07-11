import { useState } from "react";
import { ExternalLink, AlertCircle } from "lucide-react";

interface GradioEmbedProps {
  /** Full URL of the Hugging Face Space (e.g. https://owner-name.hf.space) */
  src: string;
  title?: string;
  /** iframe height in pixels */
  height?: number;
}

/**
 * Embeds a Hugging Face Gradio Space directly in the page so the analysis
 * runs on-site instead of opening a new tab. Shows a loading state and a
 * fallback "open in new tab" link if the frame is slow or blocked.
 */
const GradioEmbed = ({ src, title = "Gopalan AI Analyzer", height = 720 }: GradioEmbedProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted/50">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mb-4" />
            <p className="text-muted-foreground text-sm">Loading the analyzer…</p>
          </div>
        )}
        <iframe
          src={src}
          title={title}
          onLoad={() => setLoaded(true)}
          className="block w-full"
          style={{ height }}
          loading="lazy"
          allow="camera; clipboard-read; clipboard-write; fullscreen"
        />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4 shrink-0" />
          The tool not loading? Open it in a new tab.
        </p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Open in new tab
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default GradioEmbed;
