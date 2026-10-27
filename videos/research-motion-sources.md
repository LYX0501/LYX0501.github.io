# Research figure animations

Created 2026-10-27. Three 16-second, 960 x 600, 24 fps silent loops.
These are explanatory animations of published figures, not recordings of new experiments or live model inference. Scene images are extracted from the original paper assets. Reticles, highlight pulses, diagram layouts, and transitions are editorial visualization overlays.

- Embodied3DBench: https://arxiv.org/abs/2605.29074 . Source: Figures/teaser.pdf, grounding, affordance, grasp-point and trajectory illustrations. Four-panel overview transitions into focused views; the trajectory highlight follows the depicted path.
- IREG: https://arxiv.org/abs/2308.09977 . Source: images/compared_results.pdf. Replays the published girl-with-ball and fridge-near-railing cases; descriptions and corrected targets follow the paper. Bounding boxes are manually placed for illustration, not raw model outputs. Original photo credit retained where present.
- SPRING: https://arxiv.org/abs/2301.01949 . Source: ILG.pdf. A simplified, redrawn layout graph illustrates remembering the black coat and adding the pink and blue shirts in the published store scene. This is a conceptual animation, not a complete reproduction of the model's graph or inference trace.

Original homepage figures are retained in images/ for rollback. All clips use native HTML video with autoplay, muted, loop and playsinline; loading is deferred by the existing videos.js observer.
