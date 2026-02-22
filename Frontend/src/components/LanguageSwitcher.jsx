import { useEffect } from "react";
import "../styles/language.css";

const LanguageSwitcher = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout:
            window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    /* 🔥 FORCE REMOVE BANNER IF ADDED */
    const removeBanner = () => {
      const banner = document.querySelector(
        ".goog-te-banner-frame"
      );
      if (banner) banner.remove();

      document.body.style.top = "0px";
    };

    const interval = setInterval(removeBanner, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="language-switcher">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSwitcher;