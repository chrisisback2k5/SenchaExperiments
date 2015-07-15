Ext.define('SechnaExperiments.view.login.LoginController', {// #1
    extend: 'Ext.app.ViewController', // #2
    alias: 'controller.login', // #3
    onTextFieldSpecialKey: function (field, e, options) {
    }, // #4
    onTextFieldKeyPress: function (field, e, options) {
    }, // #5
    onButtonClickCancel: function (button, e, options) {
        this.lookupReference('form').reset();
    }, // #6
    onButtonClickSubmit: function (button, e, options) {
        
    }, // #7
    doLogin: function () {
    }, // #8
    onLoginFailure: function (form, action) {
    }, // #9
    onLoginSuccess: function (form, action) {
    } // #10
});