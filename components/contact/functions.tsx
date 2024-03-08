"use server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const sendEmail = async (formData: FormData) => {
  const mailerSend = new MailerSend({
    apiKey: process.env.API_KEY!,
  });

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const text = formData.get("text") as string;
  const sentFrom = new Sender(
    "MS_784s20@trial-3z0vklo826e47qrx.mlsender.net",
    name,
  );
  const replyTo = new Sender(email, name);
  const recipients = [new Recipient("kylelibiran@gmail.com", "Kyle Libiran")];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(replyTo)
    .setSubject(subject as string)
    .setHtml(`<b>${text}</b>`)
    .setText(text as string);

  try {
    await mailerSend.email.send(emailParams);
    return 1;
  } catch (error) {
    console.error(error);
  }
};
