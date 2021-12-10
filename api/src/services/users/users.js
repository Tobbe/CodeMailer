import { db } from 'src/lib/db'
import * as nodemailer from 'nodemailer'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

async function sendEmailCode(emailAddress, code) {
  console.log('Sending email to:', emailAddress)

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'tobbe@tlundberg.com',
      pass: process.env.SEND_IN_BLUE_PASS,
    },
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: [emailAddress], // list of receivers
    subject: 'Welcome to CodeMailer', // Subject line
    text: 'Your code is ' + code, // plain text body
    html: `Your code is <b>${code}</b>`, // html body
  })

  console.log('Message sent: %s', info.messageId)
}

export const createUser = async ({ input }) => {
  const code = '' + Math.random().toString(36).substr(2, 9)
  let user

  try {
    user = await db.user.create({
      data: input,
    })
    console.log('user created', user)

    await sendEmailCode(input.email, code)
  } catch (e) {
    throw new Error(e)
  }

  return user
}
