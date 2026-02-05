export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  PORT: Number(process.env.PORT) || 3000,
} as const;

export const ACCOUNT_STATUS = {
  ACTIVE: "active",
  SUSPENDED: "suspended",
  BANNED: "banned",
} as const;

export const AUTH_PROVIDERS = ["spotify", "youtube"] as const;

export const MUSIC_PROVIDERS = ["spotify", "youtube"] as const;

export type AccountStatus =
  (typeof ACCOUNT_STATUS)[keyof typeof ACCOUNT_STATUS];

export type AuthProvider = (typeof AUTH_PROVIDERS)[number];

export type MusicProvider = (typeof MUSIC_PROVIDERS)[number];
