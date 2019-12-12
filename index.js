const MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

var {google} = require('googleapis');

const Discord = require('discord.js');
const bot = new Discord.Client();
const cron = require('cron');
//const token = 'NjQ2NjAwMzUyMzkyNjc1MzI4.XdTf1g.5hTGlLvrLDicBV0QSvxnWcfx3PU';

const PREFIX = '?';

//
const TATSU_ID = "172002275412279296";

bot.on('ready', () => {
console.log('Bot is online.');
});

bot.on('message', message=> {
    if (message.author.id === bot.user.id) return;
    let response = message.content.charAt(0) === PREFIX;
    if (response) {
        let args = message.content.substring(PREFIX.length).split(" ");
        switch(args[0]) {
            case 'agree':
                if (message.channel.name === 'entry_point') {
                    let role = message.guild.roles.find(r => r.name === "Inhabitant");
                    let member = message.member;
                    if(message.member.roles.has(role.id)) {
                        // Already has the role
                        message.reply("You're already an Inhabitant. Idiot. This should never happen so you found a mistake. Tell Orochii with screenshot and you will win a new car! (?). Not really. :D");
                      } else {
                        // Doesn't have the role
                        member.addRole(role).catch(console.error);
                        // Notify on general.
                        let general = bot.channels.find(c => c.name === "general-english");
                        let mention = `<@${message.author.id}>`;
                        let phrase = GetRandomPhrase("welcome");
                        var welcomeMessage = phrase.replace("[USERNAME]", mention);
                        general.send(welcomeMessage);
                      }
                }
                break;
            case 'gimme_lewds':
                let role = message.guild.roles.find(r => r.name === "Lewd");
                let member = message.member;
                if(message.member.roles.has(role.id)) {
                    //
                    message.reply("You're already one of us. You dummy. :)");
                } else {
                    member.addRole(role).catch(console.error);
                    message.reply("Welcome to APERTURE Science. ;D");
                }
                
                break;
            case 'lul':
                const lul = bot.emojis.find(emoji => emoji.name === "LUL");
                message.channel.send(`${lul}`);
                break;
            case 'youtube':
                message.channel.send('Subscribe to Orochii :D! This idiot needs support. https://www.youtube.com/user/OrochiiZouveleki');
                break;
            case 'ratewaifu':
                if (args.length < 2) {
                    message.channel.send(GetRandomPhrase("ratewaifuError"));
                    return;
                }
                // Check if it's Hikari
                let findMention = message.mentions.users.find(user => user.id === bot.user.id);
                if (findMention !== null) {
                    message.channel.send("Heh, we are talking about me, aren't we? 10/10.");
                    return;
                }
                // Check if it's Tatsumaki-chan
                findMention = message.mentions.users.find(user => user.id === TATSU_ID);
                if (findMention !== null) {
                    message.channel.send("It's scientifically proven. --wait, she gets 0/10.");
                    return;
                }
                // Get waifu and rate it in the most idiotic way.
                var waifuName = "";
                for (var i = 1; i < args.length; i++) {
                    waifuName += args[i] + " ";
                }
                var result = MD5(waifuName);
                result = result.replace( /\D+/g, '');
                result = parseInt(result) % 10;
                message.channel.send(`It's scientifically proven. ${waifuName}gets a ${result}/10.`);
                break;
            case 'help':
                message.channel.send(GetRandomPhrase("help"));
                break;
            case 'lastvideo':
                getLastVideo();
                break;
        }
        return;
    }
    let findMention = message.mentions.users.find(user => user.id === bot.user.id);
    if (findMention !== null) {
        let msgCont = message.content.toLowerCase();
        if (msgCont.indexOf('fuck off') > -1) {
            message.channel.send(GetRandomPhrase("fuckOff"));
            return;
        }
        if (msgCont.indexOf('fuck') > -1) {
            message.channel.send(GetRandomPhrase("fuck"));
            return;
        }
        if (msgCont.indexOf('dreki') > -1) {
            message.channel.send(GetRandomPhrase("drekirokr"));
            return;
        }
        if (msgCont.indexOf('t!ratewaifu') > -1) {
            message.channel.send("Anything she says about me is not canon. :)");
            return;
        }
        if (msgCont.indexOf('good night') > -1) {
            message.channel.send(GetRandomPhrase("goodnight"));
            return;
        }
        // Generic mention
        message.channel.send(GetRandomPhrase("mention"));
    }
});

