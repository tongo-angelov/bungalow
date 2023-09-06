"use client";

import CookieConsent from "react-cookie-consent";

export default function CookiesConsent() {
  return (
    <CookieConsent location="bottom" buttonText="Разбирам">
      Този уебсайт използва бисквитки, за да може да предоставя услугите си.
      Продължавайки, вие се съгласявате с тяхното използване.
    </CookieConsent>
  );
}
