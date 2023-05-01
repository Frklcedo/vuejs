<template>
    <div class="blackdrop">
        <div class="modal">
            <h1>Modal title</h1>
            <p>Modal content</p>
        </div>
    </div>
</template>

<style scoped>

 .modal{
     max-width: 400px;
     padding: 20px;
     margin: 100px auto;
     background: #fff;
     border-radius: 10px;
 }

 .blackdrop{
     top: 0;
     position: fixed;
     background: rgba( 0,0,0,0.5 );
     width: 100%;
     height: 100%;
 }
 h1{
     color: #03cfb4;
     border: none;
     padding: 0;
 }
 .modal p{
     font-style: normal;
 }
</style>
