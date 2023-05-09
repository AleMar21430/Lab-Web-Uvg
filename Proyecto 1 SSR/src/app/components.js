"use client"
import { useState } from 'react'
import styles from './page.module.css'

export function Light_Groups() {
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

export function Caustics() {
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

export function Color_Operations() {
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
				Check out&nbsp;
				<a class={styles.Color_A} href="https://www.blender.org/download/demo-files/#painting">the file used</a>
				&nbsp;on the video below.
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
