//===============( CREDIT SC INI )===============
//[ base sc : mhankbarbar ] 
//[ recode sc : mitsuha ]
//[ eror? silahkan hubungi wa.me/6285731261728 ] 
//[ thanks to : mhankbarbar, mitsuha, ridwan ] 
//===============( PESAN SC INI )===============
//[ berdebah anda china sialan ] 
//[ taiwan adalah negara yang makmur ] 
//[ saya benci rasis sebesar benci saya terhadapat china ] 
//[ anda sipit sialan :v ] 
//===============( CREDIT SYSTEM )===============
//[ hapus thanks to -500 sosial credits ] 
//[ menjual sc ini -200 sosial credits ] 
//[ berteman dengan dev +999 sosial credits ] 
//[ nonton kartun telanjang -999999 sosial credits] 
//===========================================

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
const _rpg = JSON.parse(fs.readFileSync('./src/rpg.json'))

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

const addPendudukUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].g += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getPendudukUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].g
}
}

const addHospitalUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].h += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getHospitalUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].h
}
}

const addHouseUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].i += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getHouseUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].i
}
}

const addRpgId = (userid) => {
const obj = {a: userid, b: 100, c: 5, d: 0, e: 0, f: 50, g: 15, h: 0, i: 0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:5, r:2, s:6, t:3, u:1}
_rpg.push(obj)
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}

const getRpgId = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].a
}
}

const addHealthUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].b += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getHealthUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].b
}
}

const addKerjaPabrikUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].n += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getKerjaPabrikUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].n
}
}

const addKerjaMonumentUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].o += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getKerjaMonumentUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].o
}
}

const addKerjaHiburanUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].p += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getKerjaHiburanUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].p
}
}

const addSamuraiUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].c += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getSamuraiUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].c
}
}

const addBarakudaUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].d += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getBarakudaUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].d
}
}

const addBentengUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].e += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getBentengUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].e
}
}

const addMoneyUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].f += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getMoneyUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].f
}
}

const addPasienUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].j += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getPasienUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].j
}
}

const addPabrikUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].k += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getPabrikUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].k
}
}

const addHiburanUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].l += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getHiburanUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].l
}
}

const addMonumenUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].m += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getMonumenUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].m
}
}

const addpohonUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].q += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getpohonUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].q
}
}

const addbatuUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].r += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getbatuUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].r
}
}

const addsemakUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].s += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getsemakUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].s
}
}

const addjamurUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].t += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getjamurUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].t
}
}

const addLevelUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].u += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getLevelUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].u
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
		

const getCastilexUser = getLevelUser(sender)
var role ='🏯'
if (getCastilUser === 1) {
role ='🏯'
} else if (getCastilUser === 2) {
role ='🏰'
} 

const getBentengxUser = getLevelUser(sender)
var role ='⛩️'
if (getBentengxUser === 1) {
role ='⛩️'
} else if (getBentengxUser === 2) {
role ='🏛️'
} 

const getRumahxUser = getLevelUser(sender)
var role ='🏠'
if (getRumahxUser === 1) {
role ='🏠'
} else if (getRumahxUser === 2) {
role ='🏢'
} 

const getPabrikxUser = getLevelUser(sender)
var role ='🏗️'
if (getPabrikxUser === 1) {
role ='🏗️'
} else if (getPabrikxUser === 2) {
role ='🏭'
} 
			
const getMonumentxUser = getLevelUser(sender)
var role ='🗽'
if (getMonumenxUser === 1) {
role ='🗽'
} else if (getMonumenxUser === 2) {
role ='🗼'
} 

