"use client";

const MASK_WIGGLE_LINE = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5" stroke="black" stroke-width="2" fill="none"/></svg>')`;

export default function Divider() {
  return (
    <div className="flex justify-center w-full">
      <div
        className="w-full max-w-4xl h-2.5 bg-neutral-500/30 dark:bg-neutral-700/50 transition-colors duration-300 mt-1.5"
        style={{
          maskImage: MASK_WIGGLE_LINE,
          WebkitMaskImage: MASK_WIGGLE_LINE,
          maskRepeat: "repeat-x",
          WebkitMaskRepeat: "repeat-x",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "20px 10px",
          WebkitMaskSize: "20px 10px",
        }}
      />
    </div>
  );
}
