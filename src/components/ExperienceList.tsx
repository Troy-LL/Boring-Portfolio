import Expandable from "@/components/Expandable";
import { EXPERIENCE } from "@/lib/experience";

export default function ExperienceList({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? EXPERIENCE.slice(0, limit) : EXPERIENCE;

  return (
    <ul className="border-t border-charcoal/10">
      {items.map((role) => (
        <li key={`${role.company}-${role.role}`}>
          <Expandable
            summary={
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <p className="text-ink">
                  {role.role}
                  <span className="text-charcoal"> · {role.company}</span>
                </p>
                <span className="font-ui text-xs text-charcoal/70 shrink-0">
                  {role.period}
                </span>
              </div>
            }
          >
            <p className="text-charcoal leading-relaxed">{role.description}</p>
          </Expandable>
        </li>
      ))}
    </ul>
  );
}
