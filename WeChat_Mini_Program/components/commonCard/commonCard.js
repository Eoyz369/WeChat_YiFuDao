Component({
    properties: {
        titlePdRt: {
            type: Boolean,
            value: !1
        },
        ifElips: {
            type: Boolean,
            value: !1
        },
        hasData: {
            type: Boolean,
            value: !0
        },
        pram: {
            type: Object,
            value: {}
        },
        grayBg: {
            type: Boolean,
            value: !1
        },
        showTitle: {
            type: Boolean,
            value: !0
        }
    },
    options: {
        multipleSlots: !0
    },
    data: {},
    methods: {
        onclick: function(e) {
            this.triggerEvent("bindSomeFun");
        }
    }
});