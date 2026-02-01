import Image from "next/image";
import { SEQUENCE } from "@/lib/works";

export default function Sequence() {
  return (
    <main className="py-10 space-y-12">
      {SEQUENCE.map((w, i) => (
        <div key={w.id}>
          <figure
            className={w.orientation === "portrait" ? "mx-auto max-w-[720px]" : ""}
          >
            <Image
              src={w.src}
              alt=""
              width={w.width}
              height={w.height}
              loading={i < 2 ? "eager" : "lazy"}
              className="w-full h-auto rounded-2xl"
            />
          </figure>

          {i === 0 && (
            <>
              <div className="h-32" />
              <p className="text-sm text-neutral-700 max-w-[720px] mx-auto">
                I wait.
              </p>
              <div className="h-32" />
            </>
          )}
        </div>
      ))}
    </main>
  );
}
