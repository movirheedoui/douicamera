import { HERO } from "@/lib/works";

export default function Hero() {
  return (
    <section className="pt-10 pb-12">
      <img
        src={HERO.src}
        alt=""
        width={HERO.width}
        height={HERO.height}
        className="w-full h-auto rounded-2xl"
      />

      <div className="mt-6 text-xs text-neutral-500">
        <a href="/sequence">Scroll →</a>
      </div>
    </section>
  );
}
