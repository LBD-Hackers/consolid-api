# Consolid

### Run local Solid Community server
* `npm i -g @solid/community-server`
* `community-solid-server`
* [register new account](http://localhost:3000/idp/register/)
* Now you have a new WebId (eg. http://localhost:3000/test/profile/card#me)

### Get session token
* `npx @inrupt/generate-oidc-token`
* Choose `My Solid Identity provider is not on the list` and type `http://localhost:3000/`
* Choose `No` ("Has your app been pre-registered by the administrator of the Pod server you are signing in to?)
* Type name of the app (`consolid`)
* Open link in browser (eg. http://localhost:3000/idp/auth?client_id=NFJUCr4Yc0ohwMetVisSB&scope=openid%20offline_access%20webid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2F&code_challenge=nOIZMSXw0u0OL9GJg7hJMVN09gn05xsM_nxlhfkH6rU&state=7eTv9ZA1rPwx2CH1CrTJqIAVafbc95lZOyxpaZ3_1BM&code_challenge_method=S256&prompt=consent) and login
* You shouls now receive credentials like below

```json
{
  "refreshToken" : "OFo9-VwhgWASh1OY6CSEko_45ZH7JgSLQFQNv4LOibg",
  "clientId"     : "NFJUCr4Yc0ohwMetVisSB",
  "clientSecret" : "2EVp_HK2I8KzxILUyQxjXAV_wDstCo0zn3a30FxweIHh5WfWcPOxiw8gMhHzjgYoLLqLttOvU_4hYg6ho7k0fw",
  "oidcIssuer"   : "http://localhost:3000/",
}
```
