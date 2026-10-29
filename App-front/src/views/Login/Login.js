import axios from 'axios'

export default {
    data () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        authenticate () {
            const payload = {
                username: this.username,
                password: this.password
            }
            axios.post(this.$store.state.endpoints.obtainJWT, payload)
                .then((response) => {
                    this.$store.commit('updateToken', response.data.token)
                    // get and set auth user
                    const base = {
                        baseURL: this.$store.state.endpoints.baseUrl,
                        headers: {
                            // Set your Authorization to 'JWT', not Bearer!!!
                            Authorization: `JWT ${this.$store.state.jwt}`,
                            'Content-Type': 'application/json'
                        },
                        xhrFields: {
                            withCredentials: true
                        }
                    }
                    // Even though the authentication returned a user object that can be
                    // decoded, we fetch it again. This way we aren't super dependant on
                    // JWT and can plug in something else.
                    const axiosInstance = axios.create(base)
                    axiosInstance({
                        url: "/user/",
                        method: "get",
                        params: {}
                    })
                        .then((response) => {
                            this.$store.commit("setAuthUser",
                                {authUser: response.data, isAuthenticated: true}
                            )
                            this.$router.push({name: 'Home'})
                        })

                })
                .catch((error) => {
                    console.log(error);
                    console.debug(error);
                    console.dir(error);
                })
        }
    }
}
