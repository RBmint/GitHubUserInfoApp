function setQuery(user) {
  query = `
    query { 
        user (login:"`+ user +`") {
            login
            followers(first: 100) {
              edges {
                node {
                  login
                  name
                  avatarUrl
                }
              }
            }
        }
    }`;
  return query;
}
export default setQuery