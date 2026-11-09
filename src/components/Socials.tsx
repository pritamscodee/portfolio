import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { profile } from "@/data/portfolio";

const items = [
  { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedin },
  { label: "X (Twitter)", href: profile.socials.x, Icon: SiX },
  { label: "Email", href: `mailto:${profile.email}`, Icon: TbMail },
];

export function Socials({ size = 20 }: { size?: number }) {
  return (
    <ul className="flex items-center gap-1">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
