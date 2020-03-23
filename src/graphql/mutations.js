/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const createSignup = /* GraphQL */ `
  mutation CreateSignup(
    $input: CreateSignupInput!
    $condition: ModelsignupConditionInput
  ) {
    createSignup(input: $input, condition: $condition) {
      id
      name
      email
      password
    }
  }
`;
export const updateSignup = /* GraphQL */ `
  mutation UpdateSignup(
    $input: UpdateSignupInput!
    $condition: ModelsignupConditionInput
  ) {
    updateSignup(input: $input, condition: $condition) {
      id
      name
      email
      password
    }
  }
`;
export const deleteSignup = /* GraphQL */ `
  mutation DeleteSignup(
    $input: DeleteSignupInput!
    $condition: ModelsignupConditionInput
  ) {
    deleteSignup(input: $input, condition: $condition) {
      id
      name
      email
      password
    }
  }
`;
export const createIssuelogged = /* GraphQL */ `
  mutation CreateIssuelogged(
    $input: CreateIssueloggedInput!
    $condition: ModelissueloggedConditionInput
  ) {
    createIssuelogged(input: $input, condition: $condition) {
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
export const updateIssuelogged = /* GraphQL */ `
  mutation UpdateIssuelogged(
    $input: UpdateIssueloggedInput!
    $condition: ModelissueloggedConditionInput
  ) {
    updateIssuelogged(input: $input, condition: $condition) {
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
export const deleteIssuelogged = /* GraphQL */ `
  mutation DeleteIssuelogged(
    $input: DeleteIssueloggedInput!
    $condition: ModelissueloggedConditionInput
  ) {
    deleteIssuelogged(input: $input, condition: $condition) {
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
