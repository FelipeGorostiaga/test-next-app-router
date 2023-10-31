import { lusitana } from '@/app/ui/fonts';
import GaliciaLogo from "@/app/ui/GaliciaLogo";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GaliciaLogo />
    </div>
  );
}
