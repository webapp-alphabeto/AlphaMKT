import { trigger, style, state, transition, animate } from '@angular/animations';


export const slideIn = trigger("slideIn", [
    state("*", style({ "overflow-y": "hidden" })),
    state("void", style({ "overflow-y": "hidden" })),
    transition("* => void", [
      style({ height: "*" }),
      animate(250, style({ height: 0 })),
    ]),
    transition("void => *", [
      style({ height: "0" }),
      animate(250, style({ height: "*" })),
    ]),
  ])

  export const entrance =  trigger("entrance", [
    transition(":enter", [
      style({ transform: "height:100%", opacity: 0 }),
      animate("0.5s", style({ transform: "height:0", opacity: 1 })),
    ]),
    transition(":leave", [
      style({ transform: "height:0", opacity: 1 }),
      animate("0.5s", style({ transform: "height:100%", opacity: 0 })),
    ]),
  ])