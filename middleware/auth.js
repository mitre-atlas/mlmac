export default function ({ store }) {
  // If the user is not authenticated
  if (!store.state.isUserAuthenticated) {
    console.log(
      'AUTH - user is not authenticated, dispatching login',
      store.state
    )
    store.dispatch('login')
  }
}
