new Vue({
    el: '#app',
    data:{
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    methods:{
        newGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.log = [];
        },
        giveUp(){
            this.running = false;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.log = [];
        },
        attack(special) {
            const damagePlayer = this.damage(7, 12, false, 'Jogador', 'Monstro', 'player');
            const damageMonster = this.damage(5, 10, special, 'Monstro', 'Jogador', 'monster');
            
            this.monsterLife = Math.max(this.monsterLife - damageMonster, 0);
            if(this.monsterLife > 0){
                this.playerLife = Math.max(this.playerLife - damagePlayer, 0);
            } 
            
        },
        damage(min, max, special, source, target, cls){
            const plus = special ? 5: 0;
            const damage = this.getRandom(min + plus, max + plus);
            this.registerLog(`${source} atingou ${target} com ${damage}`, cls)
            return damage;
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        heal(){
            const heal = this.getRandom(6,11);
            this.playerLife = Math.max(this.playerLife - this.damage(5, 10, false, 'Monstro', 'Jogador', 'monster'), 0);
            this.playerLife = Math.min((this.playerLife + heal), 100);
            this.registerLog(`O Jogador curou ${heal} de vida`, 'healer');
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls})
        },
    },
    computed:{
        hasResult(){
            return this.playerLife <= 0 || this.monsterLife <= 0;
        } 
    }
})