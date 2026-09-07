import type { Dish } from "@/data/site";

export function DishList({ items }: { items: Dish[] }) {
  return (
    <ul className="divide-y divide-cream/10">
      {items.map((item) => (
        <li key={item.name} className="flex items-start justify-between gap-6 py-3.5">
          <span className="leading-snug text-cream/90">{item.name}</span>
          {item.price && (
            <span className="font-display shrink-0 whitespace-nowrap text-gold-light">
              {item.price}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function DishGroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold first:mt-0">
      {children}
    </h4>
  );
}
