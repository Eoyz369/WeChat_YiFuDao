Component({
    properties: {
        placeholder: {
            type: String,
            value: ""
        },
        value: {
            type: String,
            value: ""
        }
    },
    data: {
        showClearIcon: !1
    },
    methods: {
        changeSearch: function(t) {
            t.detail.value ? this.setData({
                showClearIcon: !0
            }) : this.setData({
                showClearIcon: !1
            }), this.setData({
                value: t.detail.value
            }), this.triggerEvent("input", t.detail);
        },
        clearInput: function() {
            this.setData({
                showClearIcon: !1,
                value: ""
            }), this.triggerEvent("clear");
        },
        confirmSearch: function(t) {
            this.triggerEvent("confirm", t.detail);
        }
    }
});