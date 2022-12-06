import fs from 'fs'
import pkg from '@adiwajshing/baileys'

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = pkg

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan text'
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238", 
"thumbnail": fs.readFileSync('./image/miku/pic10.jpg'), 
"itemCount": '9999999999', 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": wm, 
"message": text, 
"sellerJid": "62895347198105@s.whatsapp.net", 
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", 
"totalAmount1000": "99999999999999999999", 
"totalCurrencyCode": "IDR", 
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, order.message, { messageId: order.key.id} )
}
handler.command = ['order']

export default handler