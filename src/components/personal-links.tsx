import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Github, LinkedinIcon } from "lucide-react"
import Link from "next/link"

const size = 40
const links = [
  {
    url: "https://github.com/Kerpooo",
    icon: <GitHubLogoIcon width={size} height={size} />,
  },
  {
    url: "https://www.linkedin.com/in/kevinrincon/",
    icon: <LinkedInLogoIcon width={size} height={size} />,
  },
]

export default function PersonalLinks() {
  return (
    <div className="flex gap-6 mt-4">
      {links.map((link) => (
        <Link key={link.url} href={link.url}>
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
