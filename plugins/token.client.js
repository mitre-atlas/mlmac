export default function ({ store, $cookies, $http }) {
  // Set user state if cookie is present

  if (!store.getters.isUserAuthenticated) {
    const token = $cookies.get('mlmac-token')
    if (token) {
      store.commit('setUserToken', token)
      // Set request headers
      $http.setToken(token, 'Bearer')
      store.dispatch('getGitHubInfo')
      store.dispatch('updateStatus')
    }
  }
}
