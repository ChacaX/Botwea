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
thumb = fs.readFileSync('./lib/odc.jpeg') 

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
const obj = {a: userid, b: 100 , c: 5, d: 0, e: 0, f: 150, g: 15, h: 0, i: 0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:5, r:2, s:6, t:3, u:1, v:0, y:2, x:0, z:0}
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

const addTukangUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].y += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getTukangUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].y
}
}

const addNagaUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].v += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getNagaUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].v
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

const addKerjaHotelUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].z += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getKerjaHotelUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].z
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

const addArcherUser = (userid, amount) => {
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

const getArcherUser = (userid) => {
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

const addHotelUser = (userid, amount) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
_rpg[position].x += amount
fs.writeFileSync('./src/rpg.json', JSON.stringify(_rpg))
}
}

const getHotelUser = (userid) => {
let position = false
Object.keys(_rpg).forEach((i) => {
if (_rpg[i].a === userid) {
position = i
}
})
if (position !== false) {
return _rpg[position].x
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

const addPohonUser = (userid, amount) => {
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

const getPohonUser = (userid) => {
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

const addBatuUser = (userid, amount) => {
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

const getBatuUser = (userid) => {
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

const addSemakUser = (userid, amount) => {
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

const getSemakUser = (userid) => {
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

const addJamurUser = (userid, amount) => {
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

const getJamurUser = (userid) => {
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

const date = new Date().toLocaleDateString()
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
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
let buffer = await getBuffer(ppimg)
client.sendMessage(mdata.id, `Hi @${num.split('@')[0]}, selamat satang di grup ${mdata.subject}\n\n${mdata.desc}\n\n???? The date you join ${date}\n??? The time you join ${time}`, MessageType.text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [],"externalAdReply": {"title": `4no ???`,"body": `join to my grup whatsapp`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./lib/odc.jpeg'),"sourceUrl": "https://chat.whatsapp.com/KUaDGHR1Bln0iLuFERyJRo"}}}) 

} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
client.sendMessage(mdata.id, `Bye @${num.split('@')[0]}`, MessageType.text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [],"externalAdReply": {"title": `4no ???`,"body": `join to my grup whatsapp`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./lib/odc.jpeg'),"sourceUrl": "https://chat.whatsapp.com/KUaDGHR1Bln0iLuFERyJRo"}}}) 
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
				wait: '???? sabar ~ lagi di proses',
				success: '???? berhasil miauw ~',
				error: {
					stick: '???? gagal ~ sistemnya eror',
					Iv: '???? cottomate ~ linknya gak valid onichan. masukin yang bener dong! '
				},
			  only: {
					group: '???? fitur ini khusus digrup kaka ~',
					ownerG: '??????????? fitur ini khusus owner grup kaka ~',
					ownerB: '???? fitur ini hanya bisa digunakan oleh pemilik bot desu baka!!',
					admin: '???? fitur ini hanya bisa digunakan oleh admin grup saja baka!!',
					Badmin: '???? bot harus jadi admin kaka untuk akses fitur ini ~'
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
				client.sendMessage(from, teks, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `whatsapp?????????`,"body": `subscribe my channel youtube`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./lib/odc.jpeg'),"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
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
var castil ='???????'
if (getCastilexUser === 1) {
castil ='???????' 
} else if (getCastilexUser === 2) {
castil ='????'
} else if (getCastilexUser === 3) {
castil ='????'
} 

const getBentengxUser = getLevelUser(sender)
var benteng ='??????'
if (getBentengxUser === 1) {
benteng ='??????'
} else if (getBentengxUser === 2) {
benteng ='????'
} else if (getBentengxUser === 3) {
benteng ='??????'
} 

const getRumahxUser = getLevelUser(sender)
var rumah ='????'
if (getRumahxUser === 1) {
rumah ='????'
} else if (getRumahxUser === 2) {
rumah ='????'
} else if (getRumahxUser === 3) {
rumah ='????'
} 

const getPabrikxUser = getLevelUser(sender)
var pabrik ='???????'
if (getPabrikxUser === 1) {
pabrik ='???????'
} else if (getPabrikxUser === 2) {
pabrik ='????' 
} else if (getPabrikxUser === 3) {
pabrik ='????'
} 
			
const getMonumenxUser = getLevelUser(sender)
var monumen ='????'
if (getMonumenxUser === 1) {
monumen ='????'
} else if (getMonumenxUser === 2) {
monumen ='????'
} else if (getMonumenxUser === 3) {
monumen ='???????'
} 

const batesTukang = getLevelUser(sender)
var batest ='1'
if (batesTukang === 1) {
batest ='1'
} else if (batesTukang === 2) {
batest ='3'
} else if (batesTukang === 3) {
batest ='4'
} 

const batasNaga =  getLevelUser(sender)
var batasn ='0'
if (batasNaga === 1) {
batasn ='0'
} else if (batasNaga === 2) {
batasn ='10'
} else if (batasNaga === 3) {
batasn ='15'
} 

const batasArcherj =  getLevelUser(sender)
var batasaj ='14'
if (batasArcherj === 1) {
batasaj ='14'
} else if (batasArcherj === 2) {
batasaj ='24'
} else if (batasArcherj === 3) {
batasaj ='34'
} 

const batasSamuraij =  getLevelUser(sender)
var batassj ='14'
if (batasSamuraij === 1) {
batassj ='14'
} else if (batasSamuraij === 2) {
batassj ='24'
} else if (batasSamuraij === 3) {
batassj ='34'
} 

const batasNagaj =  getLevelUser(sender)
var batasnj ='0'
if (batasNagaj === 1) {
batasnj ='0'
} else if (batasNagaj === 2) {
batasnj ='9'
} else if (batasNagaj === 3) {
batasnj ='14'
} 

const getNagaxUser = getLevelUser(sender)
var naganya ='*terkunci*'
if (getNagaxUser === 1) {
naganya ='*terkunci*'
} else if (getNagaxUser === 2) {
naganya =`${getNagaUser(sender)}/${batasn}`
} else if (getNagaxUser === 3) {
naganya =`${getNagaUser(sender)}/${batasn}`
} 

const getHotelxUser = getLevelUser(sender)
var hotell ='*terkunci*'
if (getHotelxUser === 1) {
hotell ='*terkunci*'
} else if (getHotelxUser === 2) {
hotell ='*terkunci*'
} else if (getHotelxUser === 3) {
hotell =`${getHotelUser(sender)}`
} 

const getHiburanxUser = getLevelUser(sender)
var hiburan ='???'
if (getHiburanxUser === 1) {
hiburan ='???'
} else if (getHiburanxUser === 2) {
hiburan ='???????'
} else if (getHiburanxUser === 3) {
hiburan ='????'
} 

const batesPabrik = getLevelUser(sender)
var batesp ='0'
if (batesPabrik === 1) {
batesp = '0'
} else if (batesPabrik === 2) {
batesp ='2'
} else if (batesPabrik === 3) {
batesp ='3'
} 

const batesMonumen =  getLevelUser(sender)
var batesm ='0'
if (batesMonumen === 1) {
batesm ='0'
} else if (batesMonumen === 2) {
batesm ='2'
} else if (batesMonumen === 3) {
batesm ='3'
} 

const batasArcher =  getLevelUser(sender)
var batasa ='15'
if (batasArcher === 1) {
batasa ='15'
} else if (batasArcher === 2) {
batasa ='25'
} else if (batasArcher === 3) {
batasa ='35'
} 

const batasSamurai =  getLevelUser(sender)
var batass ='15'
if (batasSamurai === 1) {
batass ='15'
} else if (batasSamurai === 2) {
batass ='25'
} else if (batasSamurai === 3) {
batass ='35'
} 

const batesHiburan =  getLevelUser(sender)
var batesh ='0'
if (batesHiburan === 1) {
batesh ='0'
} else if (batesHiburan === 2) {
batesh ='2'
} else if (batesHiburan === 3) {
batesh ='3'
} 

const batesHotel =  getLevelUser(sender)
var batesht ='0'
if (batesHotel === 1) {
batesht ='0'
} else if (batesHotel === 2) {
batesht ='0'
} else if (batesHotel === 3) {
batesht ='1'
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
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {thumbnile: fs.readFileSync('./lib/odc.jpeg'), quoted: mek}) 
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
			

switch(command) {

case 'menu':
case 'help':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
buttons = [{buttonId:`??????????? OWN`,buttonText:{displayText:'??????????? OWN'},type:1},{buttonId:`???? SCRIPT`,buttonText:{displayText:'???? SCRIPT'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync('./lib/odc.jpeg')})).message.imageMessage
buttonsMessage = {footerText:`??????????????? *PROFILE*
?????? name ${pushname}
?????? money $${getMoneyUser(sender)}
?????? user ${_rpg.length} *active*
???

??????????????? *RPG*
?????? ${prefix2}desa
?????? ${prefix2}buy
?????? ${prefix2}upgrade
?????? ${prefix2}training
?????? ${prefix2}war
?????? ${prefix2}bank
?????? ${prefix2}cek
?????? ${prefix2}pangkas
???

??????????????? *OTHER*:
?????? ${prefix2}broadcast
?????? ${prefix2}sticker
?????? ${prefix2}toimg
?????? ${prefix2}owner
???

??????????????? *GROUP*
?????? ${prefix2}tagall
?????? ${prefix2}kick
?????? ${prefix2}add
?????? ${prefix2}promote
?????? ${prefix2}demote
?????? ${prefix2}welcome
?????? ${prefix2}antilink
?????? ${prefix2}warning
?????? ${prefix2}hidetag
?????? ${prefix2}open/close
???

??????????????? *IMAGE*
?????? ${prefix2}cecan
?????? ${prefix2}cogan
?????? ${prefix2}waifu
???
`, imageMessage: imageMsg,
contentText:`*WHATSAPPP BOTZ*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
client.relayWAMessage(prep)
break

case 'owner':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
addPendudukUser(sender, 2)
break

case 'waifu':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(b.url))
buttons = [{buttonId:`get pict waifu`,buttonText:{displayText:`get pict waifu`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage')).message.imageMessage
buttonsMessage = {footerText:'click tombol yang ada dibawah untuk menampilkan gambar selanjutnya', imageMessage: imageMsg,
contentText:`???? *GACHA WAIFU*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'cecan':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
buttons = [{buttonId:`get pict cecan`,buttonText:{displayText:`get pict cecan`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage')).message.imageMessage
buttonsMessage = {footerText:'click tombol yang ada dibawah untuk menampilkan gambar selanjutnya', imageMessage: imageMsg,
contentText:`???? *GACHA CECAN*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'cogan':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
buttons = [{buttonId:`get pict cogan`,buttonText:{displayText:`get pict cogan`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage')).message.imageMessage
buttonsMessage = {footerText:'click tombol yang ada dibawah untuk menampilkan gambar selanjutnya', imageMessage: imageMsg,
contentText:`???? *GACHA COGAN*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'open':
case 'close':
case 'open/close':
case 'tutup':
case 'buka':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.admin)     
if (!isBotGroupAdmins) return reply(mess.only.badmin)
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
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
levelnya = getLevelUser(sender) 
if (levelnya === 1) {
if (getMoneyUser(sender) < 75 ) return reply(`maaf uang mu belum mencukupi untuk upgrade , minimal $75`)
if (getHospitalUser(sender) === 0) return reply(`kamu wajib membangun gedung hospital terlebih dahulu`)
if (getPabrikUser(sender) === 0) return reply(`kamu wajib membangun pabrik terlebih dahulu`)
if (getMonumenUser(sender) === 0) return reply(`kamu wajib membangun monumen terlebih dahulu`)
if (getHiburanUser(sender) === 0) return reply(`kamu wajib membangun hiburan terlebih dahulu`)
addMoneyUser(sender, -75)
addMoneyUser(sender, 25)
addPendudukUser(sender, 20)
addSamuraiUser(sender, 5)
addArcherUser(sender, 5)
addLevelUser(sender, 1)
addTukangUser(sender, 1)
reply(`*YES DESAMU MENCAPAI LEVEL 2*\napa saja yang baru di level2 simak dibawah ya ????\n. \n. \n. \nbangunan bangunan yang berada di level 1 telah di upgrade di level 2\n??????? > ????       ??? > ???????\n?????? > ????      ??????? > ????\n???? > ????      ???? > ????\n.\n.\n.\nbonus karena sudah upgrade ke level 2\n???? + $25\n???? + 5\n???? + 5\n???? + 20\n???? + 1\n. \n. \n. \nbeberapa item slotnya bertambah kini dapat kamu beli lagi sesuai slot yang kamu terima\n???? +2    ????+2    ??????? +2\n???? unlock\ndan beberapa pasukan kini slotnya bertambah`) 
} else if (levelnya === 2) {
if (getMoneyUser(sender) < 150 ) return reply(`maaf uang mu belum mencukupi untuk upgrade , minimal $150`)
if (getPabrikUser(sender) === 2) return reply(`kamu wajib membangun pabrik terlebih dahulu`)
if (getMonumenUser(sender) === 2) return reply(`kamu wajib membangun monumen terlebih dahulu`)
if (getHiburanUser(sender) === 2) return reply(`kamu wajib membangun hiburan terlebih dahulu`)
addMoneyUser(sender, -150)
addMoneyUser(sender, 25)
addPendudukUser(sender, 20)
addSamuraiUser(sender, 5)
addArcherUser(sender, 5)
addLevelUser(sender, 1)
reply(`*YES DESAMU MENCAPAI LEVEL 3*\napa saja yang baru di level3 simak dibawah ya ????\n. \n. \n. \nbangunan bangunan yang berada di level 2 telah di upgrade di level 3\n???? > ????      ??????? > ????\n??????? > ??????     ???? > ????\n???? > ???????      ???? > ????\n.\n.\n.\nbonus karena sudah upgrade ke level 3\n???? + $25\n???? + 5\n???? + 5\n???? + 20\n. \n. \n. \nbeberapa pembaruan kini dapat kamu beli lagi sesuai slot yang kamu terima\n???? +1    ??????? +1    ???? +1\n???? unlock\ndan beberapa pasukan slotnya bertambah`)
} else if (levelnya === 3) {
reply('desa mu telah mencampai level maximum') 
} 
break

case 'war':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`tag @member yang ingin diajak war\n\nexample: /war @${sender.split("@s.whatsapp.net")}`)
if (getLevelUser(sender) === 1) return reply(`Kamu harus meningkatkan desamu ke level 2 terlebih dahulu agar bisa memulai pertarungan`) 
musuh = args.join(" ") 
if (!getRpgId(`${musuh.split('@')[1]}@s.whatsapp.net`)) return reply(`??? _lawan kamu belum mendaftar ketik /daftar untuk akses bot_`)
if (getLevelUser(`${musuh.split('@')[1]}@s.whatsapp.net`) === 1) return reply(`Lawan harus meningkatkan desanya ke level 2 terlebih dahulu agar bisa memulai pertempuran`) 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (getHealthUser(sender) < 30) return reply(`maaf health kamu terlalu rendah untuk memulai pertempuran`)
if (getSamuraiUser(sender) < 20) return reply(`maaf samuraimu belum mencukupi untuk bertempur, minimal 20`)
if (getArcherUser(sender) < 20) return reply(`maaf archer mu belum mencukupi untuk bertempur, minimal 20`)
if (getBentengUser(`${musuh.split('@')[1]}@s.whatsapp.net`) > 0) return reply(`maaf kamu tidak bisa menyerang orang yang telah mendirikan benteng`)
if (getHealthUser(`${musuh.split('@')[1]}@s.whatsapp.net`) < 30) return reply(`maaf health lawan terlalu rendah untuk memulai pertempuran`)
if (getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`) < 20) return reply(`maaf samurai lawan belum mencukupi untuk bertempur, minimal 20`)
if (getArcherUser(`${musuh.split('@')[1]}@s.whatsapp.net`) < 20) return reply(`maaf archer lawan belum mencukupi untuk bertempur, minimal 20`)
pemain = [`PENANTANG`,`${musuh.split('@s.whatsapp.net')[0]}`] 
user = pemain[Math.floor(Math.random() * pemain.length)]
kamu = sender
//================================
/*SENDER & MUSUH*/
a1 = getHealthUser(sender) 
a2 = getSamuraiUser(sender) 
a3 = getArcherUser(sender) 
a5 = getMoneyUser(sender)
b1 = getHealthUser(`${musuh.split('@')[1]}@s.whatsapp.net`) 
b2 = getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`) 
b3 = getArcherUser(`${musuh.split('@')[1]}@s.whatsapp.net`) 
b5 = getMoneyUser(`${musuh.split('@')[1]}@s.whatsapp.net`)
//================================
/*SENDER & MUSUH*/
sam = [`8`,`14`,`12`,`10`,`11`,`13`,`15`] 
samurai = sam[Math.floor(Math.random() * sam.length)]
samuraix = sam[Math.floor(Math.random() * sam.length)]
bar = [`15`,`12`,`8`,`10`,`11`,`13`] 
archer = bar[Math.floor(Math.random() * bar.length)]
archerx = bar[Math.floor(Math.random() * bar.length)]
heal = [`5`,`15`,`15`,`10`,`20`,`15`] 
health = heal[Math.floor(Math.random() * heal.length)]
healthx = heal[Math.floor(Math.random() * heal.length)]
pas = [`5`,`10`,`15`,`5`,`7`,`5`] 
pasien = pas[Math.floor(Math.random() * pas.length)]
pasienx = pas[Math.floor(Math.random() * pas.length)]
u = [`25`,`15`,`35`,`30`,`20`,`15`] 
money = u[Math.floor(Math.random() * u.length)]
moneyx = u[Math.floor(Math.random() * u.length)]
na = [`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`0`,`-1`,`0`] 
nana = na[Math.floor(Math.random() * na.length)]
nanax = na[Math.floor(Math.random() * na.length)]
//================================
/*SENDER & MUSUH*/
samurainya = samurai * 1
samurainyax = samuraix * 1
archernya = archer * 1
archernyax = archerx * 1
healthnya = health * 1
healthnyax = healthx * 1
pasiennya = pasien * 1
pasiennyax = pasienx * 1
moneynya = money * 1
moneynyax = moneyx * 1
naga = nana * 1
nagax = nanax * 1
nagam = getNagaUser(`${musuh.split('@')[1]}@s.whatsapp.net`) * 2
nagak = getNagaUser(sender)  * 2
musuhm = nagam + getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`) + getArcherUser(`${musuh.split('@')[1]}@s.whatsapp.net`) * 1
kamum = nagak + getSamuraiUser(sender) + getArcherUser(sender) * 1
kamum2 = nagam + getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`) + getArcherUser(`${musuh.split('@')[1]}@s.whatsapp.net`) * 1
musuhm2 = nagak + getSamuraiUser(sender) + getArcherUser(sender) * 1
//================================
/*AWAL PERANG*/
mentions(`*TIM MERAH PENANTANG*
???? money : $${getMoneyUser(sender)}
${castil} level : ${getLevelUser(sender)}
?????? health : ${getHealthUser(sender)}/100
???? samurai : ${getSamuraiUser(sender)}
???? archer : ${getArcherUser(sender)}
???? naga : ${getNagaUser(sender)}

*TIM BIRU ${musuh.split('@s.whatsapp.net')[0]}*
???? money : $${getMoneyUser(`${musuh.split('@')[1]}@s.whatsapp.net`)} 
${castil} level : ${getLevelUser(sender)}
?????? health : ${getHealthUser(`${musuh.split('@')[1]}@s.whatsapp.net`)}/100
???? samurai : ${getSamuraiUser(`${musuh.split('@')[1]}@s.whatsapp.net`)}
???? archer : ${getArcherUser(`${musuh.split('@')[1]}@s.whatsapp.net`)}
???? naga : ${getNagaUser(`${musuh.split('@')[1]}@s.whatsapp.net`)} 

*PERTEMPURAN DIMULAI DALAM 10 DETIK LAGI!*`, mentioned, true)
//================================
/*AKHIR PERANG*/
setTimeout( () => {
mentions(`*HASIL PERTEMPURAN*

*DESA PENANTANG*
???? money : +$${money}
${castil} level : ${getLevelUser(sender)}
?????? health : -${kamum2}/100
???? samurai : -${samurai}
???? archer : -${archer}
???? naga : ${naga} 
???? pasien : +${pasien}

*DESA ${musuh.split('@s.whatsapp.net')[0]}*
???? money : +$${moneyx}
${castil} level : ${getLevelUser(sender)}
?????? health : -${musuhm2}/100
???? samurai : -${samuraix}
???? archer : -${archerx}
???? naga : ${nagax} 
???? pasien : +${pasienx}

*DAMAGE*:
Tim merah : ${kamum} damage (penantang) 
Tim biru : ${musuhm} damage (korban) 

yang mempunyai damage lebih banyak dialah yang menang`, mentioned, true) 
}, 10000)
//================================
/*FUNC RPG MUSUH & SENDER*/
addHealthUser(sender, -kamum2) 
addHealthUser(`${musuh.split('@')[1]}`, -musuhm2)
addSamuraiUser(sender, -samurainya) 
addSamuraiUser(`${musuh.split('@')[1]}`, -samurainyax)
addArcherUser(sender, -archernya) 
addArcherUser(`${musuh.split('@')[1]}`, -archernyax) 
addMoneyUser(sender, moneynya) 
addMoneyUser(`${musuh.split('@')[1]}`, moneynyax) 
addPasienUser(sender, pasiennya) 
addPasienUser(`${musuh.split('@')[1]}`, pasiennyax) 
addBatuUser(sender, 1)
addJamurUser(sender, 1)
addPohonUser(sender, 1)
addSemakUser(sender, 1)
addBatuUser(`${musuh.split('@')[1]}`, 2)
addJamurUser(`${musuh.split('@')[1]}`, 2)
addPohonUser(`${musuh.split('@')[1]}`, 3)
addSemakUser(`${musuh.split('@')[1]}`, 2)
break

case 'stiker':
case 'sticker':
case 'stikergif':
case 'stickergif':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
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
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (getHealthUser(sender) < 15) return reply(`maaf health kamu terlalu rendah untuk memulai pertempuran`)
if (getSamuraiUser(sender) < 10) return reply(`maaf samuraimu belum mencukupi untuk bertempur, minimal 10`)
if (getArcherUser(sender) < 10) return reply(`maaf archer mu belum mencukupi untuk bertempur, minimal 10`)
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
???? money : $${getMoneyUser(sender)}
${castil} level : ${getLevelUser(sender)}
?????? health : ${getHealthUser(sender)}/100
???? samurai : ${getSamuraiUser(sender)} 
???? archer : ${getArcherUser(sender)}
\n*musuh*
???? money : $${musuhm}
${castil} level : ${getLevelUser(sender)}
?????? health : ${musuhh}/100
???? samurai : ${musuhs}
???? archer : ${musuhb}`)
hatinya = kamuh * 1
samurainya = kamus * 1
archernya = kamub * 1
moneynya = kamum * 1
sakitnya = ksakit * 1
sakitnya2 = esakit * 1
addHealthUser(sender, -hatinya)
addSamuraiUser(sender, -samurainya)
addArcherUser(sender, -archernya)
addMoneyUser(sender, moneynya)
addSamuraiUser(sender, -sakitnya)
addArcherUser(sender, -sakitnya2)
addPasienUser(sender, sakitnya)
addPasienUser(sender, sakitnya2)
setTimeout( () => {
reply(`*HASIL PERTEMPURAN*\n\n*kamu*
???? money : +$${kamum}
${castil} level : ${getLevelUser(sender)}
?????? health : -${kamuh}/100
???? samurai : -${kamus}
???? archer : -${kamub}
???? terluka : +${ksakit} +${esakit}
\n*musuh*
???? money : -$${musuhm}
${castil} level : ${getLevelUser(sender)}
?????? health : -${musuhh}/100
???? samurai : -${musuhs}
???? archer : -${musuhb}
???? terluka : +${msakit}\n\n*KAMU* : ${jadi}`)
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
???? money -$${jarahuang}
${castil(sender)} level : ${getLevelUser(sender)}
?????? health : -${jarahnyawa}/100
???? terluka : +${jarahpenduduk}`)
}, 120000)
addBatuUser(sender, 2)
addJamurUser(sender, 1)
addPohonUser(sender, 1)
break

case 'bank':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (args[0]=="pabrik") {
if (!getPabrikUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaPabrikUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 3 menit untuk mencairkan money`)
addKerjaPabrikUser(sender, 1)
setTimeout( () => {
user = getPabrikUser(sender) 
ea = user * 20
addMoneyUser(sender, ea)
reply(`kamu mendapatkan money sebanyak $${ea}`)
addKerjaPabrikUser(sender, -1)
}, 180000)
} else if (args[0]=="monumen") {
 if (!getMonumenUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaMonumentUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 2 menit untuk mencairkan money`)
addKerjaMonumentUser(sender, 1)
setTimeout( () => {
user = getMonumenUser(sender) 
ea = user * 15
addMoneyUser(sender, ea)
reply(`kamu mendapatkan money sebanyak $${ea}`)
addKerjaMonumentUser(sender, -1)
}, 120000)
} else if (args[0]=="hiburan") {
 if (!getHiburanUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaHiburanUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 2 menit untuk mencairkan money`)
addKerjaHiburanUser(sender, 1)
setTimeout( () => {
user = getHiburanUser(sender) 
ea = user * 10
addMoneyUser(sender, ea)
reply(`kamu mendapatkan money sebanyak $${ea}`)
addKerjaHiburanUser(sender, -1)
}, 120000)
} else if (args[0]=="hotel") {
 if (!getHotelUser(sender)) return reply(`kamu belum mempunyai bangunan ini`)
if (getKerjaHotelUser(sender) === 1) return reply(`maaf uang kamu sedang dicairkan kami sibuk bekerja, tunggulah sesudah uang cair`) 
reply(`tunggu 5 menit untuk mencairkan money`)
addKerjaHotelUser(sender, 1)
setTimeout( () => {
user = getHotelUser(sender) 
ea = user * 25
addMoneyUser(sender, ea)
reply(`kamu mendapatkan money sebanyak $${ea}`)
addKerjaHotelUser(sender, -1)
}, 600000)
} else {return reply(`*PASTIKAN PERINTAH YANG KAMU KETIK ADA DI LIST YANG SUDAH TERSEDIA DI BAWAH YA:*\n\nketik : /bank <query>\ncontoh : /bank pabrik\n*_________________________________*\n$20 - pabrik\n$15 - monumen\n$10 - hiburan\n$25 - hotel\n*_________________________________*`)}
addsemakUser(sender, 2)
addJamurUser(sender, 1)
break

case 'pangkas':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (args[0]=="pohon") {
if (getPohonUser(sender) < 5 ) return reply(`maaf pohon mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 5 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $5`)
t = getPohonUser(sender)
jumlah = t * 1
addPohonUser(sender, -jumlah)
m = ["1","2","3","4","5","6","7"]
money = m[Math.floor(Math.random() * m.length)]
addMoneyUser(sender, -5)
addMoneyUser(sender, jumlah) 
reply(`Kamu telah memangkas seluruh pohon dengan biaya $5 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${jumlah} money`)
} else if (args[0]=="batu") {
if (getBatuUser(sender) < 5 ) return reply(`maaf batu mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 5 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $5`)
t = getBatuUser(sender)
jumlah = t * 1
addBatuUser(sender, -jumlah)
addMoneyUser(sender, -5)
addMoneyUser(sender, jumlah) 
reply(`Kamu telah memangkas seluruh batu dengan biaya $5 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${jumlah} money`)
} else if (args[0]=="semak") {
if (getSemakUser(sender) < 5 ) return reply(`maaf semak mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 3 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $3`)
t = getSemakUser(sender)
jumlah = t * 1
addSemakUser(sender, -jumlah)
addMoneyUser(sender, -3)
addMoneyUser(sender, jumlah) 
reply(`Kamu telah memangkas seluruh semak dengan biaya $3 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${jumlah} money`)
} else if (args[0]=="jamur") {
if (getJamurUser(sender) < 5 ) return reply(`maaf jamur mu belum mencukupi untuk dipangkas, minimal 5`)
if (getMoneyUser(sender) < 2 ) return reply(`maaf uang mu belum mencukupi untuk dipangkas , minimal $2`)
t = getJamurUser(sender)
jumlah = t * 1
addJamurUser(sender, -jumlah)
addMoneyUser(sender, -2)
addMoneyUser(sender, jumlah) 
reply(`Kamu telah memangkas seluruh jamur dengan biaya $2 untuk pemangkasan\n.\n.\n.\nKamu mendapatkan bonus sebesar $${jumlah} money`)
} else {return reply(`*PASTIKAN PERINTAH YANG KAMU KETIK ADA DI LIST YANG SUDAH TERSEDIA DI BAWAH YA:*\n\nketik : /pangkas <query>\ncontoh : /pangkas pohon\n*_________________________________*\n$5 - pohon\n$5 - batu\n$3 - semak\n$2 - jamur\n*_________________________________*`)}
break

case 'buy':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (args[0]=="samurai") {
if (getSamuraiUser(sender) > batassj) return reply(`Archer yang kamu beli telah mencampai jumlah maximum`) 
ppp = `${args.join(' ')}`
payout = ppp.split(" ")[1];
money = 1
amount = payout * 1
bayar = payout * money
if (getPendudukUser(sender) <= bayar) return reply(`Maaf penduduk kamu belum mencukupi. silahkan kumpulkan dan beli nanti. Beli house di /buy untuk mendapatkan penduduk`)
if (getPendudukUser(sender) >= bayar ) {
addPendudukUser(sender, -bayar)
addSamuraiUser(sender, amount)
reply(`*BARAK PERTAHANAN*\n\nKamu Telah Merekrut Samurai Sebanyak ${payout}`)
if (getSamuraiUser(sender) < batass) return 
if (getSamuraiUser(sender) > batass) {
jumlahn = getSamuraiUser(sender) * 1
addSamuraiUser(sender, -jumlahn) 
bat = batass * 1
addSamuraiUser(sender, bat) 
}
} 
} else if (args[0]=="archer") {
if (getArcherUser(sender) > batasaj) return reply(`Archer yang kamu beli telah mencampai jumlah maximum`) 
ppp = `${args.join(' ')}`
payout = ppp.split(" ")[1];
money = 1
amount = payout * 1
bayar = payout * money
if (getPendudukUser(sender) <= bayar) return reply(`Maaf penduduk kamu belum mencukupi. silahkan kumpulkan dan beli nanti. Beli house di /buy untuk mendapatkan penduduk`)
if (getPendudukUser(sender) >= bayar ) {
addPendudukUser(sender, -bayar)
addArcherUser(sender, amount)
reply(`*BARAK PERTAHANAN*\n\nKamu Telah Merekrut Archer Sebanyak ${payout}`)
if (getArcherUser(sender) < batasn) return 
if (getArcherUser(sender) > batasn ) {
jumlahn = getArcherUser(sender) * 1
addArcherUser(sender, -jumlahn) 
bat = batasa * 1
addArcherUser(sender, bat) 
}
} 
} else if (args[0]=="naga") {
if (getLevelUser(sender) === 1) return reply(`Kamu harus meningkatkan desamu ke level 2 terlebih dahulu agar bisa membeli naga`) 
if (getNagaUser(sender) > batasnj) return reply(`Naga yang kamu beli telah mencampai jumlah maximum`) 
ppp = `${args.join(' ')}`
payout = ppp.split(" ")[1];
money = 10
amount = payout * 1
bayar = payout * money
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
addNagaUser(sender, amount)
reply(`*BARAK PERTAHANAN*\n\nKamu Telah Merekrut Sosok Naga Sebanyak ${payout}`)
if (getNagaUser(sender) < batasn) return 
if (getNagaUser(sender) > batasn ) {
jumlahn = getNagaUser(sender) * 1
addNagaUser(sender, -jumlahn) 
bat = batasn * 1
addNagaUser(sender, bat) 
}
} 
} else if (args[0]=="health") {
bayar = 1 * 15
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
addMoneyUser(sender, -bayar)
summon = getHealthUser(sender)
addHealthUser(sender, -summon)
addHealthUser(sender, 100)
reply(`*BARAK PERTAHANAN*\n\nKamu Telah Meningkatan Nyawa Pertahananmu`)
} 
} else if (args[0]=="house") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
bayar = 1 * 15
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan rumahmu dalam 2 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -15)
addHouseUser(sender, 1)
addPendudukUser(sender, 10)
reply(`  *SELESAI MEMBANGUN*\n
bangunan yang kamu pesan telah dibangun oleh tukang desa kamu.`) 
}, 120000)
} 
} else if (args[0]=="hospital") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (getHospitalUser(sender) > 0) return reply(`Hospital Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 30
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan pembangunan hospital dalam 3 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -bayar)
addHospitalUser(sender, 1)
reply(`  *SELESAI MEMBANGUN*\n
bangunan yang kamu pesan telah dibangun oleh tukang desa kamu`) 
}, 180000)
} 
} else if (args[0]=="benteng") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (getBentengUser(sender) > 0) return reply(`Benteng Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 50
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan pembangunan benteng dalam 5 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -bayar)
addBentengUser(sender, 1)
reply(`*BARAK PERTAHANAN*\n\nKamu Telah Membangun Benteng Pertahanan`)
}, 300000)
} 
} else if (args[0]=="pabrik") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (getPabrikUser(sender) > batesp) return reply(`Pabrik Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 45
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan pembangunan pabrik dalam 5 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -bayar)
addPabrikUser(sender, 1)
reply(`  *SELESAI MEMBANGUN*\n
bangunan yang kamu pesan telah dibangun oleh tukang desa kamu, ketik /bank untuk mencairkan uangmu`) 
}, 300000)
} 
} else if (args[0]=="monumen") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (getMonumenUser(sender) > batesm) return reply(`Monument Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 35
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan pembangunan monumen dalam 3 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -bayar)
addMonumenUser(sender, 1)
reply(`  *SELESAI MEMBANGUN*\n
bangunan yang kamu pesan telah dibangun oleh tukang desa kamu, ketik /bank untuk mencairkan uangmu`) 
}, 180000)
} 
} else if (args[0]=="hiburan") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (getHiburanUser(sender) > batesh) return reply(`Hiburan Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 20
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan pembangunan hiburan dalam 1 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -bayar)
addHiburanUser(sender, 1)
reply(`  *SELESAI MEMBANGUN*\n
bangunan yang kamu pesan telah dibangun oleh tukang desa kamu, ketik /bank untuk mencairkan uangmu`) 
}, 60000)
} 
} else if (args[0]=="hotel") {
if (getTukangUser(sender) === 0) return reply(`seluruh tukang yang kamu miliki sedang sibuk, mohon tunggu hingga salah satu tukang selesai`) 
if (getLevelUser(sender) < 3) return reply(`Kamu harus meningkatkan desamu ke level 3 terlebih dahulu agar bisa membangun hotel`) 
if (getHotelUser(sender) > batesht) return reply(`Hotel Yang Kamu Buat Telah Mencampai Batas Maximal`)
bayar = 1 * 95
if (getMoneyUser(sender) <= bayar) return reply(`Maaf money kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if (getMoneyUser(sender) >= bayar ) {
reply(`tukang desamu sedang menyelesaikan pembangunan hiburan dalam 6 menit`) 
addTukangUser(sender, -1)
setTimeout( () => {
addTukangUser(sender, 1)
addMoneyUser(sender, -bayar)
addHotelUser(sender, 1)
reply(`  *SELESAI MEMBANGUN*\n
bangunan yang kamu pesan telah dibangun oleh tukang desa kamu, ketik /bank untuk mencairkan uangmu`) 
}, 360000)
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
} else if (args[0]=="tukang") {
if (getTukangUser(sender) > batest) return reply(`Tukang kamu sudah berada di jumlah maximal`)
if (getMoneyUser(sender) < 50) return reply(`maaf uang mu belum mencukupi untuk membeli tukang , minimal $50`)
addTukangUser(sender, 1)
addMoneyUser(sender, -50)
reply(`Selamat tukang kamu bertambah 1 semua pekerjaan akan cepat selesai`)
} else {return reply(`*PASTIKAN PERINTAH YANG KAMU KETIK ADA DI LIST YANG SUDAH TERSEDIA DI BAWAH YA:*\n\nketik : /buy <query> <amount>\ncontoh : /buy samurai 5\n*_________________________________*\n1pd - samurai\n1pd - archer\n$10 - naga\n$15 - health\n$15 - house\n$30 - hospital\n$50 - benteng\n$45 - pabrik\n$35 - monumen\n$20 - hiburan\n$10 - obat\n$50 - tukang\n$95 - hotel\n*_________________________________*`)}
addBatuUser(sender, 1)
addJamurUser(sender, 1)
break

case 'daftar':
if (getRpgId(sender)) return reply(`???? kamu sudah daftar kaka`)
await addRpgId(sender)
reply(`??? *SUCCES VERIFY* ???\n\n*Nama*: ${pushname}\n*Tgl*: ${date}\n*User*: ${_rpg.length}\n*Verify WhatsappBot ???*\n\n_ketik /desa untuk memulai permainan rpg dan melihat perkembangan desamu_`)
break
				
case 'hidetag':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.admin)     
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
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.admin)     
members_id = []
eai = args.join(" ")
teks = (args.length > 1) ? eai.trim() : ''
teks += '\n\n????????? *MENTION ALL*\n'
for (let mem of groupMembers) {
teks += `??????  @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
teks += `??????`
mentions(teks, members_id, true, {quoted: mek})
break
					
				case 'broadcast':
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isOwner) return reply(mess.only.ownerB)
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
}, {quoted: mek})
await client.relayWAMessage(gwekkkjhe)
}
reply('Suksess broadcast ')
}
					
break
                                case 'promote':
                                if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isGroup) return reply(mess.mess.only.group)
					if (!isGroupAdmins) return reply(mess.mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.mess.only.Badmin)
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
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isGroup) return reply(mess.mess.only.group)
					if (!isGroupAdmins) return reply(mess.mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.mess.only.Badmin)
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
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isGroup) return reply(mess.mess.only.group)
					if (!isGroupAdmins) return reply(mess.mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.mess.only.Badmin)
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
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isGroup) return reply(mess.mess.only.group)
					if (!isGroupAdmins) return reply(mess.mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.mess.only.Badmin)
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
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isQuotedSticker) return reply('??? reply stickernya um ???')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('??? Gagal, pada saat mengkonversi sticker ke gambar ???')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
addPendudukUser(sender, 2)
break
			
case 'desa':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
img = "https://telegra.ph/file/fc02a569cc227b2bdb0c3.jpg" 
gmb = await getBuffer(img) 

const batesHotelx =  getLevelUser(sender)
var bateshtx ='*terkunci*'
if (batesHotelx === 1) {
bateshtx ='*terkunci*'
} else if (batesHotelx === 2) {
bateshtx ='*terkunci*'
} else if (batesHotelx === 3) {
bateshtx =`${getHotelUser(sender)}/2`
} 

const batesPabrikv = getLevelUser(sender)
var batespv ='1'
if (batesPabrikv === 1) {
batespv = '1'
} else if (batesPabrikv === 2) {
batespv ='3'
} else if (batesPabrikv === 3) {
batespv ='4'
} 

const batesTukangy = getLevelUser(sender)
var batesty ='2'
if (batesTukangy === 1) {
batesty ='2'
} else if (batesTukangy === 2) {
batesty ='4'
} else if (batesTukangy === 3) {
batesty ='5'
} 

const batesMonumenv =  getLevelUser(sender)
var batesmv ='1'
if (batesMonumenv === 1) {
batesmv ='1'
} else if (batesMonumenv === 2) {
batesmv ='3'
} else if (batesMonumenv === 3) {
batesmv ='4'
} 

const batesHiburanv =  getLevelUser(sender)
var bateshv ='1'
if (batesHiburanv === 1) {
bateshv ='1'
} else if (batesHiburanv === 2) {
bateshv ='3'
} else if (batesHiburanv === 3) {
bateshv ='4'
} 

client.sendMessage(from, gmb, image, {thumbnile: gmb, caption: `???? NAMA DESA : ${pushname} 
${castil} LEVEL DESA : ${getLevelUser(sender)}
???? PONDOK TUKANG : ${getTukangUser(sender)}/${batesty} 

*Pertahanan*
?????? health : ${getHealthUser(sender)}/100
???? samurai : ${getSamuraiUser(sender)}/${batass} 
???? archer : ${getArcherUser(sender)}/${batasa} 
???? naga : ${naganya}
${benteng} benteng : ${getBentengUser(sender)}/1

*Sosial*
???? penduduk : ${getPendudukUser(sender)}
???? hospital : ${getHospitalUser(sender)}/1
${rumah} house : ${getHouseUser(sender)}
???? pasien : ${getPasienUser(sender)}

*Ekonomi*
${pabrik} pabrik : ${getPabrikUser(sender)}/${batespv}
${monumen} monumen : ${getMonumenUser(sender)}/${batesmv}
${hiburan} hiburan : ${getHiburanUser(sender)}/${bateshv}
???? hotel : ${bateshtx}
???? money : $${getMoneyUser(sender)}

*Alam*
???? pohon : ${getPohonUser(sender)} 
???? batu : ${getBatuUser(sender)} 
???? semak : ${getSemakUser(sender)} 
???? jamur : ${getJamurUser(sender)}`}) 
break

case 'cek':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (args.length < 1) return reply(`tag @member yang ingin dicek\n\nexample: /cek @${sender.split("@s.whatsapp.net")}`)
mem = args.join(" ") 
if (!getRpgId(`${mem.split("@")[1]}@s.whatsapp.net`)) return reply(`??? _teman kamu belum mendaftar_`)

const batesTukangs = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var batestt ='2'
if (batesTukang === 1) {
batestt ='2'
} else if (batesTukangs === 2) {
batestt ='4'
} else if (batesTukangs === 3) {
batestt ='5'
} 

const batesPabrikx = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var batespx ='1'
if (batesPabrikx === 1) {
batespx = '1'
} else if (batesPabrikx === 2) {
batespx ='3'
} else if (batesPabrikx === 3) {
batespx ='4'
} 

const batesMonumenx =  getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var batesmx ='1'
if (batesMonumenx === 1) {
batesmx ='1'
} else if (batesMonumenx === 2) {
batesmx ='3'
} else if (batesMonumenx === 3) {
batesmx ='4'
} 

const batesHiburanx =  getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var bateshx ='1'
if (batesHiburanx === 1) {
bateshx ='1'
} else if (batesHiburanx === 2) {
bateshx ='3'
} else if (batesHiburanx === 3) {
bateshx ='4'
} 

const batesHotelxy =  getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var bateshtxy ='*terkunci*'
if (batesHotelxy === 1) {
bateshtxy ='*terkunci*'
} else if (batesHotelxy === 2) {
bateshtxy ='*terkunci*'
} else if (batesHotelxy === 3) {
bateshtxy =`${getHotelUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/2`
} 

const getCastilexUserv = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var castilv ='???????'
if (getCastilexUserv === 2) {
castilv ='???????' 
} else if (getCastilexUserv === 2) {
castilv ='????'
} else if (getCastilexUserv === 3) {
castilv ='????'
} 

const getBentengxUserv = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var bentengv ='??????'
if (getBentengxUserv === 1) {
bentengv ='??????'
} else if (getBentengxUserv === 2) {
bentengv ='????'
} else if (getBentengxUserv === 3) {
bentengv ='??????'
} 

const getRumahxUserv = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var rumahv ='????'
if (getRumahxUserv === 1) {
rumahv ='????'
} else if (getRumahxUserv === 2) {
rumahv ='????'
} else if (getRumahxUserv === 3) {
rumahv ='????'
} 

const getPabrikxUserv = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var pabrikv ='???????'
if (getPabrikxUserv === 1) {
pabrikv ='???????'
} else if (getPabrikxUserv === 2) {
pabrikv ='????' 
} else if (getPabrikxUserv === 3) {
pabrikv ='????'
} 
			
const getMonumenxUserv = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var monumenv ='????'
if (getMonumenxUserv === 1) {
monumenv ='????'
} else if (getMonumenxUserv === 2) {
monumenv ='????'
} else if (getMonumenxUserv === 3) {
monumenv ='???????'
} 

const getHiburanxUserv = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var hiburanv ='???'
if (getHiburanxUserv === 1) {
hiburanv ='???'
} else if (getHiburanxUserv === 2) {
hiburanv ='???????'
} else if (getHiburanxUserv === 3) {
hiburanv ='????'
} 

const batasNagax =  getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var batasnx ='0'
if (batasNagax === 1) {
batasnx ='0'
} else if (batasNagax === 2) {
batasnx ='5'
} else if (batasNagax === 3) {
batasnx ='15'
} 

const batasArcherx =  getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var batasax ='15'
if (batasArcherx === 1) {
batasax ='15'
} else if (batasArcherx === 2) {
batasax ='25'
} else if (batasArcherx === 3) {
batasax ='35'
} 

const batasSamuraix =  getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var batassx ='15'
if (batasSamuraix === 1) {
batassx ='15'
} else if (batasSamuraix === 2) {
batassx ='25'
} else if (batasSamuraix === 3) {
batassx ='35'
} 

const getNagaxUserx = getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)
var naganyax ='*terkunci*'
if (getNagaxUserx === 1) {
naganyax ='*terkunci*'
} else if (getNagaxUserx === 2) {
naganyax =`${getNagaUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batasnx} `
} else if (getNagaxUserx === 3 ) {
naganyax =`${getNagaUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batasnx} `
} 

img = "https://telegra.ph/file/fc02a569cc227b2bdb0c3.jpg" 
gmb = await getBuffer(img) 
client.sendMessage(from, gmb, image, {thumbnile: gmb, caption: `???? NAMA DESA : - 
${castilv} LEVEL DESA : ${getLevelUser(`${mem.split("@")[1]}@s.whatsapp.net`)}
???? PONDOK TUKANG : ${getTukangUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batestt}

*Pertahanan*
?????? health : ${getHealthUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/100
???? samurai : ${getSamuraiUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batassx}
???? archer : ${getArcherUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batasax} 
???? naga : ${naganyax}
${bentengv} benteng : ${getBentengUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/1

*Sosial*
???? penduduk : ${getPendudukUser(`${mem.split("@")[1]}@s.whatsapp.net`)}
???? hospital : ${getHospitalUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/1
${rumahv} house : ${getHouseUser(`${mem.split("@")[1]}@s.whatsapp.net`)}
???? pasien : ${getPasienUser(`${mem.split("@")[1]}@s.whatsapp.net`)}

*Ekonomi*
${pabrikv} pabrik : ${getPabrikUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batespx} 
${monumenv} monumen : ${getMonumenUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${batesmx} 
${hiburanv} hiburan : ${getHiburanUser(`${mem.split("@")[1]}@s.whatsapp.net`)}/${bateshx} 
???? hotel : ${bateshtxy}
???? money : $${getMoneyUser(`${mem.split("@")[1]}@s.whatsapp.net`)}

*Alam*
???? pohon : ${getPohonUser(`${mem.split("@")[1]}@s.whatsapp.net`)} 
???? batu : ${getBatuUser(`${mem.split("@")[1]}@s.whatsapp.net`)} 
???? semak : ${getSemakUser(`${mem.split("@")[1]}@s.whatsapp.net`)} 
???? jamur : ${getJamurUser(`${mem.split("@")[1]}@s.whatsapp.net`)}`}) 
break

case 'warning':
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
if (!isGroup) return reply(mess.mess.only.group)
if (!isGroupAdmins) return reply(mess.mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.mess.only.Badmin)
if (args.length < 1) return reply(`??? _tambahkan angka pada perintah_`)
jumlah = args.join(" ")
badword_limit = jumlah
reply(`*Warning* Siap dinyalakan, Jika ada seseorang yang berkata toxic sebanyak ${badword_limit} atau lebih maka otomatis akan ter Kick`)
break
				
				
				case 'welcome':
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.admin)     
if (!isBotGroupAdmins) return reply(mess.only.badmin)
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
}, {quoted: mek}) 
await client.relayWAMessage(gwekkje)
break
				
				case 'antilink':
				if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
				if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.admin)     
if (!isBotGroupAdmins) return reply(mess.only.badmin)
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
}, {quoted: mek})
await client.relayWAMessage(gwekkkje)
break
					
					      
				default:
				
				if (buttonsR === 'Enable A1') {
					if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
                    if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.admin)     
					if (!isBotGroupAdmins) return reply(mess.only.badmin)
							if (isAntiLink) return reply('_berhasil di aktifkan_')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('_berhasil di aktifkan_')
						
break
						}
						
						if (buttonsR === 'Disable A0') {
						if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
                    if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.admin)     
					if (!isBotGroupAdmins) return reply(mess.only.badmin)
							if (!isAntiLink) return reply('_berhasil di matikan_')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('_berhasil di aktifkan_')
break 
						}
						
				if (buttonsR === 'Enable W1') {
					if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
                    if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.admin)     
					if (!isBotGroupAdmins) return reply(mess.only.badmin)
              	if (isWelkom) return reply('_berhasil di aktifkan_')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('_berhasil di aktifkan_')
						
break
						}
						if (buttonsR === 'Disable W0') {
							if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
                    if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.admin)     
					if (!isBotGroupAdmins) return reply(mess.only.badmin)
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
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}

if (budy.includes(`emek`)) {
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}
   
if (budy.includes(`ontol`)) {
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}

if (budy.includes(`acot`)) {
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}

if (budy.includes(`njg`)) {
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}

if (budy.includes(`gsat`)) {
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}

if (budy.includes(`ancok`)) {
if (!isGroup) return
if (!isBotGroupAdmins) return
if (!getBadwordId(sender)) {
await addBadwordId(sender) 
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} else if (getBadwordId(sender)) {
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
}, {quoted: mek})
await client.relayWAMessage(gwekkhkj1e)
if (getBadwordUser(sender) > badword_limit){
kic = `${sender.split("@")[0]}@s.whatsapp.net`
client.groupRemove(from, [kic]).catch((e)=>{reply(`_error, jadikan bot admin_`)})
addBadwordUser(sender, -badword_limit)
}
} 
break
}

if (buttonsR === `??????????? OWN`) {
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break
}

if (buttonsR === `OWNER`) {
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
await client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
break
}

if (buttonsR === '???? SCRIPT') {
reply(`ingin menginstall script ini? ???? oh boleh banget asal *mematuhi persyaratan* dari owner asli bot ini ya.\n.\n.\nsyarat syarat yang wajib dipatuhi:\n???? dilarang *menjual belikan* sc ini! harap hargai pembuat masal owner aja ngasih gratis tapi kamu jual\n???? *dilarang mengubah thanks to* yang berada di script ini oke\n\n*click* link berikut untuk menginstall script github.com/ChacaX/Botwea`)
}
	
if (buttonsR === 'Tutup') {
                  if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.admin)     
					if (!isBotGroupAdmins) return reply(mess.only.badmin)
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
 
                    if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.admin)     
					if (!isBotGroupAdmins) return reply(mess.only.badmin)
open = {
              text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
              contextInfo: { mentionedJid: [sender] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, false)
              client.sendMessage(from, open, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `whatsapp?????????`,"body": ``,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg"}},quoted: mek})
break
}

if (buttonsR === 'get pict waifu') {
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(b.url))
buttons = [{buttonId:`get pict waifu`,buttonText:{displayText:`get pict waifu`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage')).message.imageMessage
buttonsMessage = {footerText:'click tombol yang ada dibawah untuk menampilkan gambar selanjutnya', imageMessage: imageMsg,
contentText:`???? *GACHA WAIFU*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
} 

if (buttonsR === 'get pict cecan') {
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
buttons = [{buttonId:`get pict cecan`,buttonText:{displayText:`get pict cecan`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage')).message.imageMessage
buttonsMessage = {footerText:'click tombol yang ada dibawah untuk menampilkan gambar selanjutnya', imageMessage: imageMsg,
contentText:`???? *GACHA CECAN*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
} 

if (buttonsR === 'get pict cogan') {
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
buttons = [{buttonId:`get pict cogan`,buttonText:{displayText:`get pict cogan`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage')).message.imageMessage
buttonsMessage = {footerText:'click tombol yang ada dibawah untuk menampilkan gambar selanjutnya', imageMessage: imageMsg,
contentText:`???? *GACHA COGAN*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
}

if (buttonsR === 'MENU') {
if (!getRpgId(sender)) return reply(`kamu belum daftar kaka ~ ketik /daftar untuk mengakses fitur bot`)
buttons = [{buttonId:`??????????? OWN`,buttonText:{displayText:'??????????? OWN'},type:1},{buttonId:`???? SCRIPT`,buttonText:{displayText:'???? SCRIPT'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync('./lib/odc.jpeg')})).message.imageMessage
buttonsMessage = {footerText:`??????????????? *PROFILE*
?????? name ${pushname}
?????? money $${getMoneyUser(sender)}
?????? user ${_rpg.length} *active*
???

??????????????? *RPG*
?????? ${prefix2}desa
?????? ${prefix2}buy
?????? ${prefix2}upgrade
?????? ${prefix2}training
?????? ${prefix2}war
?????? ${prefix2}bank
?????? ${prefix2}cek
?????? ${prefix2}pangkas
???

??????????????? *OTHER*:
?????? ${prefix2}broadcast
?????? ${prefix2}sticker
?????? ${prefix2}toimg
?????? ${prefix2}owner
???

??????????????? *GROUP*
?????? ${prefix2}tagall
?????? ${prefix2}kick
?????? ${prefix2}add
?????? ${prefix2}promote
?????? ${prefix2}demote
?????? ${prefix2}welcome
?????? ${prefix2}antilink
?????? ${prefix2}warning
?????? ${prefix2}hidetag
?????? ${prefix2}open/close
???

??????????????? *IMAGE*
?????? ${prefix2}cecan
?????? ${prefix2}cogan
?????? ${prefix2}waifu
???
`, imageMessage: imageMsg,
contentText:`*WHATSAPPP BOTZ*`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {quoted: mek})
client.relayWAMessage(prep)
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
