import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="flex items-center justify-center gap-4 rounded-md">
        <Image width={40} height={40} src="/logo.svg" alt="Logo" />
      </div>
    </div>
  );
}