const getHiburanxUser = getLevelUser(sender)
var role ='⛲'
if (getHiburanxUser === 1) {
role ='⛲'
} else if (getHiburanxUser === 2) {
role ='🏖️'
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
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
uptime = process.uptime()
teks =`*INFORMASI*
❒ name ${pushname}
❒ money $${getMoneyUser(sender)}
❒ language nodejs
❒ runtime ${kyun(uptime)}
❒ user ${_rpg.length} active

*RPG MENU*
❒ ${prefix2}desa
❒ ${prefix2}buy
❒ ${prefix2}upgrade
❒ ${prefix2}training
❒ ${prefix2}war
❒ ${prefix2}bank
❒ ${prefix2}pangkas

*GRUP MENU*   
❒ ${prefix2}tagall
❒ ${prefix2}kick
❒ ${prefix2}add
❒ ${prefix2}promote
❒ ${prefix2}demote
❒ ${prefix2}welcome
❒ ${prefix2}antilink
❒ ${prefix2}warning
❒ ${prefix2}hidetag
❒ ${prefix2}open/close

*OTHER MENU*
❒ ${prefix2}broadcast
❒ ${prefix2}sticker
❒ ${prefix2}toimg`
sendButDocument(from, `${teks}`, `\n`, fs.readFileSync(`./lib/odc.jpeg`), {mimetype: Mimetype.pdf, thumbnail:fs.readFileSync(`./lib/odc.jpeg`), filename: `MITSUHA BOT BETA 🦈`}, [{buttonId:`DEVELOPER`,buttonText:{displayText:'DEVELOEPER'},type:1},{buttonId:`SOURCE CODE`,buttonText:{displayText:'SOURCE CODE'},type:1},{buttonId:`HOW TO USE`,buttonText:{displayText:'HOW TO USE'},type:1}])
addPendudukUser(sender, 2)
break

case 'owner':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
addPendudukUser(sender, 2)
break

case 'open':
case 'close':
case 'open/close':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
if (!getHouseUser(sender)) return
addPendudukUser(sender, 5)
addMoneyUser(sender, 5)
break

case 'upgrade':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (getLevelUser(sender)  === 2 ) return reply(`kamu sudah upgrade desa ke level maximum`) 
if (getMoneyUser(sender) < 75 ) return reply(`maaf uang mu belum mencukupi untuk upgrade , minimal $75`)
addMoneyUser(sender, -75)
addMoneyUser(sender, 10)
addPendudukUser(sender, 20)
addSamuraiUser(sender, 5)
addBarakudaUser(sender, 5)
addLevelUser(sender, 1)
reply(`*YES DESAMU MENCAPAI LEVEL 2*\napa saja yang baru di level2 simak dibawah ya 👇\n. \n. \n. \nbangunan bangunan yang berada di level 1 telah di upgrade di level 2\n🏯 > 🏰      ⛲ > 🏖️\n⛩️ > 🏛️      🏗️ > 🏭\n🗽 > 🗼      🏠 > 🏢\n.\n.\n.\nbonus karena sudah upgrade ke level 2\n💵 + $10\n🤺 + 5\n🏇 + 5\n👥 + 20`) 
break

case 'war':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (!isGroup) return reply(`❎ _hanya bisa di grup_`)
if (args.length < 1) return reply(`tag @member yang ingin diajak war\n\nexample: /war @${sender.split("@s.whatsapp.net")}`)
musuh = args.join(" ") 
if (!getRpgId(`${musuh.split('@')[1]}@s.whatsapp.net`)) return reply(`❎ _lawan kamu belum mendaftar ketik /daftar untuk akses bot_`)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (getHealthUser(sender) < 30) return reply(`maaf health kamu terlalu rendah untuk memulai pertempuran`)
if (getSamuraiUser(sender) < 20) return reply(`maaf samuraimu belum mencukupi untuk bertempur, minimal 20`)
if (getBarakudaUser(sender) < 20) return reply(`maaf barakuda mu belum mencukupi untuk bertempur, minimal 20`)
if (getBentengUser(`${musuh.split('@')[1]}@s.whatsapp.net`) > 0) return reply(`maaf kamu tidak bisa menyerang orang yang telah mendirikan benteng`)
if (getHealthUser(`${musuh.split('@')[1]}@s.whatsapp.net`) < 30) return reply(`maaf health lawan terlalu rendah untuk memulai pertempuran`)
if (getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`) < 20) return reply(`maaf samurai lawan belum mencukupi untuk bertempur, minimal 20`)
if (getBarakudaUser(`${musuh.split('@')[1]}@s.whatsapp.net`) < 20) return reply(`maaf barakuda lawan belum mencukupi untuk bertempur, minimal 20`)
pemain = [`PENANTANG`,`${musuh.split('@s.whatsapp.net')[0]}`] 
user = pemain[Math.floor(Math.random() * pemain.length)]
kamu = sender
//================================
/*SENDER & MUSUH*/
a1 = getHealthUser(sender) 
a2 = getSamuraiUser(sender) 
a3 = getBarakudaUser(sender) 
a5 = getMoneyUser(sender)
b1 = getHealthUser(`${musuh.split('@')[1]}@s.whatsapp.net`) 
b2 = getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`) 
b3 = getBarakudaUser(`${musuh.split('@')[1]}@s.whatsapp.net`) 
b5 = getMoneyUser(`${musuh.split('@')[1]}@s.whatsapp.net`)
//================================
/*SENDER & MUSUH*/
sam = [`8`,`14`,`12`,`10`,`11`,`13`,`15`] 
samurai = sam[Math.floor(Math.random() * sam.length)]
samuraix = sam[Math.floor(Math.random() * sam.length)]
bar = [`15`,`12`,`8`,`10`,`11`,`13`] 
barakuda = bar[Math.floor(Math.random() * bar.length)]
barakudax = bar[Math.floor(Math.random() * bar.length)]
heal = [`5`,`15`,`15`,`10`,`20`,`15`] 
health = heal[Math.floor(Math.random() * heal.length)]
healthx = heal[Math.floor(Math.random() * heal.length)]
pas = [`5`,`10`,`15`,`5`,`7`,`5`] 
pasien = pas[Math.floor(Math.random() * pas.length)]
pasienx = pas[Math.floor(Math.random() * pas.length)]
u = [`25`,`15`,`35`,`30`,`20`,`15`] 
money = u[Math.floor(Math.random() * u.length)]
moneyx = u[Math.floor(Math.random() * u.length)]
//================================
/*SENDER & MUSUH*/
samurainya = samurai * 1
samurainyax = samuraix * 1
barakudanya = barakuda * 1
barakudanyax = barakudax * 1
healthnya = health * 1
healthnyax = healthx * 1
pasiennya = pasien * 1
pasiennyax = pasienx * 1
moneynya = money * 1
moneynyax = moneyx * 1
//================================
/*AWAL PERANG*/
mentions(`*TIM MERAH PENANTANG*
💵 money : $${getMoneyUser(sender)}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : ${getHealthUser(sender)}/100
🤺 samurai : ${getSamuraiUser(sender)}
🏇 barakuda : ${getBarakudaUser(sender)}

*TIM BIRU ${musuh.split('@s.whatsapp.net')[0]}*
💵 money : $${getMoneyUser(`${musuh.split('@')[1]}@s.whatsapp.net`)} 
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : ${getHealthUser(`${musuh.split('@')[1]}@s.whatsapp.net`)}/100
🤺 samurai : ${getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`)} 
🏇 barakuda : ${getBarakudaUser(`${musuh.split('@')[1]}@s.whatsapp.net`)} 

