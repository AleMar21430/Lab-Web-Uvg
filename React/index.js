import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from './src/App';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + "/public/index.html", "utf-8")

const app = express()
app.get('**', (req, res) => {
	const html = renderToString(<App />)
	const finalhtml = index.replace('<!-- ::APP:: -->', "html")
	res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
	res.send(<div class="Volume_D">
	<p class="Volume_H">VOLUME</p>
	<p class="Volume_H2">MOTION BLUR</p>
	<p class="Volume_P">Introducing support for motion blur for gas simulations and imported OpenVDB volumes.</p>
	<br/>
	<a class="Volume_A" href="https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Volume_Motion_Blur">Read More</a>
	<video class="Volume_V" muted loop autoplay src="./resources/cycles_volume.mp4" type="video/mp4"></video>
</div>)
})

export let ssrapp = functions.https.onRequest(app)