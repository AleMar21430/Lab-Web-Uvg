"use client"
import { useState } from 'react'
import styles from './page.module.css'
import {Light_Groups, Caustics, Color_Operations} from './components.js'

export default function Home() {
	return (
	<body class={styles.body}>
		<ul class={styles.Header}>
			<img class={styles.Header_Logo} src="./Logo_Blender.png"/>
			<a class={styles.Header_Link} href="https://www.blender.org/features/">Features</a>
			<a class={styles.Header_Link_Selected} href="https://www.blender.org/download/">Download</a>
			<a class={styles.Header_Link} href="https://www.blender.org/support/">Support</a>
			<a class={styles.Header_Link} href="https://www.blender.org/get-involved/">Get Involved</a>
			<a class={styles.Header_Link} href="https://www.blender.org/about/">About</a>
			<a class={styles.Header_Link} href="https://www.blender.org/jobs/">Jobs</a>
			<a class={styles.Header_Link} href="http://store.blender.org">Store</a>
			<a class={styles.Header_Button} href="https://fund.blender.org/">♡ Donate</a>
		</ul>

		<ul class={styles.Sub_Header}>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/">Download</a>
			<a class={styles.Sub_Header_Link_Selected} href="index.html">Release Notes</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/lts/">Long-term Support</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/requirements/">Requirements</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/demo-files/">Demo Files</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/previous-versions/">Previous Versions</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/builds/">Builds</a>
		</ul>

		<ul class={styles.Sub_Header_2}>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/">Release Notes</a>
			<a class={styles.Sub_Header_Link} href="index.html">3.5</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-4/">3.4</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-3/">3.3 LTS</a>
			<a class={styles.Sub_Header_Link_Selected} href="https://www.blender.org/download/releases/3-2/">3.2</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-1/">3.1</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/3-0/">3.0</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-93/">2.93 LTS</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-92/">2.92</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-91/">2.91</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-90/">2.90</a>
			<a class={styles.Sub_Header_Link} href="https://www.blender.org/download/releases/2-83/">2.83 LTS</a>
		</ul>

		<div class={styles.Reach_New_Lights_Img}>
			<p class={styles.Reach_New_Lights_H}>Reach new lights.</p>
			<a class={styles.Reach_New_Lights_B} href="https://www.blender.org/download/">Download Blender</a>
			<p class={styles.Reach_New_Lights_P}>Oksana Dobrovolska</p>
		</div>

		<div class={styles.Present_D}>
			<p class={styles.Present_H}>Blender Foundation and the online developers community are proud</p>
			<p class={styles.Present_H}>to present Blender 3.2. Unleash your creativity with new rendering</p>
			<p class={styles.Present_H}>features, painting tools, performance improvements and much more.</p>
			<p class={styles.Present_P}>Released June 8th, 2022</p>
		</div>

		<div class={styles.Whats_New_D}>
			<p class={styles.Whats_New_P}>WHAT'S NEW IN 5 MINUTES</p>
			<iframe class={styles.Whats_New_V} src="https://www.youtube.com/embed/TnX4_BcFY54"></iframe>
		</div>

		<div class={styles.Lightgroups_Img}>
			<p class={styles.Lightgroups_H}>LET THERE BE</p>
			<p class={styles.Lightgroups_H2}>LIGHT GROUPS</p>
			<p class={styles.Lightgroups_P}>A new type of Cycles render pass that contains only the lighting from a subset of light sources.</p>
		</div>

		<Light_Groups/>

		<div class={styles.Lightgroups_D3}>
			<p class={styles.Lightgroups_P2}>All Light Groups combined in the Compositor.</p>
		</div>

		<div class={styles.Caustics_D}>
			<Caustics/>
			<div class={styles.Caustics_D2}>
			<p class={styles.Caustics_H}>SHADOW</p>
			<p class={styles.Caustics_H2}>CAUSTICS</p>
			<p class={styles.Caustics_P}>Cycles now supports selective rendering of caustics in shadows of refractive objects.</p>
			<br/>
			<p class={styles.Caustics_P}>This is based on “Manifold Next Event Estimation”, a method developed for production rendering.</p>
			<br/>
			<a class={styles.Caustics_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Shadow_Caustics">Read More</a>
			</div>
		</div>

		<div class={styles.Volume_D}>
			<p class={styles.Volume_H}>VOLUME</p>
			<p class={styles.Volume_H2}>MOTION BLUR</p>
			<p class={styles.Volume_P}>Introducing support for motion blur for gas simulations and imported OpenVDB volumes.</p>
			<br/>
			<a class={styles.Volume_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Volume_Motion_Blur">Read More</a>
			<video class={styles.Volume_V} muted loop autoPlay src="./cycles_volume.mp4" type="video/mp4"></video>
		</div>
		
		<div class={styles.Cycles_D}>
			<p class={styles.Cycles_P}>MORE CYCLES</p>
			<br/>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rB630d2b6">Support Adaptive Sampling with Scrambling Distance</a>
			<a class={styles.Cycles_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#AMD_GPU_Rendering">AMD GPU Rendering for Linux</a>
			<br/>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rB5ac4e6c">OpenColorIO color space aliases support</a>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rBf991f5a">New Linear ACEScg color space</a>
			<br/>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rB5b4ab89">Add Alpha Output to Object Info node</a>
			<a class={styles.Cycles_A} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Color_Management">Support different Color Management for Render and Viewport</a>
			<br/>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rBae217295578">Automatically unpause viewport when switching to rendered mode</a>
			<br/>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rBe81d7bfcc9f4">Enable Alembic procedural for final renders</a>
			<a class={styles.Cycles_A} href="http://developer.blender.org/rB6787cc13d4ef">Support for Baking to UDIM tiles</a>
			<br/>
			<a class={styles.Cycles_B} href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Volume_Motion_Blur">See all Cycles changes</a>
		</div>

		<div class={styles.Color_D}>
			<p class={styles.Color_H}>COLOR ME IMPRESSED</p>
			<p class={styles.Color_P}>Blender 3.2 revolutionizes polygon painting with new tools, usability improvements, and unprecedented performance.</p>
			<video class={styles.Color_V} muted loop autoPlay src="./31-einar_performance_demo_s.mp4" type="video/mp4"></video>
		</div>

		<Color_Operations/>

		<div class={styles.Card_D}>
			<div class={styles.Card_DL}>
				<p class={styles.Color_H2}>REMESH</p>
				<p class={styles.Card_P}>Now when using the voxel remesher all color attributes will be preserved.</p>
				<p class={styles.Card_P}>This is perfect to color your sculpts as you still experiment and block out the general shapes.</p>
				<br/>
				<a class={styles.Volume_A} href="https://docs.blender.org/manual/en/3.2/sculpt_paint/sculpting/tool_settings/remesh.html">Read More</a>
			</div>
			<video class={styles.Card_V} muted loop autoPlay src="./21-remeshing_timelaspse_cut_s.mp4" type="video/mp4"></video>
		</div>

		<div class={styles.Card_D}>
			<video class={styles.Card_V} muted loop autoPlay src="./22-masking_timelaspse_cut_s.mp4" type="video/mp4"></video>
			<div class={styles.Card_DR}>
				<p class={styles.Color_H2}>MASK OUT</p>
				<p class={styles.Card_P}>Masking, auto-masking and face sets are fully supported with color attribute painting.</p>
			</div>
		</div>

		<div class={styles.Card_D}>
			<video class={styles.Card_V} muted loop autoPlay src="./asset_browser_collections_s.mp4" type="video/mp4"></video>
			<div class={styles.Card_DR}>
				<p class={styles.Card_T}>ASSET BROWSER</p>
				<p class={styles.Card_H1}>ASSET</p>
				<p class={styles.Card_H2}>COLLECTIONS</p>
				<p class={styles.Card_P}>Expand your asset library with Collections!</p>

				<li class={styles.Card_P}>Add Collection assets as instances or real objects.</li>
				<li class={styles.Card_P}>Thumbnails are automatically generated, or customize it with your own.</li>
				<br/>
				<a class={styles.Volume_A} href="https://developer.blender.org/rB253e4e7ed22b">Read More</a>
			</div>
		</div>

		<div class={styles.Card_D}>
			<div class={styles.Card_DL}>
				<p class={styles.Card_T}>MODELING</p>
				<p class={styles.Card_H3}>CURVE</p>
				<p class={styles.Card_H4}>PEN TOOL</p>
				<p class={styles.Card_P}>Quickly add, delete, and tweak control points. Hold modifier keys to switch handle types.</p>
			</div>
			<video class={styles.Card_V} muted loop autoPlay src="./pentool_s.mp4" type="video/mp4"></video>
		</div>

		<div class={styles.Card_D}>
			<video class={styles.Card_V} muted loop autoPlay src="./grease_pencil_envelope.mp4" type="video/mp4"></video>
			<div class={styles.Card_DR}>	
				<p class={styles.Card_T}>GREASE PENCIL</p>
				<p class={styles.Card_H3}>ENVELOPE</p>
				<p class={styles.Card_H4}>MODIFIER</p>
				<p class={styles.Card_P}>This new modifier connects all points that are N points apart, a shape known as envelope.</p>
				<br/>
				<a class={styles.Volume_A} href="https://docs.blender.org/manual/en/3.2/grease_pencil/modifiers/generate/envelope.html">See the Manual</a>
			</div>
		</div>

		<div class={styles.Card_D}>
			<div class={styles.Card_DL}>
				<p class={styles.Card_T}>VIDEO SEQUENCER</p>
				<p class={styles.Card_H3}>ENHANCED</p>
				<p class={styles.Card_H4}>CHANNELS</p>
				<p class={styles.Card_P}>Organize your edits by giving channels a name!</p>
				<p class={styles.Card_P}>You can also mute and lock entire channels.</p>
			</div>
			<img class={styles.Card_Img} src="./vse_channels.jpg"/>
		</div>
	</body>
	)
}