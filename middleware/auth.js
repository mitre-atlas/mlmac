export default function ({ store }) {
  // If the user is not authenticated
  if (!store.state.isUserAuthenticated) {
    store.dispatch('login')
  }
}
