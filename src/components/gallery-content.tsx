"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { PHONE } from "@/lib/site-config";
import { withLocale } from "@/lib/i18n/paths";

type PhotoId = keyof Dictionary["galleryPage"]["photos"];
type GroupKey = keyof Dictionary["galleryPage"]["groups"];

const GROUPS: { key: GroupKey; items: { id: PhotoId; src: string; className: string }[] }[] = [
  {
    key: "complex",
    items: [
      { id: "dusk", src: "/galerija/AQ5A9187.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-8" },
      { id: "duskFacade", src: "/galerija/AQ5A9217.webp", className: "aspect-[4/5] min-[821px]:col-span-4 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "complexWide", src: "/galerija/AQ5A9003.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-7" },
      { id: "serviceFacade", src: "/galerija/AQ5A8917.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-5 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "building", src: "/galerija/AQ5A9164.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-8" },
      { id: "showroomGlass", src: "/galerija/AQ5A8931.webp", className: "aspect-[4/5] min-[821px]:col-span-4 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "aerial", src: "/dajmi11.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-7" },
      { id: "aerialPark", src: "/dajmi77.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-5 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "showroom", src: "/galerija/AQ5A8961.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "inspectionSign", src: "/galerija/AQ5A8913.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "wayfinding", src: "/galerija/AQ5A8940.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "skodaTotem", src: "/galerija/AQ5A9175.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-6" },
      { id: "inspection", src: "/saSajta/tehnickipregled.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-6" },
      { id: "hall", src: "/dajmi55.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-12 min-[821px]:aspect-[21/9]" },
    ],
  },
  {
    key: "workshop",
    items: [
      { id: "workshop", src: "/dajmi66.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-8" },
      { id: "diagnostics", src: "/servis1.webp", className: "aspect-[4/5] min-[821px]:col-span-4 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "alignment", src: "/reglaza.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "tires", src: "/vulkanizer.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "bodywork", src: "/limarski.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-4" },
      { id: "crew", src: "/saSajta/zamena4.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-8" },
      { id: "climate", src: "/saSajta/zamena1.webp", className: "aspect-[4/3] min-[821px]:col-span-4 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "paint", src: "/saSajta/zamena2.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-12 min-[821px]:aspect-[21/9]" },
    ],
  },
  {
    key: "taxi",
    items: [
      { id: "fleet", src: "/galerija/AQ5A9022.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-8" },
      { id: "solarFleet", src: "/galerija/AQ5A8906.webp", className: "aspect-[4/5] min-[821px]:col-span-4 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "lineup", src: "/galerija/AQ5A9067.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-7" },
      { id: "chargeDay", src: "/galerija/AQ5A8880.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-5 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "chargeWall", src: "/galerija/AQ5A8896.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "chargeFast", src: "/galerija/AQ5A8975.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "chargeGreen", src: "/galerija/AQ5A9086.webp", className: "aspect-[4/3] min-[821px]:col-span-4" },
      { id: "chargeNight", src: "/galerija/AQ5A9328.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-6" },
      { id: "chargeTaxi", src: "/galerija/AQ5A9125.webp", className: "col-span-2 aspect-[4/3] min-[821px]:col-span-6" },
      { id: "nightFleet", src: "/galerija/AQ5A9281.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-8" },
      { id: "wash", src: "/galerija/AQ5A8874.webp", className: "aspect-[4/5] min-[821px]:col-span-4 min-[821px]:aspect-auto min-[821px]:min-h-full" },
      { id: "interior", src: "/galerija/AQ5A9264.webp", className: "col-span-2 aspect-[16/10] min-[821px]:col-span-12 min-[821px]:aspect-[21/9]" },
    ],
  },
];

const PHOTOS = GROUPS.flatMap((group) => group.items);

export function GalleryContent({
  copy,
  locale,
}: {
  copy: Dictionary["galleryPage"];
  locale: Locale;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activePhoto = activeIndex === null ? null : PHOTOS[activeIndex];

  const showPhoto = useCallback((delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + delta + PHOTOS.length) % PHOTOS.length;
    });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (activeIndex === null || !dialog) {
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
  }, [activeIndex, showPhoto]);

  function closeLightbox() {
    dialogRef.current?.close();
  }

  return (
    <>
      <section aria-label={copy.kicker} className="bg-[#f4f3ef] px-[22px] py-12 text-navy min-[821px]:px-10 min-[821px]:py-16 min-[1181px]:px-[72px] min-[1181px]:py-20">
        {GROUPS.map((group) => (
          <div key={group.key} className="mt-12 first:mt-0 min-[821px]:mt-16 min-[821px]:first:mt-0">
            <div className="border-t border-navy/18 pt-5">
              <h2 className="font-display text-[13px] font-bold tracking-[0.16em] text-navy uppercase min-[821px]:text-sm">
                {copy.groups[group.key]}
              </h2>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 min-[821px]:mt-8 min-[821px]:grid-cols-12 min-[821px]:gap-3">
              {group.items.map((item) => {
                const photo = copy.photos[item.id];
                const index = PHOTOS.findIndex((entry) => entry.id === item.id);

                return (
                  <li key={item.id} className={item.className}>
                    <button
                      type="button"
                      aria-label={`${copy.expand}: ${photo.caption}`}
                      onClick={() => setActiveIndex(index)}
                      className="group relative block size-full cursor-zoom-in overflow-hidden bg-navy/5 text-left"
                    >
                      <Image
                        src={item.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 820px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(15,32,56,.55)_100%)]"
                      />
                      <span className="absolute right-3 bottom-3 font-display text-[10px] font-semibold tracking-[0.16em] text-white uppercase min-[821px]:right-4 min-[821px]:bottom-4 min-[821px]:text-[11px]">
                        {photo.caption}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-navy text-white">
        <div className="flex flex-col gap-8 px-[22px] py-14 min-[821px]:flex-row min-[821px]:items-end min-[821px]:justify-between min-[821px]:px-10 min-[821px]:py-16 min-[1181px]:px-[72px]">
          <div className="max-w-[560px]">
            <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase min-[821px]:text-xs">
              {copy.cta.kicker}
            </p>
            <h2 className="mt-3 font-display text-[28px] leading-tight font-bold tracking-[-0.03em] min-[821px]:text-[clamp(32px,3.2vw,44px)]">
              {copy.cta.title}
            </h2>
            <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-white/62">
              {copy.cta.body}
            </p>
          </div>

          <div className="flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center">
            <Link
              href={withLocale(locale, "/kontakt")}
              className="bg-white px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:px-9 min-[821px]:py-4"
            >
              {copy.cta.book}
            </Link>
            <a
              href={PHONE.href}
              className="border border-white/45 px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] transition-colors hover:bg-white/12 min-[821px]:px-9 min-[821px]:py-4"
            >
              {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        aria-label={copy.lightbox}
        onClose={() => setActiveIndex(null)}
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
              src={activePhoto.src}
              alt={copy.photos[activePhoto.id].alt}
              width={1400}
              height={920}
              sizes="94vw"
              className="max-h-[88dvh] w-full object-contain"
            />

            <p
              aria-live="polite"
              className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 bg-navy/78 px-3 py-1.5 font-display text-[11px] font-semibold tracking-[0.16em] text-white min-[821px]:bottom-5"
            >
              {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
            </p>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label={copy.close}
              className="absolute top-3 right-3 grid size-11 cursor-pointer place-items-center bg-white text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:top-5 min-[821px]:right-5"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
                <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" />
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
    </>
  );
}
