Ext.define('SechnaExperiments.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onLogout: function () {
        this.getView().destroy(); //#3
        window.location.reload(); //#4
    }
});
