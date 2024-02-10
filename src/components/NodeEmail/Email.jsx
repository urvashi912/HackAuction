import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
// import {Contact} from '../Contact/Contact';
import EmailContent from './EmailContent';

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: 'my_user',
    pass: 'my_password',
  },
});

const emailHtml = render(<EmailContent url="https://example.com" />);

const options = {
  from: 'urvashi16may@gmail.com',
  to: 'urvashirichaagrawal@gmail.com',
  subject: 'hello world',
  html: emailHtml,
};

await transporter.sendMail(options);
​