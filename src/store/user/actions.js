export const save = ({ state, commit }, username) => {
  commit('pushUser', username)
}
