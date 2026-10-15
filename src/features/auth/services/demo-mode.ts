export const isAuthDemoMode =
  process.env.NODE_ENV !== "production" &&
  process.env.NEXT_PUBLIC_AUTH_DEMO_MODE !== "false";
