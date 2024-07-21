import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function EscCallback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", EscCallback);

      return function () {
        document.removeEventListener("keydown", EscCallback);
      };
    },
    [action, key]
  );
  return [key, action];
}
