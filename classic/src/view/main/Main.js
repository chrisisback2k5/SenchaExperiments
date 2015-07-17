Ext.define('SechnaExperiments.view.main.Main', {
    controller: 'main',
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    xtype: 'app-main',
    viewModel: {
        type: 'main' //#3
    },
    requires: [//#1
        'SechnaExperiments.view.main.Header',
        'SechnaExperiments.view.main.Footer',
        'SechnaExperiments.view.main.Panel',
        'SechnaExperiments.view.main.MainController'
    ],
    items: [{
            xtype: 'appheader', // #2
            region: 'north'
        },{
            region: 'center', // #1
            xtype: 'mainpanel'
        },{
            xtype: 'appfooter', // #3
            region: 'south'
        }, {
            xtype: 'container', // #4
            region: 'west',
            width: 200,
            split: true
        }]
});