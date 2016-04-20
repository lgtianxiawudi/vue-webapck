<template>
    <h1>Home</h1>
    <div class="form-group">
        <form class="" action="" @submit.prevent="submit()">
            <div class="col-md-6 col-md-offset-3">
                <input type="text" v-model="username" class="form-control" placeholder="Search your repos" >
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>

    <div class="container">
        <div v-if="show" class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Popular repositories</h3>
            </div>

            <ul class="list-group">
                <li class="list-group-item" v-for="repos in list">
                    <a :href="repos.html_url" target="_block"><h4>{{ repos.name }}</h4></a>
                    <span>{{ repos.description }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[],
                show:false,
                username: ''
            }
        },

        methods: {
            submit() {
                this.show = true;
                this.$http.get('https://api.github.com/users/'+this.username+'/repos', (data) => {
                    // console.log(data)
                    this.list = data
                }).error((err) => console.log(err))
            }
        }
    }
</script>
