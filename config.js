const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349017545298";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_38_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImF0TU1aKzZEOGNUcGx1cGFsdFBNemIzZ0lhYW42NGpWUjU5NDhmM3EyRzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImx4QVY5bWg4Ukhpc0FaVlVSSEFIdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTdmOWI5YTctZDg1Ny00ODFmLThmNWYtZDRkNGFlY2IxY2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgOTgsXG4gICAgICAxNTYsXG4gICAgICA1NyxcbiAgICAgIDE5LFxuICAgICAgMTc2LFxuICAgICAgMTM1LFxuICAgICAgOTksXG4gICAgICAxNjcsXG4gICAgICA0OCxcbiAgICAgIDEzMCxcbiAgICAgIDIyMixcbiAgICAgIDE3OSxcbiAgICAgIDE0NSxcbiAgICAgIDE5MixcbiAgICAgIDMsXG4gICAgICAxMDksXG4gICAgICAxMDYsXG4gICAgICAzMCxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAxMDIsXG4gICAgICAyNTAsXG4gICAgICAyNTEsXG4gICAgICAxMDIsXG4gICAgICAxMzEsXG4gICAgICAxNjgsXG4gICAgICAyNDksXG4gICAgICAxMzIsXG4gICAgICA4MixcbiAgICAgIDEzNixcbiAgICAgIDE5NyxcbiAgICAgIDEzMSxcbiAgICAgIDE0NSxcbiAgICAgIDI0NixcbiAgICAgIDE5MyxcbiAgICAgIDI0MixcbiAgICAgIDUsXG4gICAgICAyMjYsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUg5VEdNQVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTc1NDUyOTg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU5MDQ4MDQ0NzE4OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmJIZ2JNREVOeTk0TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiRnR2MTF0UnBwMXh2T0lqYm5ZZ2FWemcyWlV2OUhyeHJaS3dOMDJENjFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpIM2dPZE5OYVJ4MXR1K1hNQ0hNQTFqbEhZUk9kMWVJb0o1OFQzYml3TGVBK1R0YVplYXpGeFgrU0NyNnZQWUUveDhlYStqSUFPTU0zM2FLTmlLNEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV4UHdacldJS3YwODV0Vm5FcXVKWWY5aXVsakUwZG9YaklTYSt2OUdRcTdWcmZIMTN1MHBhY01mYnM2bzcwUitHSUJmbmxLOCsveUJHZTQ2UUNvK0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTc1NDUyOTg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDUxMTA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
