let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .cwood kanna'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.herokuapp.com/api/photooxy/carved-wood?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© KannaChan`, m, false)
}
handler.help = ['cwood'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(cwood)$/i

module.exports = handler
