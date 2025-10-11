import Link from "next/link";

type PrimaryButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
};

export default function PrimaryButton({
  label,
  href,
  onClick,
  variant = "solid",
}: PrimaryButtonProps) {
  const base = "px-6 py-2 rounded-full transition";
  const solid = "bg-red-600 text-white hover:bg-red-700";
  const outline = "border border-red-600 text-red-600 hover:bg-red-50";

  const classes = `${base} ${variant === "solid" ? solid : outline}`;

  if (href) {
    return (
      <Link href={href}>
        <button className={classes}>{label}</button>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
}
