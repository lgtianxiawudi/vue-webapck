<template>
    <h1>Repositories</h1>

    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Popular repositories</h3>
                </div>
                <div class="panel-body">
                    这是Shyling的Repositories
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="repo in repos">
                        <a :href="repo.html_url" target="_block"><h4>{{ repo.name }}</h4></a>
                        <span>{{ repo.description }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Popular repositories</h3>
                </div>
                <div class="panel-body">
                    这是我的Repositories
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="myrepo in myrepos">
                        <a :href="myrepo.html_url" target="_block"><h4>{{ myrepo.name }}</h4></a>
                        <span>{{ myrepo.description }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                repos:[],
                myrepos:[]
            }
        },

        ready() {
            this.getRepos()
            this.getMyRepos()
        },

        methods: {
            getRepos() {
                this.$http.get('https://api.github.com/users/lingmm/repos', (data) => {
                    this.repos = data
                }).error((err) => console.log(err))
            },

            getMyRepos() {
                this.$http.get('https://api.github.com/users/Axhello/repos', (datas) => {
                    this.myrepos = datas
                }).error((err) => console.log(err))
            }
        }
    }
</script>
