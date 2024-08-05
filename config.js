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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165285448";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_01_42_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWS9EYWNJVFFWV2lWNzlLZ2ZWdHVCOWZDNWpnbkIvTWpFYUI3b2l1RFdHZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXdpS2VtdXVRemVTX1dTMlhfS1Ftd1wiLFxuICBcInBob25lSWRcIjogXCIxYzhiZGRmMS03NWE3LTRiMTktOGZlNS03YTE4MmExOThhNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMTM0LFxuICAgICAgMTIzLFxuICAgICAgMjAyLFxuICAgICAgMTgwLFxuICAgICAgMTk1LFxuICAgICAgNjAsXG4gICAgICAxOTUsXG4gICAgICAzMCxcbiAgICAgIDIwOSxcbiAgICAgIDg2LFxuICAgICAgMTQzLFxuICAgICAgMTI1LFxuICAgICAgMTUsXG4gICAgICA5NCxcbiAgICAgIDEwOSxcbiAgICAgIDExNCxcbiAgICAgIDI0MyxcbiAgICAgIDQ0LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDIyOCxcbiAgICAgIDM0LFxuICAgICAgMTQ2LFxuICAgICAgNjksXG4gICAgICAxNzksXG4gICAgICAxOTQsXG4gICAgICA1NSxcbiAgICAgIDkwLFxuICAgICAgMTU5LFxuICAgICAgMTMsXG4gICAgICAxMzksXG4gICAgICAyMDcsXG4gICAgICA1MSxcbiAgICAgIDExNCxcbiAgICAgIDExOCxcbiAgICAgIDE3MSxcbiAgICAgIDcwLFxuICAgICAgOTIsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJINDZEUDhKUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NTI4NTQ0ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGUgVHJpcGxlIEEgRW1wb3JpdW1cIixcbiAgICBcImxpZFwiOiBcIjQ2NDQxNjE1NjQ2OTE1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEQzL3FrREVQUGJ3TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjOFY4bE5FeTNwTWRRK1pHcUtGTTZYaE4zNjlKYTVzRnpiY0hYdDlQcVEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1ja0Faa2FzSkdZeGNkMnRlQkRHRzNoYlpuSkdicy9LWlFCRHhtSm5UVUJTV2VYVjBid3dhN3ZZY3N4S2dSZEVvSElkOUdUMWQ4RnlnUWVicGVZYURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1TeEhScGdZTEgxQmVSa2RQYURLM3NKdlRGZEFpcjMyRXJLYThnQUlXSnA5eEN3MUNqYUpGaHQ2dGxHai9SUFFLRXpDcUx6cVJYS0RqSEJ0RWZJd0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjUyODU0NDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4MjIxMzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
