<template>
    <div id="clock">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
        <p class="text">DIGITAL CLOCK with Vue.js</p>
    </div>
</template>

<script>

export default {
    name: 'Clock',
    data() {
        return {
            time: '',
            date: '',
            week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        }
    },
    methods: {
        zeroPadding: function(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        updateTime: function() {
            var cd = new Date();
            console.log(cd);
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
        }
    },
    mounted: function () {
        this.interval = setInterval(function () {
            this.updateTime();
        }.bind(this), 1000);
        this.updateTime();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#clock {
    font-family: 'Share Tech Mono', monospace;
    background: #000000;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
}
.time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
}
.date {
    letter-spacing: 0.1em;
    font-size: 24px;
}
.text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
}
</style>