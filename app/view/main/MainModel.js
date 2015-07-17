Ext.define('SechnaExperiments.view.main.MainModel', {//#1
    extend: 'Ext.app.ViewModel', //#2
    alias: 'viewmodel.main', //#3
    data: {
        name: 'Packt', //#4
        appName: 'DVD Rental Store', //#5
        appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header - logo">', //#6
        footer: 'Mastering ExtJS book - Loiane Groner -http://packtpub.com' //#7
    }
});