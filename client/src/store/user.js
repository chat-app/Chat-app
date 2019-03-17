import axios from 'axios'
import Vue from 'vue';


const user = {
	state: {
		user: null
	},

	mutations: {
		SET_USER(state, user) {
			state.user = user
		},
		LOGOUT(state, user) {
			state.user = null
		}
	},
	actions: {
		async register({ commit }, credentials) {
			const user = await axios.post('http://localhost:3000/api/users/register', { username: credentials.username, password: credentials.password, memberOf: [] })
			commit('SET_USER', user.data);

		},
		async login({ commit }, credentials) {
			const user = await axios.post('http://localhost:3000/api/users/login', { username: credentials.username, password: credentials.password })
			user.data.memberOf.forEach(addServer => {
				const namespace = Vue.$addServer(addServer)
				commit('UPDATE_SERVERS', namespace, { root: true });
			});
			commit('SET_USER', user.data);
		},
		async logout({ commit }) {
			commit('LOGOUT')
		}
	},
	getters: {
		user: state => state.user
	 }
}

export default user