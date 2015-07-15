Ext.define('SechnaExperiments.view.login.Login', {// #1
    extend: 'Ext.window.Window', // #2
    xtype: 'login-dialog', // #3
    autoShow: true, // #4
    height: 180, // #5
    width: 360,
    layout: {
        type: 'fit' // #7
    },
    iconCls: 'fa fa-key fa-lg', // #8
    title: 'Login', // #9
    closeAction: 'hide', // #10
    closable: false, // #11
    draggable: true, // #12
    resizable: false, // #13

    items: [
        {
            xtype: 'form', //#14
            bodyPadding: 15, //#15
            defaults: {//#16
                xtype: 'textfield', //#17
                anchor: '100%', //#18
                labelWidth: 60, //#19
                allowBlank: false, // #21
                vtype: 'alphanum', // #22
                minLength: 3, // #23
                msgTarget: 'side' // #24
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User',
                    maxLength: 25
                },
                {
                    inputType: 'password', //#20,
                    vtype: 'customPass',
                    name: 'password',
                    msgTarget: 'side',
                    fieldLabel: 'Password',
                    maxLength: 15
                }
            ]

        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'tbfill' //#25
                },
                {
                    xtype: 'button', //#26
                    iconCls: 'fa fa-times fa-lg',
                    text: 'Cancel'
                },
                {
                    xtype: 'button', //#27
                    formBind: true, //#28
                    iconCls: 'fa fa-sign-in fa-lg',
                    text: 'Submit'
                }
            ]
        }
    ]

});


