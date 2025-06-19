// theme.js
export const theme = {
  colors: {
    border: "hsl(210, 16%, 82%)",         // Exemplo de valor para --border
    input: "hsl(210, 16%, 95%)",
    ring: "hsl(215, 90%, 60%)",
    background: "hsl(0, 0%, 98%)",
    foreground: "hsl(210, 10%, 23%)",
    primary: {
      DEFAULT: "hsl(222, 47%, 11%)",
      foreground: "hsl(210, 99%, 95%)",
    },
    secondary: {
      DEFAULT: "hsl(210, 16%, 82%)",
      foreground: "hsl(210, 10%, 23%)",
    },
    destructive: {
      DEFAULT: "hsl(0, 78%, 62%)",
      foreground: "hsl(0, 0%, 100%)",
    },
    muted: {
      DEFAULT: "hsl(210, 16%, 95%)",
      foreground: "hsl(210, 10%, 50%)",
    },
    accent: {
      DEFAULT: "hsl(280, 65%, 55%)",
      foreground: "hsl(280, 95%, 90%)",
    },
    popover: {
      DEFAULT: "hsl(0, 0%, 100%)",
      foreground: "hsl(210, 10%, 23%)",
    },
    card: {
      DEFAULT: "hsl(0, 0%, 100%)",
      foreground: "hsl(210, 10%, 23%)",
    },
  },
  borderRadius: {
    lg: "12px",
    md: "10px",
    sm: "8px",
  },
  animationDurations: {
    accordion: "0.2s ease-out",
  },
}
