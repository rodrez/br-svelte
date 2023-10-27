import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const emails = sqliteTable(
  "emails",
  {
    id: integer("id").primaryKey(),
    email: text("name"),
    createdAt: integer("created_at", { mode: "timestamp" }).default(
      sql`(strftime('%s', 'now'))`,
    ),
    updateAt: integer("updated_at", { mode: "timestamp" }).default(
      sql`(strftime('%s', 'now'))`,
    ),
    canceled_at: text("canceled_at"),
    canceled_reason: text("canceled_reason"),
  },
  (emails) => ({
    emailIdx: uniqueIndex("emailIdx").on(emails.email),
  }),
)

export type Email = typeof emails.$inferSelect
export type EmailInsert = typeof emails.$inferInsert
