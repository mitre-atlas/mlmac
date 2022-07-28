export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.isUserAuthenticated) {
    redirect('https://api.mlmac.io:8080/github/auth')
  }
}
