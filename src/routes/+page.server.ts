import type { Actions } from "./$types"
import { db } from "$lib/server/database"
import { emails } from "$lib/server/schema"
import { eq } from "drizzle-orm"
import { fail } from "@sveltejs/kit"

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const email = data.get("email") as string

    if (!email) {
      return fail(400, { email, missing: true })
    }

    const existingEmail = await db
      .select()
      .from(emails)
      .where(eq(emails.email, email))
      .execute()

    if (existingEmail.length > 0) {
      return fail(400, { email, incorrect: "Email already exists" })
    }

    const newEmail = await db
      .insert(emails)
      .values({ email: email })
      .execute()
      .then((res) => {
        console.log("res", res)
        return res
      })
      .catch((err) => {
        console.log("err", err)
      })

    if (!newEmail) {
      return fail(500, { email, incorrect: "Something went wrong" })
    }

    return { success: true, email }
  },
} satisfies Actions
