"use client"
import { useState } from 'react'
import styles from './page.module.css'

function Light_Groups() {
	const [Image_Path, setBackgroundImage] = useState("./cycles_light_groups_pavilion_combined.jpg")

	function lightgroupChange (type) {
		if (type == 1) {
			setBackgroundImage("./cycles_light_groups_pavilion_combined.jpg")
		} else if (type == 2) {
			setBackgroundImage("./cycles_light_groups_pavilion_interior.jpg")
		} else if (type == 3) {
			setBackgroundImage("./cycles_light_groups_pavilion_pool.jpg")
		} else if (type == 4) {
			setBackgroundImage("./cycles_light_groups_pavilion_bench.jpg")
		} else if (type == 5) {
			setBackgroundImage("./cycles_light_groups_pavilion_world.jpg")
		}
	}
	return (
		<div class={styles.Lightgroups_D}>
			<p class={styles.Lightgroups_P}>Light Groups can be used in order to e.g. modify the color and/or intensity of light sources in the compositor without re-rendering.</p>
			<ul class={styles.Lightgroups_UL}>
			<button class={styles.Lightgroups_B} onClick={() => lightgroupChange(1)}>Combined
				<div class={styles.Lightgroups_Hover}></div>
			</button>
			<button class={styles.Lightgroups_B} onClick={() => lightgroupChange(2)}>Interior
				<div class={styles.Lightgroups_Hover}></div>
			</button>
			<button class={styles.Lightgroups_B} onClick={() => lightgroupChange(3)}>Pool
				<div class={styles.Lightgroups_Hover}></div>
			</button>
			<button class={styles.Lightgroups_B} onClick={() => lightgroupChange(4)}>Benches
				<div class={styles.Lightgroups_Hover}></div>
			</button>
			<button class={styles.Lightgroups_B} onClick={() => lightgroupChange(5)}>World
				<div class={styles.Lightgroups_Hover}></div>
			</button>
			</ul>
			<div class={styles.Lightgroups_Img_Showcase} style={{ backgroundImage: `url(${Image_Path})` }}></div>
		</div>
	)
}

function Caustics() {
	const [value, setValue] = useState(50);

	const handleSliderChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
	};
  
	const getClipPath = () => {
		return `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
	};

	const getLabelClipPath = () => {
		if (value > 78) {
			return `polygon(100% 0, ${(value - 77) * 5}% 0, ${(value - 77) * 5}% 100%, 100% 100%)`;
			} else {
				return "polygon(100% 0, 0 0, 0 100%, 100% 100%)";
			}
	};

	return(
		<div class={styles.Caustics_Compare}>
			<div class={styles.Caustics_V}>
				<video class={styles.Caustics_V} muted loop autoPlay src="./cycles_caustics_new_s.mp4" type="video/mp4"></video>
				<span class={styles.Caustics_S2} style={{clipPath: getLabelClipPath()}}>Blender 3.2</span>
			</div>
			<div class={styles.Caustics_V} style={{clipPath: getClipPath()}}>
				<video class={styles.Caustics_V} muted loop autoPlay src="./cycles_caustics_old_s.mp4" type="video/mp4"></video>
				<span class={styles.Caustics_S}>Blender 3.1</span>
			</div>
			<input class={styles.Slider} type="range" min="0" max="100" value={value} onChange={handleSliderChange}/>
		</div>
	)
	
}

function Color_Operations() {
	const [Video_Path, setBackgroundVideo] = useState("./11-PaintBrush_cut_s.mp4")

	function colorModeChange (type) {
		if (type == 1) {
			setBackgroundVideo("./11-PaintBrush_cut_s.mp4")
		} else if (type == 2) {
			setBackgroundVideo("./12-SmearBrush_cut_s.mp4")
		} else if (type == 3) {
			setBackgroundVideo("./13-MaskByColor_cut_s.mp4")
		} else if (type == 4) {
			setBackgroundVideo("./14-ColorFilter_cut_s.mp4")
		}
	}
	return (
		<div class={styles.Color_D}>
			<p class={styles.Color_H}>PAINT IT BACK</p>
			<p class={styles.Color_P}>Paint is now available in Sculpt mode! Taking advantage of the performance improvements you can now paint on millions of polygons.</p>
			<p class={styles.Color_P}>
				Check out
				<a class={styles.Color_A}>the file</a>
				used on the video below.
			</p>
			<ul class={styles.Color_UL}>
			<button class={styles.Color_B} onClick={() => colorModeChange(1)}>Paint Brush
				<div class={styles.Color_Hover}></div>
			</button>
			<button class={styles.Color_B} onClick={() => colorModeChange(2)}>Smear Brush
				<div class={styles.Color_Hover}></div>
			</button>
			<button class={styles.Color_B} onClick={() => colorModeChange(3)}>Mask by Color
				<div class={styles.Color_Hover}></div>
			</button>
			<button class={styles.Color_B} onClick={() => colorModeChange(4)}>Color Filter Tool
				<div class={styles.Color_Hover}></div>
			</button>
			</ul>
			<video class={styles.Color_V2} muted loop autoPlay src={Video_Path} type="video/mp4"></video>
		</div>
	)
}

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
			<p class={styles.Color_H}>COLOR ME</p>
			<p class={styles.Color_H}>IMPRESSED</p>
			<p class={styles.Color_P}>Blender 3.2 revolutionizes polygon painting with new tools, usability improvements, and unprecedented performance.</p>
			<video class={styles.Color_V} muted loop autoplay src="./31-einar_performance_demo_s.mp4" type="video/mp4"></video>
		</div>

		<Color_Operations/>

		<script type="text/javascript" src="./static/functions.js"></script>
	</body>
	)
}

