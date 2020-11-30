import { useCallback, useEffect } from "react"

export const useHideOnClickOutside = ({ open, onHide, ref }) => {
  const onClick = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      if (e.target !== el && !el.contains(e.target)) {
        onHide();
      }
    },
    [ref, onHide]
  );

  // use capture events so click events that don't bubble still hide the element
  useEffect(() => {
    if (open)
      document.addEventListener('click', onClick, {
        capture: true,
      });
    return () => {
      document.removeEventListener('click', onClick, {
        capture: true,
      });
    };
  }, [open, onClick]);
};
