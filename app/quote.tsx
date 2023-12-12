import { IoMdRefresh } from "react-icons/io";
import Image from "next/image";
import quote from "./quote.svg";

export default function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg">
      <div className="relative leading-7 text-neutral-400">
        <Image
          src={quote}
          width={180}
          height={180}
          alt="Quote"
          className="absolute -left-10 -top-24 z-0"
        />
        <div className="relative z-10">{children}</div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="cursor-pointer p-2 text-neutral-600 transition-colors hover:text-neutral-500">
          <IoMdRefresh size="24px" className="" />
        </button>
      </div>
    </div>
  );
}
