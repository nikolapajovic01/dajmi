"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const VIMEO_SRC =
  "https://player.vimeo.com/video/763366656?dnt=1&title=0&byline=0&portrait=0&autoplay=1";

export function AboutVideo({
  copy,
  posterAlt,
}: {
  copy: Dictionary["aboutPage"]["video"];
  posterAlt: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-[#09172a]">
      {isPlaying ? (
        <iframe
          src={VIMEO_SRC}
          title={copy.iframeTitle}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={copy.playAria}
          className="group absolute inset-0 cursor-pointer text-left"
        >
          <Image
            src="/dajmi11.webp"
            alt={posterAlt}
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,56,.18)_0%,rgba(15,32,56,.55)_100%)]"
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <span className="relative mb-5 grid size-[84px] place-items-center min-[821px]:size-[96px]">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-110 group-hover:border-white"
              />
              <span className="relative grid size-[52px] place-items-center rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-navy-accent group-hover:text-white min-[821px]:size-[58px]">
                <svg viewBox="0 0 20 20" className="ml-0.5 size-5" fill="none" aria-hidden="true">
                  <path d="m7 5 7 5-7 5V5Z" fill="currentColor" />
                </svg>
              </span>
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.08em] text-white uppercase">
              {copy.play}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
