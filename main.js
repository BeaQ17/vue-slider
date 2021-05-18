const gallery = new Vue({
    el: "#container",
    data: {
        counter: 0,
        imgs:[
            "https://i.imgflip.com/46w4c9.png",
            "https://i.imgflip.com/2sa65a.jpg",
            "https://i.imgflip.com/4bn5o4.jpg",
            "https://i.pinimg.com/originals/84/10/fb/8410fb8504a407f2d85eeee397913974.jpg",
            "https://i.pinimg.com/originals/d6/de/b0/d6deb056b95d03d3353a09a49d6b57c8.jpg",
            "https://i.redd.it/gb3irz1s5xa51.png"
        ]
    },

    methods: {
        prev(){
            console.log("clic on prev");
            if(this.counter === 0){
                return this.imgs.length - 1;
            }
            return this.counter -= 1;
        },
        next(){
            console.log("clic on next");
            if(this.counter === this.imgs.length - 1){
                return this.counter = 0;
            }
            return this.counter += 1;
        }
    }

});