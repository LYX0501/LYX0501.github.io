# Publication media

Verified on 2026-10-27. Ten official demonstrations are mirrored in `videos/` as compressed H.264 MP4 files without audio. Their inline players use `autoplay muted loop playsinline`; native controls allow pausing and full-screen viewing. Each poster is a frame from the corresponding video. `videos.js` loads each video as its card approaches the viewport to avoid transferring all ten videos on initial page load.

| Publication | Official source | Selected video |
| --- | --- | --- |
| AppliancePlan | https://niko-kang.github.io/UseAppliance/ | https://niko-kang.github.io/UseAppliance/assets/videos/robot-mechanical.mp4?v=2 |
| CorrectNav | https://correctnav.github.io/ | https://correctnav.github.io/18.mp4 |
| CheckManual | https://sites.google.com/view/checkmanual | https://www.youtube.com/watch?v=kCsNOwXTlvs |
| DiscussNav | https://sites.google.com/view/discussnav | https://www.youtube.com/watch?v=vsU3i1pkfD0 |
| ManipLLM | https://sites.google.com/view/manipllm | https://drive.google.com/file/d/1ASDELKrVBVGlRCd5R-JJX8x6GRaz151z/view |
| NavSpace | https://navspace.github.io/ | https://navspace.github.io/navspace_new.mp4 |
| InstructNav | https://sites.google.com/view/instructnav | https://www.youtube.com/watch?v=eo3MgcgHkiM |
| PixNav | https://sites.google.com/view/pixnav/ | https://www.youtube.com/watch?v=4Lsu0bLcAzQ |

CheckManual and DiscussNav were downloaded through the channel owner’s YouTube Studio and saved locally by the user. The page embeds their local MP4 files; no YouTube player or sign-in is required. Original figures remain available through the Figure links.

## Additional inline demonstrations

| Publication | Download source | Homepage treatment |
| --- | --- | --- |
| VTInstructor | https://raw.githubusercontent.com/TidalHarley/VTInstructor/main/docs/static/video/vtp1.mp4 | Right-hand visual trajectory prompt panel, crop 770×420 at (770, 0). Official project: https://tidalharley.github.io/VTInstructor/ (CC BY-SA 4.0). |
| RealAppliance | https://realappliance.github.io/video/full1_batch.mp4 | Complete simulated appliance demonstration, resized. Explicitly labeled as simulation. |
| NavSpace | https://navspace.github.io/navspace_new.mp4 | Real-robot excerpt 135–155 seconds, top-middle robot panel cropped to 372×210 at (462, 94). Full project video remains linked. |
| InstructNav | https://openreview.net/attachment?id=fCDOfpTCzZ&name=supplementary_material | Official CoRL 2024 supplement, `corl_sup/InstructNav_Video.mp4`. Real-robot excerpt 132–152 seconds, top-right panel cropped to 540×356 at (668, 0). Paper page: https://openreview.net/forum?id=fCDOfpTCzZ (CC BY 4.0). |
| PixNav | https://raw.githubusercontent.com/wzcai99/Pixel-Navigator/master/assets/objnav_fps.mp4 | Complete simulated navigation demonstration, resized. Explicitly labeled as simulation. |

The added captions distinguish real-robot footage from simulation and method demonstrations. Full project links and original figure links remain available. One Scan is Enough retains Figure 1 as requested. No suitable paper-specific official demonstrations were found for Embodied3DBench or the four 2023 publications; their figures remain unchanged.

Pre-expansion backup: `backup/before-more-demos-2026-10-27` (commit `15e09cb`).

The table preserves the original video sources. Full-size paper figures remain available through the Figure links.

The DSTC11 and SPRING figures use CSS viewports to remove their empty top margins (230 px and 155 px respectively). This preserves all scientific labels and the original image files; clicking a figure opens its original source.

Pre-autoplay backup: `backup/before-autoplay-2026-10-27` (commit `205a871`). All publication media areas are capped at 190 px; desktop cards share a 232 px minimum height while longer text can expand naturally.
