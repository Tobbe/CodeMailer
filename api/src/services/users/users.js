import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = async ({ input }) => {
  try {
    await db.user.create({
      data: input,
    })
  } catch (e) {
    throw new Error(e)
  }
}
