

export function createTextarea({ className = "", ...props } = {}) {
  const textarea = document.createElement("textarea");
  textarea.className =
    "custom-textarea " + (className ? className : "");
  Object.entries(props).forEach(([key, value]) => {
    if (key === "ref" || value === undefined) return;
    textarea.setAttribute(key, value);
  });
  return textarea;
}

if (typeof module !== "undefined") {
  module.exports = { createTextarea };
} else {
  window.createTextarea = createTextarea;
}
