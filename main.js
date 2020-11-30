const app = new Vue({
    el: '#root',
    data: {
        navVoices: [
            {
                name: 'Home',
                link: '#',
                hasDropdown: true
            },
            {
                name: 'Shop',
                link: '#',
                hasDropdown: true
            },
            {
                name: 'About',
                link: '#',
                hasDropdown: false
            },
            {
                name: 'Blog',
                link: '#',
                hasDropdown: false
            },
            {
                name: 'Contact',
                link: '#',
                hasDropdown: false
            },
            {
                name: 'Shop by brand',
                link: '#',
                hasDropdown: true
            },
        ],
        activeNavVoice: 0,
        hasDiscount: true
    },
    methods: {
        getNavVoiceClasses(index) {
            let classes = ''

            if(index == this.activeNavVoice) {
                classes = 'active';
            }

            if(this.navVoices[index].hasDropdown) {
                classes += ' dropdown';
            }

            return classes;
        }
    }
});
