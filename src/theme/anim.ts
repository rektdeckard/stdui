export const ANIMATION: Record<string, Parameters<Animatable["animate"]>> = {
  fadeout: [
    [
      { opacity: 1 },
      { opacity: 0 },
    ],
    { duration: 200, easing: "ease" },
  ],
};

export async function animateRemove(
  el: Element,
  keyframes: Parameters<Animatable["animate"]>[0] = ANIMATION.fadeout[0],
  options: Parameters<Animatable["animate"]>[1] = ANIMATION.fadeout[1],
) {
  await el.animate(keyframes, options).finished;
  el.remove();
}
