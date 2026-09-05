type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

