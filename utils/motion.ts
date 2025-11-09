export const fadeIn = (direction: string, delay: number) => {
  let initial: Record<string, number> = {}
  let animate: Record<string, number> = {}

  switch (direction) {
    case "left":
      initial = { x: -100, opacity: 0 }
      animate = { x: 0, opacity: 1 }
      break
    case "right":
      initial = { x: 100, opacity: 0 }
      animate = { x: 0, opacity: 1 }
      break
    case "up":
      initial = { y: 100, opacity: 0 }
      animate = { y: 0, opacity: 1 }
      break
    case "down":
      initial = { y: -100, opacity: 0 }
      animate = { y: 0, opacity: 1 }
      break
    default:
      initial = { opacity: 0 }
      animate = { opacity: 1 }
  }

  return {
    hidden: initial,
    show: {
      ...animate,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: "easeOut",
      },
    },
  }
}
