 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Marley Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:765529282067431437> Marley botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:partner:765529796427251722> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:setting:765529940737130557> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypesquad1:765529282067431437> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:partner:765529796427251722> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:setting:765529940737130557> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad1:765529282067431437> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:765529282067431437> \`${prefix}davet\` | Marley'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:765529282067431437> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:765529282067431437> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/720258926628700223/761193792455311360/Y7jFCB.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}