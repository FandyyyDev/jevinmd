//Ini untuk setting Bot//

//『 Utama 』 //
global.owner = ['19047502362'] 
global.mods = ['19047502362'] 
global.prems = ['19047502362'] 

//『 Info Owner 』 //
global.nameowner = 'Kanna Chan'
global.numberowner = '19047502362'
global.telegram = 'https://linktr.ee/whatsappbotz'
global.github = 'https://linktr.ee/whatsappbotz'
global.dana = '6289509952003'
global.pulsa = '6289509952003'
global.gopay = '6289509952003'
global.shopeepay = '6289509952003'

//『 Info Bot 』//
global.namebot = 'Jevin Bot'
global.gc = 'https://chat.whatsapp.com/I2OK9w2mkIpKngLpFs0i93'
global.web = 'https://linktr.ee/whatsappbotz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 15.000\n1 Minggu 5.000'

//『 Tampilan Dan Lainnya 』//
global.fotonya1 = 'https://telegra.ph/file/fb193c8e2500165c9d749.jpg'
global.lolkey = 'jokowi3periode' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'f241e27cf3a5' //ganti jadi apikey lu kalau expired
global.wm = '© Kanna Chan'
global.wm4 = 'Ⓛ = Limit Ⓟ = Premium'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar'
global.salah = 'Salah'
global.stiker_wait = '*Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = '© Kanna Botz'

//『 Apikey 』 //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  frteam: 'http://restapi.frteam.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'http://restapi.frteam.xyz': 'PrllcW5B',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'pdOctp9C',
  'https://api.lolhuman.xyz': 'jokowi3periode',
}

//『 RPG GAMES 』//
global.multiplier = 20 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//『 Jangan Di Ubah 』 //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
