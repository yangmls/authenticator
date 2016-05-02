export const ADD_KEY = 'ADD_KEY';

export const addKey = (key, comment) => {
  return {
      type: ADD_KEY,
      key,
      comment
  }
}

export const REMOVE_KEY = 'REMOVE_KEY';

export const removeKey = (id) => {
    return {
        type: REMOVE_KEY,
        id
    }
}

export const SET_PASSWORD = 'SET_PASSWORD';

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password
    }
}
