<script setup lang="ts">
	import BG from './assets/Bg.png'
</script>

<template>
	<main>
		<div class="Block">
			<div class="Background Parallax" pr-val="10" :style="{backgroundImage: `url(${BG})` }">
				<h1 class="Parallax" pr-val="40">Alejandro Martínez</h1>
				<h2 class="Parallax" pr-val="25">21430</h2>
			</div>
			<div>
				<h1 class="Parallax" pr-val="5">Alejandro Martínez</h1>
				<h2 class="Parallax" pr-val="2.5">21430</h2>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
	(function() {
		document.addEventListener("mousemove", parallax);
		const elem = document.querySelector("#parallax");

		function parallax(event: MouseEvent) {
			const parallaxSpans = document.querySelectorAll('.Parallax');
			parallaxSpans.forEach((shift: any) => {
				const position = shift.getAttribute('pr-val');
				const x = ((event.pageX - window.innerWidth/2) * Number(position)) / 500 ;
				const y = ((event.pageY - window.innerHeight/2) * Number(position)) / 500;
				shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
			});
		}
	})();
</script>