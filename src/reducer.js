export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove token and change back to null
  token: 'BQDqGnccsbaNpR1tX9jyH_MnZHZZXhbdxtpTL7buyyyXH42hzGUyIqOWUgeHg9vbrpdNxLpzXAKp_cZHvhF67AVevxrNqDPOWu2qlqhIgwnqX8ZOPs-Omr41a3lPIK17sfV1ZmzQkVBY0h_w3T3gNkOq1zD-Pc_qnwuEcMAuif5x8tU2VrIZ05gSCLt8BoewrFQlYb2iMF4yKETF5JWb',
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export default reducer;