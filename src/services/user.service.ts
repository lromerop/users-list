import { type User } from '../types'

async function getUsersByPage (page: number): Promise<User[]> {
  return await fetch(`https://randomuser.me/api?results=100&page=${page}`)
    .then(async (res) => await res.json())
    .then((res) => {
      return res.results
    })
    .catch((error) => {
      console.log('error =>', error)
    })
}

export { getUsersByPage }
