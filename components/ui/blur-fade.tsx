"use client"

import { useRef } from "react"
import {
  motion,
  AnimatePresence,
  useInView,
  Variants,
  UseInViewOptions,
} from "framer-motion"

type MarginType = UseInViewOptions["margin"]

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  variant?: Variants
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

export function BlurFade({
  children,
  className = "",
  variant,
  duration = 0.6,
  delay = 0,
  yOffset = 12,
  inView = true,
  inViewMargin = "-20% 0px",
  blur = "8px",
}: BlurFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: inViewMargin })

  const shouldAnimate = !inView || isInView

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        exit="hidden"
        variants={variant || defaultVariants}
        transition={{
          duration,
          delay,
          ease: [0.4, 0, 0.2, 1], // easeOutExpo-ish
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