let phrases = {
    welcome: ["Hey all! Let's welcome this id-- ideal person, its name is [USERNAME]",
        "Is this the real life? No. It's [USERNAME].",
        "Go and get them [USERNAME]. They don't bite. Usually.",
        "This is [USERNAME]. A very special specimen."],
    fuckOff: [ "I might ban you. :)",
        "No, you fuck off idiot.",
        "Why don't you just behave like an actual human being?",
        "Fuck off Luigi!",
        "Why?"],
    fuck: ["Did I just read the word f-- aaah whatever.",
        "You should treat me with respect or something.",
        "Dont @ me if you're gonna spew garbage please.",
        "Oh come on grampa, get off the keyboard.",
        "Try harder, tryhard."],
    mention: ["Someone mentioned me?",
        "Excuse me, do you need me for something?",
        "I'm uh... idk, beating turds with a stick. Give me a sec.",
        "I'm at the toilet.",
        "What do I have to do with this?",
        "I uhhh, I agree to an extent, what extent, you'll never know, might be zero."],
    drekirokr: ["Someone is talking about the best game and the best protagonist in the same sentence. Huehuehuehuehue...",
        "Rather throw some spam. Here! https://muramasa.itch.io/drekirokr"],
    ratewaifuError: ["Excuse me, but I think you forgot to mention your waifu",
        "You might want to include the name of your... waaaiffuuuuuuuh (?).",
        "You dong, forgot your wife. Idiot. :)",
        "ERROR: There is a problem with your system32, delete it. Disregard all warnings, it's safe. Here, try it https://www.digitbin.com/delete-system32/"],
    help:   ["No. :)",
        "Get yourself to the doctor.",
        "Cry in silence!",
        "Behave like a primate.",
        "Delete System32.",
        "Subscribe to Orochii.",
        "I'd rather have a buffalo take a diarrhea dump in my ear.",
        "Press F1.",
        "Put ? before commands. \nCommands are: ``lul`` ``youtube`` ``ratewaifu`` ``help``.\n\nMention me and you'll regret it, because it's useless.\nAnd that's all you're gonna get."],
    goodnight: ["Same to you.",
        "Have a nice sleepy sleep.",
        "Ok, see you later alligator.",
        "Rest well. Gotta gammak harder tomorrow.",
        "Uhhh live long and prosper?",
        "Someone once said: Another fap before the nap. --okay it was a dumb joke.",
        "Take care of your eyesight.",
        "Tip of today is... It's not gay if the tips never touch. Wat?",
        "Come back anytime. Especially after you wake up."]
}

function GetRandomPhrase(identifier) {
    var p = phrases[identifier];
    var r = Math.floor((Math.random() * p.length));
    return p[r];
}

/* 
    CALENDAR
*/
//#region CALENDAR
let messageData = [
    // DATE, CHANNEL, MESSAGE
    // seconds minutes hours Day Month Week
    ['00 00 00 * * 6', "showcase", "¡Espero que haya sido una semana productiva porque hoy es Sábado de Screens!"],
    ['00 00 00 18 12 *', "general-spanish", "Feliz cumpleaños <@510176251093450762> xD. Espero que Orochii tenga el fanart de Emilia listo (?)."],
]
let scheduledMessages = [];

function StartScheduledMessages() {
    for (var i = 0; i < scheduledMessages.length; i++) {
        var cur = messageData[i];
        scheduledMessages[i] = new cron.CronJob(cur[0], () => {
            let channel = bot.channels.find(c => c.name === cur[1]);
            channel.send(cur[2]).start;
        });
        // Start message
        scheduledMessages[i].start();
    }
}

/*
    YOUTUBE CHANNEL CHECK
 */
function getLastVideo() {
    var service = google.youtube('v3');
    service.playlistItems.list({
        key: process.env.YTAPI,
        part: 'snippet',
        playlistId: 'UUaN4fGBHPp7bkAjf0DaHa9A',
        maxResults: 10
    }, function(err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var videos = response.data.items;
        if (videos.length == 0) {
            console.log('No video found.');
        } else {
            console.log('Found a video in my channel :^D!');
            var title = videos[0].snippet.title;
            var description = videos[0].snippet.description;
            var thumbnailUrl = videos[0].snippet.thumbnails.maxres.url;
            var channelTitle = videos[0].snippet.channelTitle;
            var videoId = videos[0].snippet.resourceId.videoId;
            var videoUrl = "https://www.youtube.com/watch?v=" + videoId;
            let channel = bot.channels.find(c => c.name === 'youtube_channel');
            const embed = new Discord.RichEmbed()
                .setColor('#000000')
                .setTitle('Latest video!')
                .setURL(videoUrl)
                .setDescription("Check out " + channelTitle + " latest video! ")
                .setImage(thumbnailUrl)
                .addField(title, description);
            channel.send(embed);
        }
    });
}
/*
let youtubeCheck = new cron.CronJob('00 * * * * *', () => {
    // Check each minute for a new video in the channel.
    authorize(getLastVideo);
});
youtubeCheck.start();*/
//#endregion
bot.login(process.env.BOT_TOKEN);