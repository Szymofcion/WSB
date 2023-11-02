import { useEffect, useRef } from "react";
import "../style/Background.scss"; // Importuj plik ze stylami

function Background() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const divElements: HTMLDivElement[] = Array.from({ length: 70 }, () => {
      const div = document.createElement("div");
      div.className = "container__card";
      div.style.color = "blueviolet";
      return div;
    });

    if (wrapperRef.current) {
      divElements.forEach((card) => {
        wrapperRef.current!.appendChild(card);
        card.addEventListener("mousemove", (e) => {
          const x = e.pageX - card.offsetLeft;
          const y = e.pageY - card.offsetTop;
          card.style.setProperty("--x", x + "px");
          card.style.setProperty("--y", y + "px");
        });
      });
    }

    return () => {
      divElements.forEach((card) => {
        card.removeEventListener("mousemove", () => {});
        if (wrapperRef.current?.contains(card)) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          wrapperRef.current!.removeChild(card);
        }
      });
    };
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
}

export default Background;
