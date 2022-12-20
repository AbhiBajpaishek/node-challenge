import otpGenerator from 'otp-generator';
import { OTP_CONFIG } from '../constant.js';

export const generateOtp = (length = 4) => {
  const otp = otpGenerator.generate(length, OTP_CONFIG);
  return otp;
};
