import * as functions from 'firebase-functions'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import express from 'express'
import fs from 'fs'

const index = fs.readFileSync(__dirname + "/public/index.html", "utf-8")

const app = express()
app.get('**', (req, res) => {
	const html = renderToString(<App />)
	const finalhtml = index.replace('<!-- ::APP:: -->',html)
	res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
	res.send(finalhtml)
})

export let ssrapp = functions.https.onRequest(app)