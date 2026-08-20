"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const TOUR_URL = "https://virtualtours.virtualno360.hr/F1OToQMXMv";

export function VirtualTour({ copy }: { copy: Dictionary["tour"] }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isFullscreen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isFullscreen]);

  function startTour() {
    setIsStarted(true);

    if (window.matchMedia("(max-width: 820px)").matches) {
      setIsFullscreen(true);
    }
  }

  function enterFullscreen() {
    setIsFullscreen(true);
  }

  function exitFullscreen() {
    setIsFullscreen(false);
  }

  return (
    <section
      aria-labelledby="virtual-tour-title"
      className="bg-[#f4f3ef] px-[22px] py-16 text-navy min-[821px]:px-10 min-[821px]:py-20 min-[1181px]:px-[72px]"
    >
      <div className="flex flex-col gap-5 border-t border-navy/18 pt-5 min-[821px]:flex-row min-[821px]:items-end min-[821px]:justify-between min-[821px]:gap-16">
        <div>
          <p className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase min-[821px]:text-xs">
            {copy.kicker}
          </p>
          <h2
            id="virtual-tour-title"
            className="mt-4 font-display text-[40px] leading-[1.02] font-bold tracking-[-0.035em] min-[821px]:text-[clamp(46px,4.6vw,68px)]"
          >
            {copy.title}
          </h2>
        </div>
        <p className="max-w-[430px] text-[15px] leading-[1.65] text-grey min-[821px]:pb-1 min-[1181px]:text-base">
          {copy.body}
        </p>
      </div>

      <div
        ref={frameRef}
        className={
          isFullscreen
            ? "fixed inset-0 z-50 overflow-hidden bg-[#09172a]"
            : "relative mt-8 aspect-[4/5] overflow-hidden border border-navy/12 bg-[#09172a] min-[600px]:aspect-[16/10] min-[821px]:mt-9 min-[821px]:h-[clamp(480px,62dvh,700px)] min-[821px]:aspect-auto"
        }
      >
        {isStarted ? (
          <>
            <iframe
              src={TOUR_URL}
              title={copy.iframeTitle}
              className="absolute inset-0 size-full border-0 bg-white"
              allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {isFullscreen ? (
              <button
                type="button"
                onClick={exitFullscreen}
                aria-label={copy.exitFullscreen}
                className="absolute top-[max(12px,env(safe-area-inset-top))] right-[max(12px,env(safe-area-inset-right))] z-[1] grid size-11 place-items-center bg-white text-navy"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
                  <path
                    d="m4 4 12 12M16 4 4 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={enterFullscreen}
                className="absolute right-3 bottom-[max(12px,env(safe-area-inset-bottom))] left-3 z-[1] bg-white px-5 py-3.5 text-center font-display text-sm font-semibold tracking-[0.04em] text-navy min-[821px]:right-5 min-[821px]:bottom-5 min-[821px]:left-auto min-[821px]:w-fit"
              >
                {copy.enterFullscreen}
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            onClick={startTour}
            className="group absolute inset-0 cursor-pointer text-left"
            aria-label={copy.startAria}
          >
            <Image
              src="/dajmi2.webp"
              alt=""
              fill
              sizes="(max-width: 820px) 100vw, calc(100vw - 144px)"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,.24)_0%,rgba(7,17,31,.5)_48%,rgba(7,17,31,.88)_100%)]"
            />

            <span
              aria-hidden="true"
              className="absolute top-5 right-5 font-display text-[clamp(64px,12vw,180px)] leading-none font-bold tracking-[-0.08em] text-white/[0.12] min-[821px]:top-7 min-[821px]:right-8"
            >
              360°
            </span>

            <span className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <span className="relative mb-6 grid size-[84px] place-items-center min-[821px]:mb-7 min-[821px]:size-[96px]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-110 group-hover:border-white"
                />
                <span className="relative grid size-[52px] place-items-center rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-navy-accent group-hover:text-white min-[821px]:size-[58px]">
                  <svg
                    viewBox="0 0 20 20"
                    className="ml-0.5 size-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="m7 5 7 5-7 5V5Z" fill="currentColor" />
                  </svg>
                </span>
              </span>

              <span className="font-display text-[10px] font-semibold tracking-[0.22em] text-white/66 uppercase">
                {copy.explore}
              </span>
              <span className="mt-4 inline-flex items-center gap-4 border-b border-white/50 pb-2 font-display text-sm font-semibold tracking-[0.06em] uppercase transition-colors group-hover:border-white">
                {copy.start}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 28 12"
                  className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                >
                  <path
                    d="M0 6h26M21 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </span>

            <span className="absolute right-5 bottom-5 left-5 flex items-center justify-between border-t border-white/22 pt-4 font-display text-[9px] font-semibold tracking-[0.15em] text-white/52 uppercase min-[821px]:right-8 min-[821px]:bottom-7 min-[821px]:left-8">
              <span>{copy.interactive}</span>
              <span>{copy.fullscreen}</span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
