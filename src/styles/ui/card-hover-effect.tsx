import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
  darkMode = false,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
  darkMode?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardBase = cn(
    "rounded-2xl h-full w-full p-4 overflow-hidden relative z-20",
    darkMode
      ? "bg-slate-900 border border-slate-700"
      : "bg-white border border-gray-100",
    "group-hover:border-slate-700 transition-transform"
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full block rounded-3xl",
                  darkMode ? "bg-slate-800/60" : "bg-neutral-200"
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className={cardBase}>
            <CardTitle darkMode={darkMode}>{item.title}</CardTitle>
            <CardDescription darkMode={darkMode}>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(className)}>
      <div className="relative z-50">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
  darkMode = false,
}: {
  className?: string;
  children: React.ReactNode;
  darkMode?: boolean;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 font-semibold tracking-wide",
        "text-lg sm:text-xl md:text-2xl",
        darkMode ? 'text-zinc-100' : 'text-gray-900',
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
  darkMode = false,
}: {
  className?: string;
  children: React.ReactNode;
  darkMode?: boolean;
}) => {
  return (
    <p
      className={cn(
        "mt-3 leading-relaxed text-sm",
        darkMode ? 'text-zinc-400' : 'text-gray-500',
        className
      )}
    >
      {children}
    </p>
  );
};
