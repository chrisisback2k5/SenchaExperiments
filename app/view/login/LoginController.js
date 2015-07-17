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
        this.doLogin();
    }, // #7
    doLogin: function () {
        this.getView().close(); //#1
        Ext.create('SechnaExperiments.view.main.Main');
    }, // #8
    onLoginFailure: function (form, action) {
    }, // #9
    onLoginSuccess: function (form, action) {
    }, // #10
    onTextFieldSpecialKey: function (field, e, options) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    onTextFieldKeyPress: function (field, e, options) {
        var charCode = e.getCharCode(),
                me = this;
        console.log(charCode);
        me.capslockTooltip = Ext.widget('capslocktooltip'); //#4
        me.capslockTooltip.show(); //#5
        /*
        if ((e.shiftKey && charCode >= 97 && charCode <= 122) || //#2
                (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
            if (me.capslockTooltip === undefined) { //#3
                me.capslockTooltip = Ext.widget('capslocktooltip'); //#4
            }
            me.capslockTooltip.show(); //#5
        } else {
            if (me.capslockTooltip !== undefined) { //#6
                me.capslockTooltip.hide(); //#7
            }
        }*/
    }
});