*PERTEMPURAN DIMULAI DALAM 10 DETIK LAGI!*`, mentioned, true)
//================================
/*AKHIR PERANG*/
setTimeout( () => {
mentions(`*HASIL PERTEMPURAN*

*DESA PENANTANG*
💵 money : +$${money}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : -${health}/100
🤺 samurai : -${samurai}
🏇 barakuda : -${barakuda}
🚑 pasien : +${pasien}

*DESA ${musuh.split('@s.whatsapp.net')[0]}*
💵 money : +$${moneyx}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : -${healthx}/100
🤺 samurai : -${samuraix}
🏇 barakuda : -${barakudax}
🚑 pasien : +${pasienx}

*PEMENANG*: ${user}`, mentioned, true) 
}, 10000)
//================================
/*FUNC RPG MUSUH & SENDER*/
addHealthUser(sender, -healthnya) 
addHealthUser(`${musuh.split('@')[1]}`, -healthnyax)
addSamuraiUser(sender, -samurainya) 
addSamuraiUser(`${musuh.split('@')[1]}`, -samurainyax)
addBarakudaUser(sender, -barakudanya) 
addBarakudaUser(`${musuh.split('@')[1]}`, -barakudanyax) 
addMoneyUser(sender, moneynya) 
addMoneyUser(`${musuh.split('@')[1]}`, moneynyax) 
addPasienUser(sender, pasiennya) 
addPasienUser(`${musuh.split('@')[1]}`, pasiennyax) 
addBentengUser(sender, bentengnya) 
addBentengUser(`${musuh.split('@')[1]}`, bentengnyax) 
addBatuUser(sender, 2)
addJamurUser(sender, 2)
addPohonUser(sender, 3)
addSemakUser(sender, 2)
addBatuUser(`${musuh.split('@')[1]}`, 2)
addJamurUser(`${musuh.split('@')[1]}`, 2)
addPohonUser(`${musuh.split('@')[1]}`, 3)
addSemakUser(`${musuh.split('@')[1]}`, 2)
break

case 'stiker':
case 'sticker':
case 'stikergif':
case 'stickergif':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
if (!getHouseUser(sender)) return
addPendudukUser(sender, 3)
break

case 'training':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (getHealthUser(sender) < 15) return reply(`maaf health kamu terlalu rendah untuk memulai pertempuran`)
if (getSamuraiUser(sender) < 10) return reply(`maaf samuraimu belum mencukupi untuk bertempur, minimal 10`)
if (getBarakudaUser(sender) < 10) return reply(`maaf barakuda mu belum mencukupi untuk bertempur, minimal 10`)
musuh = ["1","2","3","4","5","6","7","8","9","10","11","12"]
damage = ["10","20","30","5"]
musuhs = musuh[Math.floor(Math.random() * musuh.length)]
musuhb = musuh[Math.floor(Math.random() * musuh.length)]
musuhh = damage[Math.floor(Math.random() * damage.length)]
sakit = ["2","1","1","3"]
msakit = sakit[Math.floor(Math.random() * sakit.length)]
kamu = ["1","2","3","4","5","6","7","8"]
damage = ["10","5","15","45","10","10"]
kamuu = ["9","10","7","8"]
kamus = kamu[Math.floor(Math.random() * kamu.length)]
kamub = kamu[Math.floor(Math.random() * kamu.length)]
kamuh = damage[Math.floor(Math.random() * damage.length)]
kamum = kamuu[Math.floor(Math.random() * kamuu.length)]
musuhm = kamuu[Math.floor(Math.random() * kamuu.length)]
sakit = ["2","5","3"]
ksakit = sakit[Math.floor(Math.random() * sakit.length)]
esakit = sakit[Math.floor(Math.random() * sakit.length)]
wl = ["menang","kalah","menang"]
jadi = wl[Math.floor(Math.random() * wl.length)]
reply(`Memulai Pertempuran\n\n*kamu*
💵 money : $${getMoneyUser(sender)}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : ${getHealthUser(sender)}/100
🤺 samurai : ${getSamuraiUser(sender)}
🏇 barakuda : ${getBarakudaUser(sender)}
\n*musuh*
💵 money : $${musuhm}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : ${musuhh}/100
🤺 samurai : ${musuhs}
🏇 barakuda : ${musuhb}`)
hatinya = kamuh * 1
samurainya = kamus * 1
barakudanya = kamub * 1
moneynya = kamum * 1
sakitnya = ksakit * 1
sakitnya2 = esakit * 1
addHealthUser(sender, -hatinya)
addSamuraiUser(sender, -samurainya)
addBarakudaUser(sender, -barakudanya)
addMoneyUser(sender, moneynya)
addSamuraiUser(sender, -sakitnya)
addBarakudaUser(sender, -sakitnya2)
addPasienUser(sender, sakitnya)
addPasienUser(sender, sakitnya2)
setTimeout( () => {
reply(`*HASIL PERTEMPURAN*\n\n*kamu*
💵 money : +$${kamum}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : -${kamuh}/100
🤺 samurai : -${kamus}
🏇 barakuda : -${kamub}
🚑 terluka : +${ksakit} +${esakit}
\n*musuh*
💵 money : -$${musuhm}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : -${musuhh}/100
🤺 samurai : -${musuhs}
🏇 barakuda : -${musuhb}
🚑 terluka : +${msakit}\n\n*KAMU* : ${jadi}`)
}, 10000)
addPendudukUser(sender, 2)
if (getBentengUser(sender)) return
jarah = ["1","2","3","4"]
jarahpenduduk = jarah[Math.floor(Math.random() * jarah.length)]
jarah2 = ["15","10","25","5"]
jarahnyawa = jarah2[Math.floor(Math.random() * jarah2.length)]
jarah3 = ["7","5","4","3"]
jarahuang = jarah3[Math.floor(Math.random() * jarah3.length)]
uwang = jarahuang * 1
nyawa = jarahnyawa * 1
penduduk = jarahpenduduk * 1
setTimeout( () => {
addMoneyUser(sender, -uwang)
addHealthUser(sender, -nyawa)
addPendudukUser(sender, -penduduk)
reply(`*DESAMU DIJARAH!!!*\n\n*riwayat*
💵 money -$${jarahuang}
${getCastilUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : -${jarahnyawa}/100
🚑 terluka : +${jarahpenduduk}`)
}, 120000)
addBatuUser(sender, 3)
addJamurUser(sender, 1)
addPohonUser(sender, 1)
break

case 'bank':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (args[0]=="pabrik") {
if (!getPabrikUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaPabrikUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 10 menit untuk mencairkan money`)
addKerjaPabrikUser(sender, 1)
setTimeout( () => {
addMoneyUser(sender, 5)
reply(`kamu mendapatkan money sebanyak $5`)
addKerjaPabrikUser(sender, -1)
}, 600000)
} else if (args[0]=="monumen") {
 if (!getMonumenUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaMonumentUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 5 menit untuk mencairkan money`)
addKerjaMonumentUser(sender, 1)
setTimeout( () => {
addMoneyUser(sender, 4)
reply(`kamu mendapatkan money sebanyak $4`)
addKerjaMonumentUser(sender, -1)
}, 300000)
} else if (args[0]=="hiburan") {
 if (!getHiburanUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaHiburanUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 5 menit untuk mencairkan money`)
addKerjaHiburanUser(sender, 1)
setTimeout( () => {
addMoneyUser(sender, 3)
reply(`kamu mendapatkan money sebanyak $3`)
addKerjaHiburanUser(sender, -1)
}, 300000)
} else {return reply(`*PASTIKAN PERINTAH YANG KAMU KETIK ADA DI LIST YANG SUDAH TERSEDIA DI BAWAH YA:*\n\nketik : /bank <query>\nexample : /bank pabrik\n*_________________________________*\n$5 - pabrik\n$4 - monumen\n$3 - hiburan\n*_________________________________*`)}
addsemakUser(sender, 2)
addJamurUser(sender, 1)
break

