<template>

    <div>
        <app-header></app-header>
        <!-- <add-blog></add-blog>
         <show-blog></show-blog>
         <list-blogs></list-blogs>-->

        <router-view></router-view>
    </div>
</template>

<script>
    /* import addBlog from "./components/addBlog";
     import showBlog from "./components/showBlog";
     import listBlog from "./components/listBlog";*/
    import header from "./components/Header";

    export default {
        components: {
            /* 'add-blog': addBlog,
             'show-blog': showBlog,
             'list-blogs': listBlog,*/
            'app-header': header
        },
        data() {
            return {
                component: 'add-blog'
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        font-family: 'Nunito SemiBold';
    }

</style>
