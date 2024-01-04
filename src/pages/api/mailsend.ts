// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
     const mailerSend = new MailerSend({
         apiKey: process.env.NEXT_PUBLIC_API_KEY,
     });

     const sentFrom = new Sender("nsigmaglobal@gmail.com", "Nikol");

     const recipients = [
         new Recipient("zunairgillani54@gmail.com", "Syed Zunair Gillani")
     ];

     const emailParams = new EmailParams()
         .setFrom(sentFrom)
         .setTo(recipients)
         .setReplyTo(sentFrom)
         .setSubject("This is a Subject")
         .setHtml("<strong>This is the HTML content</strong>")
         .setText("This is the text content");

     mailerSend?.email
         ?.send(emailParams)
         .then((response) => res.status(200).json({ response }))
         .catch((error) => res.status(401).json({ error }));
}
