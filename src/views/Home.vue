<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <h1>Test Your Website</h1>
        <h3>Essential Links</h3>
        <ul>
            <li>
                <a
                    href="https://github.com/loren138/testing-demo"
                    target="_blank"
                    rel="noopener"
                >Repo</a>
            </li>
            <li>
                <a
                    href="https://vimeo.com/user97137098"
                    target="_blank"
                    rel="noopener"
                >Video</a>
            </li>
            <li>
                <a
                    href="https://klingman.us"
                    target="_blank"
                    rel="noopener"
                >Slides</a>
            </li>
        </ul>
        <!--
        <div class="thanks">
            <div>Thanks for visiting!</div>
        </div>
        -->
    </div>
</template>

<script>

export default {
    name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    /*div.thanks {
        border: 3px solid #2c3e50;
        font-size: 25px;
        max-width: 300px;
        padding: 30px 0;
        margin: 0 auto;
        background-color: #1fc8db;
        background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
        max-height: 50px;
    }*/
</style>
