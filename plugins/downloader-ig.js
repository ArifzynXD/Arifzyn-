import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    let result = await fetch(`https://api.lolhuman.xyz/api/instagram2?apikey=SadTeams&url=${args[0]}`)
    let res = await result.json()
    let p = res.result
    conn.reply(m.chat, `*User name :* ${p.account.username}\n*Full name :* ${p.account.full_name}\n\nLoading Media.....`, m)
    for (var i of res.result.media) {
    conn.sendFile(m.chat, i, 'instagram.mp4', 'Nih', m)
}
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram(dl)?)$/i

export default handler