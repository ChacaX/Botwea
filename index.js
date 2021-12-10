const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    relayWAMessage,
    prepareMessageFromContent,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
//const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const _badword = JSON.parse(fs.readFileSync('./src/badword.json'))

              vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN: Owner BotWea\n' 
              + 'ORG: CREATOR/OWNER BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285731261728:+62 85731261728\n'  
              + 'END:VCARD'
              
prefix = ``
prefix2 = `.`
badword_limit = 3
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
}

const addBadwordId = (userid) => {
const obj = {id: userid, b: 0}
_badword.push(obj)
fs.writeFileSync('./src/badword.json', JSON.stringify(_badword))
}

const addBadwordUser = (userid, amount) => {
let position = false
Object.keys(_badword).forEach((i) => {
if (_badword[i].id === userid) {
position = i
}
})
if (position !== false) {
_badword[position].b += amount
fs.writeFileSync('./src/badword.json', JSON.stringify(_badword))
}
}

const getBadwordUser = (userid) => {
let position = false
Object.keys(_badword).forEach((i) => {
if (_badword[i].id === userid) {
position = i
}
})
if (position !== false) {
return _badword[position].b
}
}

const getBadwordId = (userid) => {
let position = false
Object.keys(_badword).forEach((i) => {
if (_badword[i].id === userid) {
position = i
}
})
if (position !== false) {
return _badword[position].id
}
}

async function starts() {
const client = new WAConnection()
//WWEB 
client.version = [2, 2140, 12]
client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				addBadwordId(sender)
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			const resbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
			const date = new Date().toLocaleDateString()
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`6285731261728@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `whatsappボット`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./lib/odc.jpeg'),"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: fakeimage, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await client.prepareMessage(from, media, document, kma)
buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./lib/odc.jpeg'),
caption: `y`,
"contextInfo": {
mentionedJid: [sender],
"externalAdReply": {
"title": `Dont Bully Me Please`,
"body": "subscribe my chanel youtube",
"mediaType": 2,
"previewType": `https://youtu.be/dQw4w9WgXcQ`,
"thumbnail": fs.readFileSync('./lib/odc.jpeg'),
"mediaUrl": `https://youtu.be/dQw4w9WgXcQ`,
"sourceUrl": ""
}}, quoted: 
mek })
}

sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

if (budy.includes("https://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
}

const fakeimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `🔅 WhatsApp Bot 🔅`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
			
switch(command) {

case 'menu':
case 'help':
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
uptime = process.uptime()
teks =`*M I T S U H A - W A B O T*\n
  
*❒ language nodejs*
*❒ runtime ${kyun(uptime)}*
*❒ user ${_badword.length} active*

*L I S T - F E A T U R E - B O T*\n
   
*❒ ${prefix2}sticker*
*❒ ${prefix2}toimg*
*❒ ${prefix2}tagall*
*❒ ${prefix2}broadcast*
*❒ ${prefix2}kick*
*❒ ${prefix2}promote*
*❒ ${prefix2}demote*
*❒ ${prefix2}welcome*
*❒ ${prefix2}antilink*
*❒ ${prefix2}warning*
*❒ ${prefix2}hidetag*
*❒ ${prefix2}open/close*`
sendButDocument(from, `${teks}`, `\n`, fs.readFileSync(`./lib/odc.jpeg`), {mimetype: Mimetype.pdf, thumbnail:fs.readFileSync(`./lib/odc.jpeg`), filename: `MITSUHA BOT BETA 🦈`}, [{buttonId:`DEVELOPER`,buttonText:{displayText:'DEVELOEPER'},type:1}])
break

case 'owner':
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break

case 'open':
case 'close':
case 'open/close':
if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
gwekke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `_Gunakan fitur ini sewajarnya saja dan jangan spam agar nomor bot tetap beroprasi_`,
"buttons": [
{buttonId: 'Buka', buttonText: {displayText: 'Buka'}, type: 1},
{buttonId: 'Tutup', buttonText: {displayText: 'Tutup'}, type: 1}
],
headerType: 1
},
}, {quoted: mek})
await client.relayWAMessage(gwekke)
break

