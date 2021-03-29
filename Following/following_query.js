function setQuery(user) {
  query = `
    query { 
        user (login:"`+ user +`") {
            login
            following(first: 100) {
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