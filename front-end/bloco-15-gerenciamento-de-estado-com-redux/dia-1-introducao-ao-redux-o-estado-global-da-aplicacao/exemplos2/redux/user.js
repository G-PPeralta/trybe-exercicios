export function setUserDetails(user) {
  return {
      type: "SET_USER_DETAILS",
      payload: user
  }
}

export function removeUserDetails(user) {
  return {
      type: "REMOVE_USER_DETAIL",
      payload: user
  }
}

export default function userReducer(user = {}, action) {
  switch(action.type) {
      case "SET_USER_DETAILS":
          return {
              ...user,
              ...action.payload
          }
      case "REMOVE_USER_DETAILS":
          return {}
      default:
          return user
  }
}