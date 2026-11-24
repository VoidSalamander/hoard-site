/** The hoard logo, still (the hero has the animated one, HoardMark). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 184 184"
      aria-hidden="true"
      className={className}
      strokeWidth={4}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M32 32 L112 12 L172 72 L152 152 L72 172 L12 112 L32 32 Z" fill="#343a40" stroke="#0c8599" />
      <path d="M152 152 L172 72 L152 52 L132 132 L152 152 Z" fill="#ffd43b" stroke="#ffd43b" />
      <path d="M32 32 L52 52 L32 132 L12 112 L32 32 Z" fill="#0c8599" stroke="#0c8599" />
      <path d="M32 32 L112 12 L172 72 L152 152" fill="none" stroke="#ffd43b" />
      <path d="M32 32 L52 52 L92 32 L172 72 L112 12 L32 32 Z" fill="#ffd43b" stroke="#ffd43b" />
      <path d="M12 112 L92 152 L132 132 L152 152 L72 172 L12 112 Z" fill="#0c8599" stroke="#0c8599" />
      <path d="M63.27 72 L85.8 83.27 L74.53 128.33 L52 117.07 L63.27 72 Z" fill="#ffffff" stroke="#ffffff" />
    </svg>
  );
}

/** GitHub's mark; lucide no longer ships brand icons. */
export function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