case 'pangkas':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (args[0]=="pohon") {
if (getPohonUser(sender) < 5 ) return reply(`maaf pohon mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 5 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $5`)
t = getPohonUser(sender)
jumlah = t * 1
addPohonUser(sender, -jumlah)
m = ["1","2","3","4","5","6","7"]
money = m[Math.floor(Math.random() * m.length)]
addMoneyUser(sender, -5)
addMoneyUser(sender, money) 
reply(`Kamu telah memangkas seluruh pohon dengan biaya $5 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${money}`)
} else if (args[0]=="batu") {
if (getBatuUser(sender) < 5 ) return reply(`maaf batu mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 5 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $5`)
t = getBatuUser(sender)
jumlah = t * 1
addBatuUser(sender, -jumlah)
m = ["1","2","3","4","5","6","7"]
money = m[Math.floor(Math.random() * m.length)]
addMoneyUser(sender, -5)
addMoneyUser(sender, money) 
reply(`Kamu telah memangkas seluruh batu dengan biaya $5 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${money}`)
} else if (args[0]=="semak") {
if (getSemakUser(sender) < 5 ) return reply(`maaf semak mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 3 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $3`)
t = getSemakUser(sender)
jumlah = t * 1
addSemakUser(sender, -jumlah)
m = ["1","2","3","4","5"]
money = m[Math.floor(Math.random() * m.length)]
addMoneyUser(sender, -3)
addMoneyUser(sender, money) 
reply(`Kamu telah memangkas seluruh semak dengan biaya $3 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${money}`)
} else if (args[0]=="jamur") {
if (getJamurUser(sender) < 5 ) return reply(`maaf jamur mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 2 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $2`)
t = getJamurUser(sender)
jumlah = t * 1
addJamurUser(sender, -jumlah)
m = ["1","2","3"]
money = m[Math.floor(Math.random() * m.length)]
addMoneyUser(sender, -2)
addMoneyUser(sender, money) 
reply(`Kamu telah memangkas seluruh jamur dengan biaya $2 untuk pengobatan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${money}`)
}
} else {return reply(`*PASTIKAN PERINTAH YANG KAMU KETIK ADA DI LIST YANG SUDAH TERSEDIA DI BAWAH YA:*\n\nketik : /pangkas <query>\nexample : /pangkas pohon\n*_________________________________*\n$5 - pohon\n$5 - batu\n$3 - semak\n$2 - jamur\n*_________________________________*`)}
break

