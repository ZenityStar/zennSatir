let handler = async (m, { conn, participants }) => {
    let user = global.db.data.users[m.sender]
  if (user.premium === true) throw `Kamu Sudah Premium!!`
await conn.sendButton(m.chat, 'Silahkan beli premium di owner Bot', 'Zenity Bot', {'button[0]': 'Owner Bot', 'row[0]': '.owner'}, m)
  }
       handler.help = ['belipremium', 'premium']
       handler.tags = ['daftar']
       handler.command = /^belipremium|premium$/i
                                           module.exports = handler