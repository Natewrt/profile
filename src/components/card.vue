<template>
    <section class="container">
        <div id="card">
            <figure class="front"><br><br>Mynd</figure>
            <figure class="back"><br>The<br><br>marketing</figure>
        </div>
    </section>
</template>
<script>
    export default {
    }
</script>
<style scoped>
    .container {
        margin: 5% 0 0 40%;
        width: 150px;
        height: 200px;
        position: relative;
        perspective: 300px;
    }
    #card {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transform-origin: center;
        transition: transform 1s;
    }
    #card figure {
        margin: 0;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        backface-visibility: hidden;
    }
    #card .front {
        background: #222222;
    }
    #card .back {
        background: #999999;
        transform: rotateY( 180deg );
    }
    #card:hover {
        transform: rotateY( 180deg );
    }
</style>