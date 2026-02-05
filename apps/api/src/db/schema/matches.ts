import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { baseColumns } from "../base";
import { users } from "./users";

export const swipeDirection = pgEnum("swipe_direction", ["like", "pass"]);

export const swipes = pgTable("matches_swipes", {
  ...baseColumns,
  swiper_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  target_user_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  direction: swipeDirection().notNull(),
});

export const matches = pgTable("matches_pairs", {
  ...baseColumns,
  user_a_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  user_b_id: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});
