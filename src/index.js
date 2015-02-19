define([
    "src/panel",
    "less!src/stylesheets/main.less"
], function(Panel) {
    codebox.tabs.add(Panel, {}, {
        title: "Webview",
        icon: "globe"
    });
});