/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SechnaExperiments.Application', {
    extend: 'Ext.app.Application',
    name: 'SechnaExperiments',
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
        var login = Ext.widget('login-dialog', {
            store: 'DER BRAND'
        }); //#1
        console.log(login.getStore());
        Ext.tip.QuickTipManager.init();
    },
    views: [
        'login.Login',
        'main.Main'
    ],
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
                function (choice) {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                }
        );
    }
});
