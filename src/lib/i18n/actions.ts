"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { isLocale, LOCALE_COOKIE } from "./dictionaries";

export async function setLocale(formData: FormData) {
  const nextLocale = formData.get("locale");

  if (typeof nextLocale !== "string" || !isLocale(nextLocale)) {
    return;
  }

  const cookieStore = await cookies();
  if (cookieStore.get(LOCALE_COOKIE)?.value === nextLocale) {
    return;
  }

  cookieStore.set(LOCALE_COOKIE, nextLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  revalidatePath("/", "layout");
}
