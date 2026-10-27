# Publication media

Verified on 2026-10-27. Ten official demonstrations are mirrored in `videos/` as compressed H.264 MP4 files without audio. Ten are displayed inline, including the user-supplied One Scan is Enough and SURE demonstrations; VTInstructor and NavSpace use their original figures, with video links retained at the user's request. The inline players use `autoplay muted loop playsinline`; native controls allow pausing and full-screen viewing. Each poster is a frame from the corresponding video. `videos.js` loads each video as its card approaches the viewport to avoid transferring all ten inline videos on initial page load.

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

## Four-panel homepage videos

Updated on 2026-10-27. Four publications now use a single locally composed 2×2 MP4: `realappliance-grid.mp4`, `correctnav-grid.mp4`, `instructnav-grid.mp4`, and `pixnav-grid.mp4`. Each panel is 480×270 with a 4 px white divider; output is 964×544, H.264, 24 fps, no audio. Short inputs loop independently at their original playback speed so every panel remains animated. Native controls allow fullscreen viewing. Original single-scene files and project links remain available.

| Publication | Official sources and edit |
| --- | --- |
| RealAppliance | `https://realappliance.github.io/video/full1_batch.mp4` through `full4_batch.mp4`: four different appliance assets, starting at 0 s, 18 s total. Full frames fit within each tile without stretching. |
| CorrectNav | `https://correctnav.github.io/18.mp4`, `19.mp4`, `20.mp4`, `1.mp4`: start at 15, 5, 5, 7 s respectively, 20 s total. Four real-robot navigation demonstrations, original instruction overlays retained. |
| InstructNav | Official CoRL supplementary video linked below. Office and apartment panels start at 132.8 s; library and teaching-building panels start at 156 s; 18 s total. Crops `(x,y,w,h)` are `(68,54,538,302)`, `(672,54,538,302)`, `(68,54,538,302)`, `(68,414,538,302)`. Scene labels retained; slide instructions and wide outer margins removed. |
| PixNav | Official `wzcai99/Pixel-Navigator` repository, `assets/objnav_fps.mp4`, `objnav_fps2.mp4`, `fps_hm3d.mp4`, `fps_mp3d.mp4`. Start at 14, 19, 0, 0 s; 18 s total. First two crops are `(0,60,640,360)`; last two use the moving right-hand navigation panel `(640,60,640,360)`. All panels are simulation. |

AppliancePlan uses `applianceplan-clean.mp4`: four cropped panels from the official composite, each 490×252 at (118,136), (640,136), (118,446), and (640,446), assembled edge-to-edge into 980×504. This removes the slide heading, all four instruction banners, and white outer/inter-panel margins while retaining the manipulation footage, original in-scene action overlays, timing, and playback speed. The untrimmed official video remains archived as `applianceplan.mp4`. Backup: `backup/before-applianceplan-crop-2026-10-27` (commit `6e48966`). CheckManual, DiscussNav, and ManipLLM retain their existing single-demo presentation. VTInstructor and NavSpace retain figures as explicitly requested. The additional ManipLLM video inspected at `https://drive.google.com/file/d/1jn6u7D36d_sgc-aXcpqP39M0bZht0wH2/view` is a narrated presentation with narrow portrait robot footage; it was not used for a landscape grid.

Backup before this change: `backup/before-four-panel-videos-2026-10-27` (commit `c862250`).

### Original downloaded demonstrations

| Publication | Download source | Homepage treatment |
| --- | --- | --- |
| VTInstructor | https://raw.githubusercontent.com/TidalHarley/VTInstructor/main/docs/static/video/vtp1.mp4 | Original figure displayed; linked video retains the right-hand visual trajectory prompt panel, crop 770×420 at (770, 0). Official project: https://tidalharley.github.io/VTInstructor/ (CC BY-SA 4.0). |
| RealAppliance | https://realappliance.github.io/video/full1_batch.mp4 | Complete simulated appliance demonstration, resized. Explicitly labeled as simulation. |
| NavSpace | https://navspace.github.io/navspace_new.mp4 | Original figure displayed. Archived video is a real-robot excerpt 135–155 seconds, top-middle robot panel cropped to 372×210 at (462, 94). Full project video remains linked. |
| InstructNav | https://openreview.net/attachment?id=fCDOfpTCzZ&name=supplementary_material | Official CoRL 2024 supplement, `corl_sup/InstructNav_Video.mp4`. Real-robot excerpt 132–152 seconds, top-right panel cropped to 540×356 at (668, 0). Paper page: https://openreview.net/forum?id=fCDOfpTCzZ (CC BY 4.0). |
| PixNav | https://raw.githubusercontent.com/wzcai99/Pixel-Navigator/master/assets/objnav_fps.mp4 | Complete simulated navigation demonstration, resized. Explicitly labeled as simulation. |

Visible captions below all videos were removed at the user’s request; descriptive accessibility labels and this source record retain the media types. Full project links and original figure links remain available. One Scan is Enough uses the user-supplied video, with Figure 1 retained through its Figure link. No suitable paper-specific official demonstrations were found for Embodied3DBench or the remaining three 2023 publications; their figures remain unchanged.

Pre-expansion backup: `backup/before-more-demos-2026-10-27` (commit `15e09cb`).

The table preserves the original video sources. Full-size paper figures remain available through the Figure links.

The DSTC11 and SPRING figures use CSS viewports to remove their empty top margins (230 px and 155 px respectively). This preserves all scientific labels and the original image files; clicking a figure opens its original source.

Pre-autoplay backup: `backup/before-autoplay-2026-10-27` (commit `205a871`). All publication media areas are capped at 190 px; desktop cards share a 232 px minimum height while longer text can expand naturally.

## One Scan is Enough user-supplied video

Added on 2026-10-27 at the user’s request. `videos/onescan.mp4` is a web-optimized copy of the supplied video (38.69 s, 1972×1330 source). The entire frame and duration are preserved, resized to 960×648, H.264 / yuv420p, 24 fps, no audio, with fast-start metadata. Native muted autoplay, loop, inline playback, and controls match the other demonstrations. Figure 1 remains linked. The original local file is unchanged.

Backup before this change: `backup/before-onescan-video-2026-10-27` (commit `1e2b46c`).

Video captions removed on 2026-10-27. All players now share the same centered 190 px media area without caption spacing. Backup: `backup/before-remove-video-captions-2026-10-27` (commit `9c0bb69`).

One Scan crop update (2026-10-27): the inline player now uses `onescan-cropped.mp4`. A fixed 1872×1080 crop at (50,124) from the original 1972×1330 source removes the slide heading, bottom progress/navigation bar, and outer margins. The full sequence and original speed remain; central diagram labels and statistics remain part of the demonstration. Output is 960×554, H.264, 24 fps, muted, with a poster from 5 s. The uncropped copy remains archived as `onescan.mp4`. Backup: `backup/before-onescan-crop-2026-10-27` (commit `07764b2`).

SURE video (2026-10-27): `videos/sure.mp4` uses the user-supplied 25 s desktop video. Original 826×478 H.264/yuv420p video frames and 25 fps are preserved without re-encoding; only the MP4 container is optimized for fast start. Dialogue text is part of the demonstration and remains intact. Native muted autoplay/loop and viewport loading match the other videos; no extra visible caption is added. The original figure is retained through Figure. Backup: `backup/before-sure-video-2026-10-27` (commit `eb8e5e2`).
