import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "glow";
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit";
  target?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  type = "button",
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-[0.97] cursor-pointer";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.5)] hover:brightness-110 border border-amber-400/30",
    secondary:
      "bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700/60 shadow-lg hover:border-amber-500/40",
    ghost:
      "bg-slate-800/40 text-slate-200 border border-slate-700/50 hover:border-amber-500/50 hover:text-amber-400 hover:bg-slate-800/80 backdrop-blur-md",
    glow:
      "bg-amber-500 text-slate-950 font-extrabold shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] hover:scale-[1.02]",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes} rel={target ? "noopener noreferrer" : undefined}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}

