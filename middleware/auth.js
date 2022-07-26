export default function ({ store, app, $http }) {
  // If the user is not authenticated
  // if (!store.state.isUserAuthenticated) {
  //   return redirect('https://api.mlmac.io:8080/github/auth')
  // }

  return $http.$get('/api/github/auth')
    .then(resp => {
     

      if (resp) {
        console.log(typeof resp)
        console.log('auth body', resp)
      }

      if (typeof resp === 'string') {
        // the github login html
        // app.router.push({name: 'login', params: {
        //   rawHtml: resp
        // }})

        app.router.push('/index')
      } else {
        // json
      }
    })
    .catch((e) => {
      console.error('auth error', e)
    })
}

/*
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://github.com/login/oauth/authorize?client_id=9ea54dd98682efa220c1&redirect_uri=https://api.mlmac.io:8080/github/callback&response_type=code&scope=user:read. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 302.

Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://github.com/login/oauth/authorize?client_id=9ea54dd98682efa220c1&redirect_uri=https://api.mlmac.io:8080/github/callback&response_type=code&scope=user:read. (Reason: CORS request did not succeed). Status code: (null).

auth error TypeError: NetworkError when attempting to fetch resource. auth.js:28
*/
