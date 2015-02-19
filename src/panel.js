define([
    "text!src/templates/panel.html"
], function(templatePanel) {
    var hr = codebox.require("hr/hr");
    var $ = codebox.require("hr/dom");
    var rpc = codebox.require("core/rpc");
    var events = codebox.require("core/events");

    var Panel = hr.View.extend({
        template: templatePanel,
        className: "webview",

        initialize: function(options) {
            Panel.__super__.initialize.apply(this, arguments);
        },

        render: function() {
            return Panel.__super__.render.apply(this, arguments);
        },

        finish: function() {
            this.$(".inner").html("<img src='https://preview.c9.io/aagosh/boot9/animation/css3-neon-glow/bg.png'></img>");
            return Panel.__super__.finish.apply(this, arguments);
        },


    });

    return Panel;
});