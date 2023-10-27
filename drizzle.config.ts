import type { Config } from "drizzle-kit"

export default {
  schema: "./src/lib/server/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: "libsql://rodrez-blog-rodrez.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTI3VDAzOjQ0OjA3Ljk2NTQ3MzM3NloiLCJpZCI6IjBiNzRiOGY1LTc0N2ItMTFlZS1hZGFjLTc2MDM2NzgyNmYzOCJ9.M3X3E6E11zW0epV0Zez3dv1UcOnQEoKfC0t20b0mg9L1od-qd0EmDdQE_1SR5WqTm94V8Ao-4QcIro0Xmo1RCg",
  },
  out: "./drizzle",
} satisfies Config