case 'stiker':
case 'sticker':
case 'stikergif':
case 'stickergif':
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(`_system error_`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`MITSUHA`,`BOT`)} ${ran} -o ${ran}`, async (error) => {
//if (error) {
// reply(`_ffmpeg error 404_`)
// fs.unlinkSync(media)	
// fs.unlinkSync(ran)
// }
client.sendMessage(from, fs.readFileSync(ran), sticker)
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(`_sedang di proses_`)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`_system error_`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`MITSUHA`, `BOT`)} ${ran} -o ${ran}`, async (error) => {
//if (error) {
// reply(`_ffmpeg error 404_`)
// fs.unlinkSync(media)	
// fs.unlinkSync(ran)
// }
client.sendMessage(from, fs.readFileSync(ran), sticker)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix2}sticker atau tag gambar yang sudah dikirim`)
}
break

case 'daftar':
if (getBadwordId(sender)) return reply(`❎ _kamu sudah terdaftar sebelumnya_`)
addBadwordId(sender)
teks = `*SUKSES REGISTRASION*\n\nnama: ${pushname},\nmention: ${sender.split("@s.whatsapp.net")}\ndate: ${date}`
gambar = "https://telegra.ph/file/f5e2ccd205a0e51b9c799.jpg"
client.sendMessage(from, gambar, messageType.video, { mimetype: 'video/mp4', quoted: mek, caption: teks})
break
				
case 'hidetag':
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
var value = body.slice(9)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text, {quoted: mek})
break

case 'tagall':
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
members_id = []
eai = args.join(" ")
teks = (args.length > 1) ? eai.trim() : ''
teks += '\n\n╭─❒ *MENTION ALL*\n'
for (let mem of groupMembers) {
teks += `│-  @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
teks += `╰❒`
mentions(teks, members_id, true, {quoted: fakeimage})
					break

				case 'broadcast':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					bc = args.join(" ")
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, MessageType.image, {caption: `${body.slice(4)}\n\n_*BROADCAST*_`})
}
reply('Suksess broadcast ')
} else {
for (let _ of anu) {
let gwekkkjhe = await client.prepareMessageFromContent(_.jid, {
"buttonsMessage": {
"contentText": `${bc}`,
"footerText": `\n_*BROADCAST / PESAN SIARAN*_`,
"buttons": [
{buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkkjhe)
}
reply('Suksess broadcast ')
}
					break
                                case 'promote':
                                if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
					
				case 'demote':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'add':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
				case 'kick':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				
				case 'toimg':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: fakeimage, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
			
case 'warning':
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`❎ _tambahkan angka pada perintah_`)
jumlah = args.join(" ")
badword_limit = jumlah
reply(`*Warning* Siap dinyalakan, Jika ada seseorang yang berkata toxic sebanyak ${badword_limit} atau lebih maka otomatis akan ter Kick`)
break
				
				
				case 'welcome':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
let gwekkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `Pengertian: Teks Button
Enable (Aktif)/Disable (Mati)`,
"buttons": [
{buttonId: 'Enable W1', buttonText: {displayText: 'Enable W1'}, type: 1},
{buttonId: 'Disable W0', buttonText: {displayText: 'Disable W0'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage}) 
await client.relayWAMessage(gwekkje)
break
				
				case 'antilink':
				if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
				if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
let gwekkkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SATU\`\`\``,
"footerText": `Pengertian: Teks Button
Enable (Aktif)/Disable (Mati)`,
"buttons": [
{buttonId: 'Enable A1', buttonText: {displayText: 'Enable A1'}, type: 1},
{buttonId: 'Disable A0', buttonText: {displayText: 'Disable A0'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkkje)
break
					
					      
				default:
				
				if (buttonsR === 'Enable A1') {
					if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
                    if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
							if (isAntiLink) return reply('_berhasil di aktifkan_')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('_berhasil di aktifkan_')
						
break
						}
						
						if (buttonsR === 'Disable A0') {
						if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
                    if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
							if (!isAntiLink) return reply('_berhasil di matikan_')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('_berhasil di aktifkan_')
break 
						}
						
				if (buttonsR === 'Enable W1') {
					if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
                    if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
              	if (isWelkom) return reply('_berhasil di aktifkan_')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('_berhasil di aktifkan_')
						
break
						}
						if (buttonsR === 'Disable W0') {
							if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
                    if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
							var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('_berhasil di aktifkan_')
						
break
						}
				
if (budy.startsWith('$')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (budy.includes(`Asu`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}

if (budy.includes(`emek`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}
   
if (budy.includes(`ontol`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}

if (budy.includes(`acot`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}

if (budy.includes(`njg`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}

if (budy.includes(`gsat`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}

if (budy.includes(`ancok`)) {
if (!getBadwordId(sender)) return
if (!isGroup) return
if (!isBotGroupAdmins) return
addBadwordUser(sender, 1)
gwekkhkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `kamu berkata kasar sebanyak ${getBadwordUser(sender)}/${badword_limit}\nkali jika sudah lebih dari ${badword_limit} kali maka otomatis terkick`,
"footerText": `Badword Detected`,
"buttons": [
{buttonId: 'astagfirulloh', buttonText: {displayText: 'astagfirulloh'}, type: 1}
],
headerType: 1
},
}, {quoted: fakeimage})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
break
}

if (buttonsR === `DEVELOEPER`) {
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break
}

if (buttonsR === `OWNER`) {
if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break
}

if (!getBadwordId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
uptime = process.uptime()
teks =`*M I T S U H A - W A B O T*\n
  
*❒ language nodejs*
*❒ runtime ${kyun(uptime)}*
*❒ user ${_badword.length} active*

*L I S T - F E A T U R E - B O T*\n
   
*❒ ${prefix2}sticker*
*❒ ${prefix2}toimg*
*❒ ${prefix2}tagall*
*❒ ${prefix2}broadcast*
*❒ ${prefix2}kick*
*❒ ${prefix2}promote*
*❒ ${prefix2}demote*
*❒ ${prefix2}welcome*
*❒ ${prefix2}antilink*
*❒ ${prefix2}warning*
*❒ ${prefix2}hidetag*
*❒ ${prefix2}open/close*`
sendButDocument(from, `${teks}`, `\n`, fs.readFileSync(`./lib/odc.jpeg`), {mimetype: Mimetype.pdf, thumbnail:fs.readFileSync(`./lib/odc.jpeg`), filename: `MITSUHA BOT BETA 🦈`}, [{buttonId:`DEVELOPER`,buttonText:{displayText:'DEVELOEPER'},type:1}])
break
}

if (buttonsR === 'Tutup') {
                  if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
	var nomor = mek.participant
              const close = {
              text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
              contextInfo: { mentionedJid: [nomor] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, true);
              reply(close)
break
}
              if (buttonsR === 'Buka') {
 
                    if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
					
					if (!isGroupAdmins) return reply(`❎ _hanya untuk admin grup_`)     
					if (!isBotGroupAdmins) return reply(`❎ _error, jadikan bot admin_`)
open = {
              text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
              contextInfo: { mentionedJid: [sender] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, false)
              client.sendMessage(from, open, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `whatsappボット`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: mek})
break
}

					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
