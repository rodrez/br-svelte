import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"
import { emails } from "./schema"

const client = createClient({
  url: "libsql://rodrez-blog-rodrez.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTI3VDAzOjQ0OjA3Ljk2NTQ3MzM3NloiLCJpZCI6IjBiNzRiOGY1LTc0N2ItMTFlZS1hZGFjLTc2MDM2NzgyNmYzOCJ9.M3X3E6E11zW0epV0Zez3dv1UcOnQEoKfC0t20b0mg9L1od-qd0EmDdQE_1SR5WqTm94V8Ao-4QcIro0Xmo1RCg",
})

export const db = drizzle(client)

// const result = await db.select().from(emails).all()
