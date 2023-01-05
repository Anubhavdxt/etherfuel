import Link from "next/link";

export default function HeaderMsg() {
  return (
    <div className="text-secondary bg-tertiary flex items-center justify-center py-5 text-3xl font-medium">
      i write tech blogs when i&apos;m bored of writing code
      <span className="text-imp ml-3">
        <Link href="https://anubhavdxt.hashnode.dev/">
          <a target="_blank" rel="noreferer noopener">
            read here ↗
          </a>
        </Link>
      </span>
    </div>
  );
}
