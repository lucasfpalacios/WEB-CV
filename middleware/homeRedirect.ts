import { Middleware } from '@nuxt/types'

const homeRedirect: Middleware = ({ redirect }) => {
  redirect('/home')
}

export default homeRedirect
