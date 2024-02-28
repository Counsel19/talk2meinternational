"use client";

import { FC, useCallback, useEffect, useState } from "react";

interface ProgressBarProps {
  target: React.RefObject<HTMLElement>;
}
const ProgressBar: FC<ProgressBarProps> = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = useCallback(() => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;

    const windowsScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (windowsScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowsScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowsScrollTop / totalHeight) * 100);
  }, [target]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () =>  window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);
  return (
    <div className="w-full z-30 fixed top-0 left-0 right 0">
      <div
        className="h-2 bg-gradient-to-r from-rose-300 to-primary-color"
        style={{
          width: `${readingProgress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
