const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("#f65026")
.setDescription(`${client.emojis.get("645585518326841379")} [Beni davet eder misin!](//İnvite Linkini Buraya Yazınız)`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["linkler","bot-davet","invite","bot-invite"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};