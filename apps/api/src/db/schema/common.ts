import { pgTable, text } from "drizzle-orm/pg-core";
import { baseColumns } from "../base";

export const lookingFor = pgTable("common_looking_for", {
  ...baseColumns,
  name: text().notNull(),
});
export const hobbies = pgTable("common_hobbies", {
  ...baseColumns,
  name: text().notNull(),
});
