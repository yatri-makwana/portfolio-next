import { BlurFade } from "@/components/ui/blur-fade"

export default function BlurFadeTextDemo() {
  return (
    <section
      id="header"
      className="relative overflow-hidden py-32 text-center bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#0d0d0d]"
    >
      <div className="container px-4 mx-auto space-y-6">
        <BlurFade delay={0.2}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl text-gray-900 dark:text-white">
            Hello World 👋
          </h1>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="text-lg sm:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m glad you’re here — let’s build something great together.
          </p>
        </BlurFade>

        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full" />
      </div>

      {/* Optional soft background visual */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
