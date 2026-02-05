import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { baseColumns } from "../base";
import { matches } from "./matches";
import { users } from "./users";

export const chats = pgTable("chats_threads", {
  ...baseColumns,
  match_id: uuid()
    .notNull()
    .references(() => matches.id, { onDelete: "cascade" }),
});

export const messages = pgTable("chats_messages", {
  ...baseColumns,
  chat_id: uuid()
    .notNull()
    .references(() => chats.id, { onDelete: "cascade" }),
  sender_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  body: text().notNull(),
});
