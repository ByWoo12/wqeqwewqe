


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Metro-M.svg/768px-Metro-M.svg.png`)
.addField("__**Bot Verileri**__", `<a:hypesquad1:765529282067431437> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:765529282067431437> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:765529282067431437> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Sahibi**__", `<a:hypesquad1:765529282067431437> **Bot Sahibi**  <@602095897542787072> \n \n <a:hypesquad1:765529282067431437> **Bot Sahibi**  <@709336474553942108> \n `)
.addField("__**Sürümler**__", `<a:hypesquad1:765529282067431437> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:765529282067431437> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad1:765529282067431437> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:hypesquad1:765529282067431437> " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/720258926628700223/761193792455311360/Y7jFCB.png`)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}