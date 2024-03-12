import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
require('dotenv').config();

export const sendEmail = async ({ email, emailType, userId }: any) => {
  console.log(process.env.DOMAIN);

  try {
    // Create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    // Create a transporter
    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '56ccc417d3a9bb',
        pass: '9ef74141953fd7',
        // Todo: add these credentials to .env file
      },
    });

    const mailOptions = {
      from: 'behnam@gmail.com',
      to: email,
      subject:
        emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
      html: `<p>Click <a href="http://localhost:3000/verifyemail?token=${hashedToken}"> here </a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      } 
      <br>
      Or copy paste the link below in your browser. <br>
      http://localhost:3000/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
