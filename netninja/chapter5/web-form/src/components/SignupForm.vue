<template>
    <form >
        <label>E-mail: </label>
        <input type="email" required v-model="email" />

        <label>Password: </label>
        <input type="password" required v-model="password" />

        <label>Role: </label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label>Skills: </label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms" />
            <label >Accept terms and conditions</label>
        </div>


        <!-- <div>
             <input type="checkbox" value="shaun" v-model="names" />
             <label >Shaun</label>
             </div>
             <div>
             <input type="checkbox" value="frkl" v-model="names" />
             <label >Frkl</label>
             </div>
             <div>
             <input type="checkbox" value="tolkien" v-model="names" />
             <label >Tolkien</label>
             </div>
        -->
    </form>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ role }}</p>
    <p>{{ terms }}</p>
</template>

<script>
 export default {
     data(){
         return {
             email: '',
             password: '',
             role: 'developer',
             terms: false,
             tempSkill: '',
             skills: [],

             // names: [],
         }
     },
     methods:{
         addSkill(e){
             if(e.key === ',' && this.tempSkill){
                 if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                 }
                 this.tempSkill = ''
             }
         },
         deleteSkill(skill){
             this.skills = this.skills.filter(item => item !== skill)
         }
     }
 }
</script>

<style scoped>
 form{
     max-width: 420px;
     margin: 30px auto;
     background: #fff;
     text-align: left;
     padding: 40px;
     border-radius: 10px;
 }
 label{
     color: #aaa;
     display: inline-block;
     margin: 25px 0 15px;
     font-size: 0.6em;
     text-transform: uppercase;
     letter-spacing: 1px;
     font-weight: bold;
 }
 input, select{
     display: block;
     padding: 10px 6px;
     width: 100%;
     box-sizing: border-box;
     border: none;
     border-bottom: 1px solid #ddd;
     color: #555;
     background-color: transparent;
 }
 input[type="checkbox"]{
     display: inline-block;
     width: 16px;
     margin: 0 10px 0 0;
     position: relative;
     top: 2px;
 }
 .pill{
     display: inline-block;
     margin: 20px 10px 0 0 ;
     padding: 6px 12px;
     background: #eee;
     border-radius: 20px;
     font-size: 12px;
     letter-spacing: 1px;
     font-weight: bold;
     color: #777;
     cursor: pointer;
 }
</style>
