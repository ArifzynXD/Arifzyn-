import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
   if (!text) throw 'Masukan judul lagu'
   let res = await fetch(`https://api.lolhuman.xyz/api/chord?apikey=SadTeams&query=${text}`)
try {
   let jso = await res.json()
   let { title, created, chord } = jso.result
   const cap = `*Title :* ${title}
*Create :* ${created}


${chord}`
conn.reply(m.chat, cap, fkontak)
} catch (e) {
    m.reply('Chord tidak di temukan')
    throw e 
    }
}
handler.help = ['chord <judul lagu>']
handler.tags = ['tools']
handler.command = /^(chordd)$/i
handler.limit = true

export default handler