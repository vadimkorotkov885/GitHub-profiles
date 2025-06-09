Vue.createApp({
	data() {
		return {
			usernames: [
				'gaben',
				'vadimkorotkov885',
				'rahaug',
				'akryum',
				'dima',
				'alex',
			],
		}
	},
})
	.component('github-user-card', {
		template: '#github-user-card-template',
		props: {
			username: { type: String, required: true },
		},
		data() {
			return {
				user: {},
			}
		},
		async created() {
			const response = await axios.get(
				`https://api.github.com/users/${this.username}`
			)
			this.user = response.data
		},
	})
	.mount('#app')
