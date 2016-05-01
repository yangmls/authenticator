export const ADD_KEY = 'ADD_KEY';
export const REMOVE_KEY = 'REMOVE_KEY';

export const addKey = (key, comment) => {
  return {
      type: ADD_KEY,
      key,
      comment
  }
}

export const removeKey = (id) => {
    return {
        type: REMOVE_KEY,
        id
    }
}
