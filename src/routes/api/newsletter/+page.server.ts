import type { Actions } from "./$types"
import { db } from "$lib/server/database"
import { emails } from "$lib/server/schema"
import { writable } from "svelte/store"
import { eq } from "drizzle-orm"

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData()
    const email = data.get("email") as string
    console.log("email", email)

    if (!email) {
      return {
        status: 400,
        body: {
          message: "No email provided",
        },
      }
    }

    const existingEmail = await db
      .select()
      .from(emails)
      .where(eq(emails.email, email))
      .execute()

    if (existingEmail) {
      return {
        status: 200,
        body: {
          message: "Email already exists",
        },
      }
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

    console.log("newEmail", newEmail)

    if (!newEmail) {
      return {
        status: 500,
        body: {
          message: "Something went wrong",
        },
      }
    }

    return {
      status: 200,
      body: {
        message: "Email added successfully",
      },
    }
  },
} satisfies Actions
