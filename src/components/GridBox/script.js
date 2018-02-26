export default {
    name: 'GridBox',
    props: {
        tall: {
            type: [Boolean],
            default: false
        }
    },
    computed: {
        classes: function () {
            return [
                this.tall ? '-tall' : ''
            ];
        }
    }
};
