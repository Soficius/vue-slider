const root = new Vue ({
    el:'#root',
    data: {
        pictures: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
            
            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
            
            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Chile',
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
        ],
        active: 0,
        interval: -1
    },
    methods:{
        prev(){
            if(this.active > 0){
                this.active--
            } else{
                this.active = this.pictures.length - 1 
            }
        },
        next(){
            if(this.active < this.pictures.length - 1 ){
                this.active++
            } else{
                this.active = 0
            }
        },
        goToPicture(i){
            this.active = i
        },
        startShow(){
            if(this.interval === -1){
                this.interval = setInterval(()=>this.next(), 3 * 1000)
            }
        },
        stopShow(){
            if(this.interval > -1){
                clearInterval(this.interval)
                this.interval = -1
            }
        }
    },
    mounted(){
        this.startShow()
    }
})