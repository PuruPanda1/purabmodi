// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '@/utils/Transporter';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.email || !data.name || !data.subject || !data.message) {
      return res.status(400).json({ message: "Eror here" });
    }

    const htmlData = `<table><tr><td>Name:</td><td>${data.name}</td></tr><tr><td>Email:</td><td>${data.email}</td></tr><tr><td>Subject:</td><td>${data.subject}</td></tr><tr><td>Message:</td><td>${data.message}</td></tr></table>`

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is text String",
        html: htmlData

      });
        return res.status(200).json({message:"true"});
    } catch (error) {
      console.log(error);
    }

  }


  return res.status(400).json({ message: "Bad Request" });

}
