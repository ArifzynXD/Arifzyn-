let handler = async (m, { conn }) => {
let kntk = [
[
`${nomorown}`, 
`${await conn.getName(nomorown+'@s.whatsapp.net')}`, 
`👑 Developer Bot `, 
`🚫 Don't call me 🥺`, 
`Arifzyn19@gmail.com`, 
`🇮🇩 Indonesia`, 
`🚀 https://lynk.id/arif_zyn`, 
`👤 Gada pawang nih senggol dong 😔`
],
[`${conn.user.jid.split('@')[0]}`, 
`${await conn.getName(conn.user.jid)}`, 
`🔥 Bot WhatsApp 🐣`, 
`📵 Don't spam/call me 😢`, 
`skybot@gmail.com`, 
`🇮🇩 Indonesia`, 
`🚀 https://lynk.id/arif_zyn`, 
`🤖 Hanya bot biasa yang kadang suka delay ☺`
]
]
const Msg = await conn.sendContactArray(m.chat, kntk, fakes)
const txt = `*🚩 Hi kak @${m.sender.split('@')[0]} ini adalah kontak creator kami, kami tidak akan menanggapi hal yang tidak penting.*`
conn.reply(m.chat, txt, Msg)
}
handler.help = ['owner', 'pengembang', 'creator']
handler.tags = ['owner', 'info']
handler.command = /^(owner|pengembang|creator)$/i

export default handler