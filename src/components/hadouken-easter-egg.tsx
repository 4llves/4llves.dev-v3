import { useEffect, useRef, useState } from "react";

const HADOUKEN_SEQUENCE = ["arrowdown", "arrowdown", "arrowright", "x"];

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (target.isContentEditable) {
    return true;
  }

  return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
}

export function HadoukenEasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sequenceIndexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const clearVisibilityTimeout = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const showHadouken = () => {
      clearVisibilityTimeout();
      setAnimationKey((current) => current + 1);
      setIsVisible(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
        timeoutRef.current = null;
      }, 3000);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || isEditableTarget(event.target)) {
        return;
      }

      const pressedKey = event.key.toLowerCase();
      const expectedKey = HADOUKEN_SEQUENCE[sequenceIndexRef.current];

      if (pressedKey === expectedKey) {
        sequenceIndexRef.current += 1;

        if (sequenceIndexRef.current === HADOUKEN_SEQUENCE.length) {
          sequenceIndexRef.current = 0;
          showHadouken();
        }

        return;
      }

      sequenceIndexRef.current = pressedKey === HADOUKEN_SEQUENCE[0] ? 1 : 0;
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearVisibilityTimeout();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-2 bottom-0 z-[60]">
      <img
        key={animationKey}
        src="/hadouken.gif"
        alt="Hadouken"
        className="h-48 w-48 object-contain"
      />
    </div>
  );
}
