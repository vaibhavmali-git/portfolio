"use client";

const MASK_SVG_TOP = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5 V 10 H 0 Z" fill="black"/></svg>')`;

const MASK_WIGGLE_LINE = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5" stroke="black" stroke-width="2" fill="none"/></svg>')`;

export function Footer() {
  return (
    <footer className="relative">
      <div
        className="bg-[#FBFAF4] dark:bg-[#1F1F1F] transition-colors duration-300"
        style={{
          maskImage: `${MASK_SVG_TOP}, linear-gradient(black, black)`,
          WebkitMaskImage: `${MASK_SVG_TOP}, linear-gradient(black, black)`,
          maskSize: `20px 10px, 100% calc(100% - 10px)`,
          WebkitMaskSize: `20px 10px, 100% calc(100% - 10px)`,
          maskPosition: `top left, bottom left`,
          WebkitMaskPosition: `top left, bottom left`,
          maskRepeat: `repeat-x, no-repeat`,
          WebkitMaskRepeat: `repeat-x, no-repeat`,
        }}
      >
        <div className="max-w-204 mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <p className="flex items-center gap-1">
              Crafted with ❤️ by{" "}
              <span className="text-[#db775b] dark:text-[#db775b]">
                Vaibhav Mali
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-2.5 w-full pointer-events-none z-20 bg-neutral-400/70 dark:bg-neutral-700 transition-colors duration-300"
        style={{
          maskImage: MASK_WIGGLE_LINE,
          WebkitMaskImage: MASK_WIGGLE_LINE,
          maskRepeat: "repeat-x",
          WebkitMaskRepeat: "repeat-x",
          maskPosition: "top left",
          WebkitMaskPosition: "top left",
          maskSize: "20px 10px",
          WebkitMaskSize: "20px 10px",
        }}
      />
    </footer>
  );
}
