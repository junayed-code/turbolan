import Image from "next/image";
import AppIcon from "@/assets/app-icon.png";

export function LogoMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full">
      <Image src={AppIcon} alt="App icon" />
    </span>
  );
}
