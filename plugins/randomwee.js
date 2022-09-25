let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, participants, text, usedPrefix, command }) => {
	scrap.pinterest('amu webtoon wee', 'wee webtoon icon').then(a => a[Math.floor(Math.random() * a.length)]) .then(b => conn.sendFile(m.chat,b,b,'Wee!!!'))
   }
    
handler.help = ['randomwee']
handler.tags = ['internet']
handler.command = /^(randomwee)$/i
handler.limit = true

module.exports = handler