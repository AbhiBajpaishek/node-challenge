import twilio from 'twilio';

export const sendSms = async (number, otp) => {
  const accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
  const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
  const client = twilio(accountSid, authToken);

  return client.messages.create({
    body: 'Hello User, Please use this OTP: ' + otp + ' to login.',
    to: '+91' + number, // Text this number
    from: '+16402214281', // From a valid Twilio number
  });
};
