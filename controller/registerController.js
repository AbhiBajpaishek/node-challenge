import { sendEmail } from '../services/emailService.js';
import { sendSms } from '../services/smsService.js';
import { EMAIL_BODY, EMAIL_SUBJECT } from '../constant.js';
import { User } from '../models/userSchema.js';
import { generateOtp } from '../services/otpService.js';
import { errorHandler } from '../handlers/errorHandlers.js';

export const register = async (req, res) => {
  const { email, password, phone_number } = req.body;
  const otp = generateOtp();
  Promise.allSettled([
    sendSms(phone_number, otp),
    sendEmail(email, EMAIL_SUBJECT, EMAIL_BODY.replace('{%OTP%}', otp)),
  ])
    .then(async () => {
      const user = await createUser(email, password, phone_number, otp);
      if (!user) {
        res.json({ status: 'FAILURE' });
      }
      res.json({ status: 'SUCCESS' });
    })
    .catch((err) => {
      const errors = errorHandler(err);
      res.json({ status: 'FAILURE', ...errors });
    });
};

const createUser = async (email, password, phone_number, otp) =>
  User.create({ email, password, phone_number, otp });

export const verify = (req, res) => {
  const { email, otp } = req.body;
  const userQuery = User.findOne({ email });
  userQuery.select();
  userQuery.exec((err, user) => {
    if (!user)
      res.send({
        status: 'FAILURE',
        msg: "Email Doesn't Exist!! Please register ",
      });
    else if (otp === user.otp)
      res.send({ status: 'SUCCESS', msg: 'OTP Verified' });
    else
      res.send({
        status: 'FAILURE',
        msg: 'Wrong OTP',
      });
  });
};
