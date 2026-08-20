"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { useReveal } from "@/lib/use-reveal";

const PHOTO_SRC = {
  building: "/dajmi2.webp",
  complex: "/dajmi1.webp",
  workshop: "/dajmi6.webp",
} as const;

const PHOTO_ORDER = ["building", "complex", "workshop"] as const;
type PhotoKey = (typeof PHOTO_ORDER)[number];

export function AboutPreview({ copy }: { copy: Dictionary["about"] }) {
  const sectionRef = useReveal<HTMLElement>(0.18);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [activePhoto, setActivePhoto] = useState<PhotoKey | null>(null);

  const photoIndex = activePhoto ? PHOTO_ORDER.indexOf(activePhoto) : -1;

  const showPhoto = useCallback((delta: number) => {
    setActivePhoto((current) => {
      if (!current) return current;
      const index = PHOTO_ORDER.indexOf(current);
      return PHOTO_ORDER[(index + delta + PHOTO_ORDER.length) % PHOTO_ORDER.length];
    });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!activePhoto || !dialog) {
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPhoto(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showPhoto(1);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto, showPhoto]);

  function closeLightbox() {
    dialogRef.current?.close();
  }

  const photoAlts = {
    building: copy.photos.building,
    complex: copy.photos.complex,
    workshop: copy.photos.workshop,
  } as const;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-preview-title"
      className="overflow-hidden bg-[#f4f3ef] text-navy"
    >
      <div className="px-[22px] pt-20 pb-16 min-[821px]:px-10 min-[821px]:pt-16 min-[821px]:pb-14 min-[1181px]:px-[72px] min-[1181px]:pt-20 min-[1181px]:pb-16">
        <div className="about-copy-reveal mb-12 border-t border-navy/18 pt-5 min-[821px]:mb-9">
          <p className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase min-[821px]:text-xs">
            {copy.kicker}
          </p>
        </div>

        <div className="grid items-center gap-14 min-[821px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] min-[821px]:gap-10 min-[1181px]:gap-20">
          <div className="about-copy-reveal about-reveal-delay-1 max-w-[540px]">
            <h2
              id="about-preview-title"
              className="text-balance font-display text-[38px] leading-[1.08] font-bold tracking-[-0.025em] min-[821px]:text-[clamp(38px,3.5vw,54px)] min-[821px]:leading-[1.03]"
            >
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
            </h2>

            <p className="mt-7 max-w-[500px] text-[17px] leading-[1.7] text-grey min-[821px]:mt-7 min-[821px]:text-base min-[1181px]:text-[17px]">
              {copy.body}
            </p>

            <Link
              href="/o-nama"
              className="group mt-9 inline-flex items-center gap-5 border-b border-navy pb-2.5 font-display text-sm font-semibold tracking-[0.06em] uppercase transition-colors hover:border-navy-accent hover:text-navy-accent min-[821px]:mt-8"
            >
              {copy.cta}
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
            </Link>
          </div>

          <div className="relative grid grid-cols-2 gap-2 min-[821px]:h-[clamp(410px,50dvh,520px)] min-[821px]:grid-cols-12 min-[821px]:grid-rows-12 min-[821px]:gap-0">
            <button
              type="button"
              aria-label={copy.photos.expandBuilding}
              onClick={() => setActivePhoto("building")}
              className="about-image-reveal about-collage-main group relative col-span-2 aspect-[4/3] cursor-zoom-in overflow-hidden text-left min-[821px]:col-span-9 min-[821px]:col-start-1 min-[821px]:row-span-11 min-[821px]:row-start-1 min-[821px]:aspect-auto"
            >
              <Image
                src={PHOTO_SRC.building}
                alt={copy.photos.building}
                fill
                sizes="(max-width: 820px) 100vw, 52vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(15,32,56,.28))]"
              />
            </button>

            <button
              type="button"
              aria-label={copy.photos.expandComplex}
              onClick={() => setActivePhoto("complex")}
              className="about-image-reveal about-collage-top about-reveal-delay-1 group relative aspect-[4/5] cursor-zoom-in overflow-hidden text-left min-[821px]:col-span-5 min-[821px]:col-start-8 min-[821px]:row-span-5 min-[821px]:row-start-2 min-[821px]:aspect-auto min-[821px]:border-[7px] min-[821px]:border-[#f4f3ef]"
            >
              <Image
                src={PHOTO_SRC.complex}
                alt={copy.photos.complex}
                fill
                sizes="(max-width: 820px) 50vw, 26vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
              />
            </button>

            <button
              type="button"
              aria-label={copy.photos.expandWorkshop}
              onClick={() => setActivePhoto("workshop")}
              className="about-image-reveal about-collage-bottom about-reveal-delay-2 group relative aspect-[4/5] cursor-zoom-in overflow-hidden text-left min-[821px]:col-span-6 min-[821px]:col-start-7 min-[821px]:row-span-6 min-[821px]:row-start-7 min-[821px]:aspect-auto min-[821px]:border-[7px] min-[821px]:border-[#f4f3ef]"
            >
              <Image
                src={PHOTO_SRC.workshop}
                alt={copy.photos.workshop}
                fill
                sizes="(max-width: 820px) 50vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={copy.lightbox}
        onClose={() => setActivePhoto(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
        className="m-auto max-h-[92dvh] w-[min(94vw,1400px)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-[#07111f]/92 backdrop:backdrop-blur-sm"
      >
        {activePhoto ? (
          <div
            className="relative"
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) < 48) return;
              showPhoto(delta < 0 ? 1 : -1);
            }}
          >
            <Image
              src={PHOTO_SRC[activePhoto]}
              alt={photoAlts[activePhoto]}
              width={1400}
              height={920}
              sizes="94vw"
              className="max-h-[88dvh] w-full object-contain"
            />

            <p
              aria-live="polite"
              className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 bg-navy/78 px-3 py-1.5 font-display text-[11px] font-semibold tracking-[0.16em] text-white min-[821px]:bottom-5"
            >
              {String(photoIndex + 1).padStart(2, "0")} / 03
            </p>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label={copy.close}
              className="absolute top-3 right-3 grid size-11 cursor-pointer place-items-center bg-white text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:top-5 min-[821px]:right-5"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
                <path
                  d="m4 4 12 12M16 4 4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => showPhoto(-1)}
              aria-label={copy.prev}
              className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 cursor-pointer place-items-center bg-white text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:left-5"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
                <path d="M12.5 4.5 7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => showPhoto(1)}
              aria-label={copy.next}
              className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 cursor-pointer place-items-center bg-white text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:right-5"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
                <path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
