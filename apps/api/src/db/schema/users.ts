import {
  date,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { baseColumns } from "../base";
import {
  ACCOUNT_STATUS,
  AUTH_PROVIDERS,
  MUSIC_PROVIDERS,
  type AccountStatus,
} from "../../constants/config";

export const users = pgTable("users_app_users", {
  ...baseColumns,
  email: text().notNull().unique(),
  phone: text(),
  display_name: text(),
  password_hash: text(),
  account_status: text()
    .$type<AccountStatus>()
    .notNull()
    .default(ACCOUNT_STATUS.ACTIVE),
});

export const authProvider = pgEnum("auth_provider", AUTH_PROVIDERS);

export const authAccounts = pgTable("users_auth_accounts", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  provider: authProvider().notNull(),
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

export const connectionType = pgEnum("connection_type", [
  "dating",
  "friendship",
  "collab",
]);

export const userPreferences = pgTable("users_preferences", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  looking_for: connectionType().notNull().default("dating"),
  distance_km: text(),
});

export const musicProvider = pgEnum("music_provider", MUSIC_PROVIDERS);

export const musicProfiles = pgTable("music_profiles", {
  ...baseColumns,
  user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  provider: musicProvider().notNull(),
  top_artists: jsonb(),
  top_tracks: jsonb(),
  genres: jsonb(),
  last_synced_at: timestamp({ withTimezone: true }),
});
