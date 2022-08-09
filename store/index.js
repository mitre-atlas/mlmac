const COOKIE_NAME = 'mlmac-token'

export const state = () => ({
  isUserAuthenticated: false,
  userToken: '',
  name: '',
  created: '',
  total_queries: -1,
  queries: {},
  githubUsername: '',
  githubAvatarUrl: ''
})

export const getters = {
  isUserAuthenticated(state) {
    return state.isUserAuthenticated
  },
  githubInfo(state) {
    return {
      username: state.githubUsername,
      avatarUrl: state.githubAvatarUrl
    }
  },
  totalQueries(state) {
    return state.total_queries
  },
  queries(state) {
    return state.queries
  },
  apiKey(state) {
    return state.userToken
  }
}

export const mutations = {
  setUserToken(state, token) {
    state.userToken = token
    state.isUserAuthenticated = true
  },
  setStatus(state, status) {
    console.log('setStatus before status', status)
    state.name = status.name
    state.created = new Date(status.created)
    state.total_queries = status.total_queries
    // state.queries = status.queries
    state.queries = { ...state.queries, ...status.queries }
    console.log('setStatus after state', state)
  },
  setGitHubInfo(state, info) {
    state.githubUsername = info.login
    state.githubAvatarUrl = info.avatar_url
    console.log('setGitHubInfo', info)
  },
  logout(state) {
    state.isUserAuthenticated = false
    state.userToken = ''
    state.name = ''
    state.created = ''
    state.total_queries = -1
    state.queries = {}
    state.githubUsername = ''
    state.githubAvatarUrl = ''
  }
}

export const actions = {
  login({ commit }, token) {
    return new Promise((resolve, reject) => {
      const savedToken = this.$cookies.get(COOKIE_NAME)

      // Retrieve the user token from either the cookie, or from loggedin
      if (savedToken) {
        console.log('store - token restored from cookie')
        token = savedToken
      } else if (typeof token !== 'undefined') {
        // From logged in - save the cookie
        console.log('store - token provided, sat as cookie', token)
        this.$cookies.set(COOKIE_NAME, token, { sameSite: true })
      } else {
        console.log('store - no cookie found and no token provided, redirect')
        reject(new Error('User needs to authenticate'))
      }

      // Save the token and change auth status
      commit('setUserToken', token)

      // Set request headers
      this.$http.setToken(token, 'Bearer')

      resolve('Logged in')
    })
  },
  async updateStatus({ commit }) {
    // Update the status
    const status = await this.$http.$get('https://api.mlmac.io:8080/status')
    commit('setStatus', status)
  },
  async getGitHubInfo({ commit }) {
    const info = await this.$http.$get('https://api.mlmac.io:8080/github_info')
    commit('setGitHubInfo', info)
  },
  async logout({ commit }) {
    await this.$http.$get('https://api.mlmac.io:8080/logout')
    commit('logout')
    this.$cookies.remove(COOKIE_NAME)
  }
}
