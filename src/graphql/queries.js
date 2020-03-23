/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const getSignup = /* GraphQL */ `
  query GetSignup($id: ID!) {
    getSignup(id: $id) {
      id
      name
      email
      password
    }
  }
`;
export const listSignups = /* GraphQL */ `
  query ListSignups(
    $filter: ModelsignupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
      }
      nextToken
    }
  }
`;
export const getIssuelogged = /* GraphQL */ `
  query GetIssuelogged($id: ID!) {
    getIssuelogged(id: $id) {
      SName
      id
      tid
      TSellingLocationID
      Tdescription
      Tlogindetail
      TTeamviewer
      Tenvironemrnt
      ThospRet
    }
  }
`;
export const listIssueloggeds = /* GraphQL */ `
  query ListIssueloggeds(
    $filter: ModelissueloggedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssueloggeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        SName
        id
        tid
        TSellingLocationID
        Tdescription
        Tlogindetail
        TTeamviewer
        Tenvironemrnt
        ThospRet
      }
      nextToken
    }
  }
`;
