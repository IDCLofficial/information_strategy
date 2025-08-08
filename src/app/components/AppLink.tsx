import Link from "next/link";

type AppLinkProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  className?: string;
};

export const AppLink: React.FC<AppLinkProps> = ({ label, href, variant, size, className }) => {
    return(
        <Link
            href={href}
            className={`${className} ${variant} ${size}`}
        >
            {label}
        </Link>
    )
}
