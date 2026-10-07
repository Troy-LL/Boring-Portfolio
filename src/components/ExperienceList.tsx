import { EXPERIENCE } from "@/lib/experience";

export default function ExperienceList({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? EXPERIENCE.slice(0, limit) : EXPERIENCE;

  return (
    <ul className="border-t border-hairline">
      {items.map((role) => (
        <li
          key={`${role.company}-${role.role}`}
          className="border-b border-hairline py-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
            <p className="font-medium text-ink">
              {role.role}
              <span className="font-normal text-muted"> · {role.company}</span>
            </p>
            <span className="text-muted shrink-0">{role.period}</span>
          </div>
          <p className="mt-3 text-muted leading-relaxed">{role.description}</p>
        </li>
      ))}
    </ul>
  );
}
