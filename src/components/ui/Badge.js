export function createBadge({ variant = "default", className = "", ...props } = {}) {
  const badge = document.createElement("div");
  badge.className = `badge badge--${variant}` + (className ? " " + className : "");
  Object.entries(props).forEach(([key, value]) => {
    if (key === "ref" || value === undefined) return;
    badge.setAttribute(key, value);
  });
  return badge;
}

if (typeof module !== "undefined") {
  module.exports = { createBadge };
} else {
  window.createBadge = createBadge;
}