case 'buy':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (args[0]=="samurai") {
ppp = `${args.join(' ')}`
payout = ppp.split(" ")[1];
money = 1
amount = payout * 1
bayar = payout * money
if (getPendudukUser(sender) <= bayar) return reply(`Maaf penduduk kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getPendudukUser(sender) >= bayar ) {
addPendudukUser(sender, -bayar)
addSamuraiUser(sender, amount)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Merekrut Samurai Sebanyak ${payout}`)
} 
} else if (args[0]=="barakuda") {
ppp = `${args.join(' ')}`
payout = ppp.split(" ")[1];
money = 1
amount = payout * 1
bayar = payout * money
if (getPendudukUser(sender) <= bayar) return reply(`Maaf penduduk kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getPendudukUser(sender) >= bayar ) {
addPendudukUser(sender, -bayar)
addBarakudaUser(sender, amount)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Merekrut Barakuda Sebanyak ${payout}`)
} 
} else if (args[0]=="ramuan") {
bayar = 1 * 15
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
summon = getHealthUser(sender)
addHealthUser(sender, -summon)
addHealthUser(sender, 100)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Meningkatan Nyawa Pertahananmu`)
} 
} else if (args[0]=="house") {
ppp = `${args.join(' ')}`
payout = ppp.split(" ")[1];
money = 10
bayar = payout * money
amount = payout * 1
penduduk = payout * 15
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addHouseUser(sender, amount)
addPendudukUser(sender, penduduk)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Membangun Rumah Penduduk`)
} 
} else if (args[0]=="hospital") {
if (getHospitalUser(sender) > 0) return reply(`Hospital Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 30
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addHospitalUser(sender, 1)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Membangun Rumah Sakit Untuk Tentara Yang Terluka`)
} 
} else if (args[0]=="benteng") {
if (getBentengUser(sender) > 0) return reply(`Benteng Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 50
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addBentengUser(sender, 1)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Membangun Benteng Pertahanan`)
} 
} else if (args[0]=="pabrik") {
if (getPabrikUser(sender) > 0) return reply(`Pabrik Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 45
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addPabrikUser(sender, 1)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Membangun Pabrik Untuk Mendapatkan Uang`)
reply(`Ketik /bank untuk menarik uangmu hasil kerja pabrik/monument/hiburan`)
} 
} else if (args[0]=="monumen") {
if (getMonumenUser(sender) > 0) return reply(`Monument Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 35
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addMonumenUser(sender, 1)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Membangun Monumen Untuk Membangun Perekonomian Dan Health`)
reply(`Ketik /bank untuk menarik uangmu hasil kerja pabrik/monument/hiburan`)
} 
} else if (args[0]=="hiburan") {
if (getHiburanUser(sender) > 0) return reply(`Hiburan Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 20
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addHiburanUser(sender, 1)
await reply(`* BARAK PERTAHANAN *\n\nKamu Telah Membangun Tempat Hiburan Bagi Penduduk`)
reply(`Ketik /bank untuk menarik uangmu hasil kerja pabrik/monument/hiburan`)
} 
} else if (args[0]=="obat") {
if (!getHospitalUser(sender)) return reply(`Kamu belum membangun rumah sakit atau hospital`)
if (getPasienUser(sender) < 10) return reply(`maaf pasien mu belum mencukupi untuk disembuhkan, minimal 10`)
if (getMoneyUser(sender) < 15) return reply(`maaf uang mu belum mencukupi untuk berobat , minimal $15`)
sakit = getPasienUser(sender)
jumlah = sakit * 1
addPasienUser(sender, -jumlah)
addPendudukUser(sender, jumlah)
addMoneyUser(sender, -10)
reply(`Kamu telah menyembuhkan seluruh pasien dengan biaya $10 untuk pengobatan`)
} else {return reply(`*PASTIKAN PERINTAH YANG KAMU KETIK ADA DI LIST YANG SUDAH TERSEDIA DI BAWAH YA:*\n\nketik : /buy <query> <amount>\nexample : /buy samurai 5\n*_________________________________*\n1pd - samurai\n1pd - barakuda\n$15 - ramuan\n$15 - house\n$30 - hospital\n$50 - benteng\n$45 - pabrik\n$35 - monument\n$20 - hiburan\n$10 - obat\n*_________________________________*`)}
addBatuUser(sender, 2)
addJamurUser(sender, 3)
break

case 'daftar':
if (getRpgId(sender)) return reply(`❎ _kamu sudah terdaftar sebelumnya_`)
await addRpgId(sender)
reply(`*SUKSES REGISTRASION*\n\nnama: ${pushname},\nmention: ${sender.split("@s.whatsapp.net")}\ndate: ${date}\n\nKetik /desa untuk melihat perkembangan desamu`)
break
				
case 'hidetag':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
                                if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					if (args.length < 1) return reply('tag orangnya')
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
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					if (args.length < 1) return reply('tag orangnya')
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
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
addPendudukUser(sender, 2)
break
			
case 'desa':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
reply(`💵 money : $${getMoneyUser(sender)}

*Pertahanan*
${getCastilexUser(sender)} CASTILE LEVEL ${getLevelUser(sender)}
❤️ health : ${getHealthUser(sender)}/100
🤺 samurai : ${getSamuraiUser(sender)}
🏇 barakuda : ${getBarakudaUser(sender)}
${getBentengxUser(sender)} : ${getBentengUser(sender)}/1

*Sosial*
👥 penduduk : ${getPendudukUser(sender)}
🏢 hospital : ${getHospitalUser(sender)}/1
${getRumahxUser(sender)} house : ${getHouseUser(sender)}
🚑 pasien : ${getPasienUser(sender)}

*Ekonomi*
${getPabrikxUser(sender)} pabrik : ${getPabrikUser(sender)}/1
${getMonumenxUser(sender)} monumen : ${getMonumenUser(sender)}/1
${getHiburanxUser(sender)} hiburan : ${getHiburanUser(sender)}/1

*Alam*
🌳 pohon : ${getPohonUser(sendee)} 
🪨 batu : ${getBatuUser(sender)} 
🌾 semak : ${getSemakUser(sender)} 
🍄 jamur : ${getJamurUser(sender)}`)
break

case 'warning':
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`❎ _tambahkan angka pada perintah_`)
jumlah = args.join(" ")
badword_limit = jumlah
reply(`*Warning* Siap dinyalakan, Jika ada seseorang yang berkata toxic sebanyak ${badword_limit} atau lebih maka otomatis akan ter Kick`)
break
				
				
				case 'welcome':
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
				if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
					if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
						if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
					if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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
							if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
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

if (budy.startsWith('>')){
if (!isOwner) return
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
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
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break
}

if (buttonsR === `OWNER`) {
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break
}

if (buttonsR === `HOW TO USE`) {
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
uptime = process.uptime()
teks =`*INFROMATION SYSTEM BOT*
  
❒ name ${pushname}
❒ money $${getMoneyUser(sender)}
❒ language nodejs
❒ runtime ${kyun(uptime)}
❒ user ${_rpg.length} active

*LIST FITUR BOT WHATSAPP*
   
❒ ${prefix2}sticker
info: mengubah gambar/video menjadi sticker
ex: tag gambar lalu ketik /sticker jika video maximal 10s

❒ ${prefix2}toimg
info: mengubah sticker menjadi gambar
ex: tag sticker kemudian ketik /toimg (tidak support sticker video)

❒ ${prefix2}tagall
info: menge-tag semua member yang berada di grup
ex: ketik /tagall <teks>

❒ ${prefix2}broadcast
info: mengirimkan pesan kepada seluruh pengguna bot 
ex: ketik /broadcast <teks> 

❒ ${prefix2}kick
❒ ${prefix2}add
info: menendang member yang telah di targetkan oleh admin
ex: ketik /kick @tagmember (pastikan 1 perintah 1 member dilarang lebih dari 1)

❒ ${prefix2}add
info: mengundang seseorang kedalan grup whatsapp dengan menggunakan bot
ex: ketik /add 628×××× pastikan tidak ada tanda "- + atau spasi"

❒ ${prefix2}promote
info: menjadikan admin kepada target yang telah di tag
ex: ketik /promote @tagmember (pastikan 1 perintah 1 member dilarang lebih dari 1)

❒ ${prefix2}demote
info: menurunkan jabatan admin menjadi member biasa
ex: ketik /demote @tagmember (pastikan 1 perintah 1 member dilarang lebih dari 1)

❒ ${prefix2}welcome
info: menyambut pengguna yang baru saja masuk kedalam grup
ex: ketik /welcome kemudian pilih tombol yang bertuliskan enable

❒ ${prefix2}antilink
info: menendang pengguna yang baru saja mengirimkan link grup lain
ex: ketik /antilink kemudian pilih tombol yang bertuliskan enable

❒ ${prefix2}warning
info: mengubah limit anti badword pada peserta yang telah terdaftar
ex: auto on ketika bot menjadi admin

❒ ${prefix2}hidetag
info: menge-tag seluruh anggota grup dengan teks tanpa mentioned
ex: ketik /hidetag <teks>

❒ ${prefix2}open/close
info: mengizinkan seluruh peserta berbicara dan hanya mengizinkan admin berbicara
ex: ketik /open/close kemudian pilih tombol yang ingin digunakan oleh kalian`
sendButDocument(from, `${teks}`, `\n`, fs.readFileSync(`./lib/odc.jpeg`), {mimetype: Mimetype.pdf, thumbnail:fs.readFileSync(`./lib/odc.jpeg`), filename: `MITSUHA BOT BETA 🦈`}, [{buttonId:`DEVELOPER`,buttonText:{displayText:'DEVELOEPER'},type:1},{buttonId:`SOURCE CODE`,buttonText:{displayText:'SOURCE CODE'},type:1}])
break
}

if (buttonsR === 'SOURCE CODE') {
reply(`Bot ini menggunakan script dari:\n\nhttps://www.github.com/ChacaX\n\nDilarang keras menghapus thanks to dari sc, Ketauan apus? nomor auto banned`)
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

              if (buttonsR === 'MENU') {
if (!getRpgId(sender)) return reply(`❎ _kamu belum mendaftar ketik /daftar untuk akses bot_`)
uptime = process.uptime()
teks =`*INFORMASI*
❒ name ${pushname}
❒ money $${getMoneyUser(sender)}
❒ language nodejs
❒ runtime ${kyun(uptime)}
❒ user ${_rpg.length} active

*RPG MENU*
❒ ${prefix2}desa
❒ ${prefix2}buy
❒ ${prefix2}upgrade
❒ ${prefix2}training
❒ ${prefix2}war
❒ ${prefix2}bank
❒ ${prefix2}pangkas

*GRUP MENU*   
❒ ${prefix2}tagall
❒ ${prefix2}kick
❒ ${prefix2}add
❒ ${prefix2}promote
❒ ${prefix2}demote
❒ ${prefix2}welcome
❒ ${prefix2}antilink
❒ ${prefix2}warning
❒ ${prefix2}hidetag
❒ ${prefix2}open/close

*OTHER MENU*
❒ ${prefix2}broadcast
❒ ${prefix2}sticker
❒ ${prefix2}toimg`
sendButDocument(from, `${teks}`, `\n`, fs.readFileSync(`./lib/odc.jpeg`), {mimetype: Mimetype.pdf, thumbnail:fs.readFileSync(`./lib/odc.jpeg`), filename: `MITSUHA BOT BETA 🦈`}, [{buttonId:`DEVELOPER`,buttonText:{displayText:'DEVELOEPER'},type:1},{buttonId:`SOURCE CODE`,buttonText:{displayText:'SOURCE CODE'},type:1},{buttonId:`HOW TO USE`,buttonText:{displayText:'HOW TO USE'},type:1}])
addPendudukUser(sender, 2)
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
