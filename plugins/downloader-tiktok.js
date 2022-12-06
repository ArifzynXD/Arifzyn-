import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Masukan url tiktok`
let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=SadTeams&url=${text}`)
let jso = await res.json() 
let { title, description, thumbnail, duration, author, statistic, link } = jso.result
let cap = `${title}

*Description :* ${description}
*Duration :* ${duration}
*User name :* ${author.username}
*Nick name :* ${author.nickname}
*Play :* ${statistic.play_count}
*Like :* ${statistic.like_count}
*Share :* ${statistic.share_count}
*Comment :* ${statistic.comment_count}`
conn.sendButton(m.chat, cap, wm, author.avatar, [['No Watermark', usedPrefix + 'getvid ' + link], ['With Watermark', usedPrefix + 'tiktokwm' + text]], m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)$/i

handler.limit = true 

export default handler