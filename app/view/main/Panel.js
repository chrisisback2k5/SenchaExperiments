Ext.define('SechnaExperiments.view.main.Panel', {// #1
    extend: 'Ext.tab.Panel', // #2
    xtype: 'mainpanel', // #3
    activeTab: 0, // #4
    items: [
        {
            xtype: 'panel', // #5
            closable: false, // #6
            iconCls: 'fa fa-home fa-lg tabIcon', // #7
            title: 'Home' // #8
        }
    ]
});