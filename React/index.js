import * as functions from 'firebase-functions'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import * as express from 'express'

const app = express()
app.get('**', (req, res) => {
	const html = renderToString(<App />)
	res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
	res.send(html)
})

export let ssrapp = functions.https.onRequest(app)