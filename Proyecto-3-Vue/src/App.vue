<script setup lang="ts">
	import BG from './assets/Bg.png'
	import $ from 'jquery'
</script>

<script lang="ts">
	var Mouse_X = 0;
	var Mouse_Y = 0;


	document.addEventListener("mousemove", parallax);
	const elem = document.querySelector("#parallax");

	function parallax(event: MouseEvent) {
		const parallaxSpans = document.querySelectorAll('.Parallax');
		parallaxSpans.forEach((shift: any) => {
			const position = shift.getAttribute('pr-val');
			Mouse_X = event.pageX
			Mouse_Y = event.pageY
			const x = ((event.pageX - window.innerWidth/2) * Number(position)) / 500 ;
			const y = ((event.pageY - window.innerHeight/2) * Number(position)) / 500;
			shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}

	$(window).scroll(function () {
		const Container = document.querySelectorAll('.Scroll_Slide');
		Container.forEach((Item: any) => {
			const offset = Item.getAttribute('scroll-offset') || 500;
			const multiplier = Item.getAttribute('scroll-mult') || 1;
			const x = (Number(offset) + window.scrollY * -Number(multiplier));
			Item.style.transform = `translateX(${x}px)`;
		});
	});
</script>

<template>
	<main>
		<div class="Column">

			<div class="Card">
				<div class="Background Parallax Column" pr-val="5" :style="{backgroundImage: `url(${BG})` }">
					<h1 class="Parallax" pr-val="40">Alejandro Martínez</h1>
					<h2 class="Parallax" pr-val="25">21430</h2>
				</div>
			</div>

			<div class="Scroll_Area">
				<div class="Scroll_Slide" scroll-offset="2500" scroll-mult="3">
					<img class="Technology" src="https://skillicons.dev/icons?i=html"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=css"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=scss"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=blender"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=unreal"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=figma"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=ps"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=pr"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=ae"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=qt"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=js"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=ts"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=cpp"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=rust"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=py"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=vscode"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=visualstudio"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=sqlite"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=postgres"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=java"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=nodejs"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=nextjs"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=angular"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=react"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=flutter"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=vite"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=vue"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=webpack"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=babel"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=github"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=git"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=aws"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=nginx"/>
					<img class="Technology" src="https://skillicons.dev/icons?i=firebase"/>
				</div>
			</div>
			
			<iframe class="Block" src="https://itsi-project.web.app/hogar"></iframe>
			<iframe class="Block" src="https://itsi-database.web.app/hogar"></iframe>
			<iframe class="Block" src="https://blender-clone-ssr.web.app/"></iframe>
			<iframe class="Block" src="https://old-labs.web.app/Lab%207_2/index.html"></iframe>
			<iframe class="Block" src="https://old-labs.web.app/Lab%205_2/Lab6.html"></iframe>
			<iframe class="Block" src="https://old-labs.web.app/Lab%204/Lab4.html"></iframe>
			<iframe class="Block" src="https://old-labs.web.app/Lab%203/Inicio.html"></iframe>

			<div class="Row Row_Start Block Block_Container">
				<div class="Column">
					<div class="Column Col_Start Container">
						<h3>Frontend Developer</h3>
						<div>
							<img class="Technology" src="https://skillicons.dev/icons?i=html"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=css"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=scss"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=blender"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=unreal"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=figma"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=ps"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=pr"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=ae"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=qt"/>
						</div>
					</div>
				</div>

				<div class="Column">
					<div class="Column Col_Start Container">
						<h3>Backend Developer</h3>
						<div>
							<img class="Technology" src="https://skillicons.dev/icons?i=js"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=ts"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=cpp"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=rust"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=py"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=vscode"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=visualstudio"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=sqlite"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=postgres"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=java"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=nodejs"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=nextjs"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=angular"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=react"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=flutter"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=vite"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=vue"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=webpack"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=babel"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=github"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=git"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=aws"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=nginx"/>
							<img class="Technology" src="https://skillicons.dev/icons?i=firebase"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>