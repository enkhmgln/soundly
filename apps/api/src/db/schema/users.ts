import {
  date,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { baseColumns } from "../base";
import { hobbies, lookingFor } from "./common";
import {
  ACCOUNT_STATUS,
  AUTH_PROVIDERS,
  type AuthProvider,
  type AccountStatus,
} from "@/constants/config";

export const users = pgTable("users_app_users", {
  ...baseColumns,
  email: text().notNull().unique(),
  phone: text(),
  display_name: text(),
  password: text(),
  account_status: text()
    .$type<AccountStatus>()
    .notNull()
    .default(ACCOUNT_STATUS.ACTIVE),
});

export const authAccounts = pgTable("users_auth_accounts", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  provider: text()
    .$type<AuthProvider>()
    .notNull()
    .default(AUTH_PROVIDERS.SPOTIFY),
  provider_user_id: text().notNull(),
  access_token: text(),
  refresh_token: text(),
  scope: text(),
  expires_at: timestamp({ withTimezone: true }),
});

export const userProfiles = pgTable("users_profiles", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  bio: text(),
  avatar_url: text(),
  location: text(),
  birthdate: date(),
  height_cm: integer(),
  last_active_at: timestamp({ withTimezone: true }),
});

export const userPreferences = pgTable("users_preferences", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  looking_for: uuid()
    .notNull()
    .references(() => lookingFor.id, { onDelete: "restrict" }),
});
export const userHobbies = pgTable("users_hobbies", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  hobby_id: uuid()
    .notNull()
    .references(() => hobbies.id, { onDelete: "restrict" }),
});
