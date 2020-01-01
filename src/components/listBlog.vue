<template>


    <div v-theme="'narrow'" id="show-blogs">
        <h1>List Blog Title</h1>
        <input type="text" v-model="search" placeholder="search">
        <div class="single-blog" :key="blog.id" v-for="blog in filteredBlogs">
            <h2 v-rainbow>{{blog.title | toUppercase}}</h2>

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                blogs: [],
                search: ''
            }
        },

        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
// eslint-disable-next-line no-console
                //console.log(data);
                this.blogs = data.body.slice(0, 10);
            })
        },
        computed: {
            filteredBlogs: function () {
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search);
                })
            }
        },

        filters: {
            'toUppercase': function(value){
                return value.toUpperCase();
            }
        }
    }
</script>

<style>
    #show-blogs {
        max-width: 800px;
        margin: 0px auto;
    }

    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }


</style>
