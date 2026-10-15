const unavailable = (): never => {
  throw new Error("Local demo authentication is disabled in production.");
};

export const DEMO_CREDENTIALS = {};

export const demoAuth = {
  register: unavailable,
  requestLoginOtp: unavailable,
  loginWithPassword: unavailable,
  verifyOtp: unavailable,
  resendOtp: unavailable,
  requestPasswordRecovery: unavailable,
  resetPassword: unavailable,
};
