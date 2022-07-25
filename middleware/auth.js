export default function ({ store, redirect, $http }) {
  // If the user is not authenticated
  // if (!store.state.isUserAuthenticated) {
  //   return redirect('https://api.mlmac.io:8080/github/auth')
  // }

  return $http.get('https://api.mlmac.io:8080/github/auth')
    .then(resp => {
      console.log('auth response', resp)
    })
    .catch((e) => {
      console.error('auth error', e)
    })
}
