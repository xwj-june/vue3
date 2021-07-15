const app = Vue.createApp({
    data() {
        return {
            firstName: 'June',
            lastName: 'X',
            imageName: 'Car',
            imageSource: 'https://th.bing.com/th/id/OIP.4cjnrH7vSRfqot3xFgV4KQHaFj?pid=ImgDet&rs=1',
            imageDescription: 'Audi R8',
            imageStyle: {
                'border-radius': '15px'
            },
            classObject: {
                centered: true,
                active: false,
                //class naming with a dash 
                'center-text': true
            },
            styleObject: {
                'background-color': 'red'
            }
            
        }
    },
}).mount('#app');