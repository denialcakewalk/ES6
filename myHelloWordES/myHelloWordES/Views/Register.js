//Ext.net.ResourceMgr.init({
//    id: "ctl01",
//    theme: "triton",
//    namespace: 'App',
//    locale: "en-US"
//});
//Ext.onReady(function () {
    Ext.define('Admin.view.Register', {
        extend: 'Ext.form.FormPanel',
        xtype: 'register',

        //requires: [
        //    'Ext.field.Checkbox',
        //    'Ext.field.Password',
        //    'Ext.field.Text',
        //    'Ext.layout.HBox'
        //],


        initComponent: function () {
            var me = this;
            Ext.applyIf(me, {
                items: [{
                    frame: true,
                    height: 295,
                    width: 400,
                    xtype: "form",
                    autoScroll: true,
                    items: [{
                        xtype: "fieldset",
                        defaults: {
                            "width": 300
                        },
                        items: [{
                            xtype: "textfield",
                            fieldLabel: "User ID",
                            name: "user",
                            allowBlank: false,
                            emptyText: "user id"
                        }, {
                            xtype: "textfield",
                            fieldLabel: "Password",
                            inputType: "password",
                            name: "pass",
                            allowBlank: false,
                            emptyText: "password"
                        }, {
                            xtype: "textfield",
                            fieldLabel: "Verify",
                            inputType: "password",
                            name: "pass",
                            allowBlank: false,
                            emptyText: "password"
                        }],
                        title: "User Info"
                    }, {
                        xtype: "fieldset",
                        defaults: {
                            "width": 300
                        },
                        items: [{
                            xtype: "textfield",
                            fieldLabel: "First Name",
                            name: "first",
                            emptyText: "First Name"
                        }, {
                            xtype: "textfield",
                            fieldLabel: "Last Name",
                            name: "last",
                            emptyText: "Last Name"
                        }, {
                            xtype: "textfield",
                            fieldLabel: "Company",
                            name: "company"
                        }, {
                            xtype: "textfield",
                            fieldLabel: "Email",
                            name: "email",
                            vtype: "email"
                        }, {
                            xtype: "combobox",
                            fieldLabel: "State",
                            name: "state",
                            emptyText: "Select a state...",
                            displayField: "name",
                            queryMode: "local",
                            typeAhead: true,
                            valueField: "abbr",
                            store: {
                                model: Ext.ClassManager.isCreated(Ext.id()) ? Ext.id() : Ext.define(Ext.id(), {
                                    extend: "Ext.data.Model",
                                    fields: [{
                                        name: "abbr"
                                    }, {
                                        name: "name"
                                    }, {
                                        name: "slogan"
                                    }]
                                }),
                                storeId: "ctl24",
                                autoLoad: true,
                                data: [["AL", "Alabama", "The Heart of Dixie"], ["AK", "Alaska", "The Land of the Midnight Sun"], ["AZ", "Arizona", "The Grand Canyon State"], ["AR", "Arkansas", "The Natural State"], ["CA", "California", "The Golden State"], ["CO", "Colorado", "The Mountain State"], ["CT", "Connecticut", "The Constitution State"], ["DE", "Delaware", "The First State"], ["DC", "District of Columbia", "The Nation's Capital"], ["FL", "Florida", "The Sunshine State"], ["GA", "Georgia", "The Peach State"], ["HI", "Hawaii", "The Aloha State"], ["ID", "Idaho", "Famous Potatoes"], ["IL", "Illinois", "The Prairie State"], ["IN", "Indiana", "The Hospitality State"], ["IA", "Iowa", "The Corn State"], ["KS", "Kansas", "The Sunflower State"], ["KY", "Kentucky", "The Bluegrass State"], ["LA", "Louisiana", "The Bayou State"], ["ME", "Maine", "The Pine Tree State"], ["MD", "Maryland", "Chesapeake State"], ["MA", "Massachusetts", "The Spirit of America"], ["MI", "Michigan", "Great Lakes State"], ["MN", "Minnesota", "North Star State"], ["MS", "Mississippi", "Magnolia State"], ["MO", "Missouri", "Show Me State"], ["MT", "Montana", "Big Sky Country"], ["NE", "Nebraska", "Beef State"], ["NV", "Nevada", "Silver State"], ["NH", "New Hampshire", "Granite State"], ["NJ", "New Jersey", "Garden State"], ["NM", "New Mexico", "Land of Enchantment"], ["NY", "New York", "Empire State"], ["NC", "North Carolina", "First in Freedom"], ["ND", "North Dakota", "Peace Garden State"], ["OH", "Ohio", "The Heart of it All"], ["OK", "Oklahoma", "Oklahoma is OK"], ["OR", "Oregon", "Pacific Wonderland"], ["PA", "Pennsylvania", "Keystone State"], ["RI", "Rhode Island", "Ocean State"], ["SC", "South Carolina", "Nothing Could be Finer"], ["SD", "South Dakota", "Great Faces, Great Places"], ["TN", "Tennessee", "Volunteer State"], ["TX", "Texas", "Lone Star State"], ["UT", "Utah", "Salt Lake State"], ["VT", "Vermont", "Green Mountain State"], ["VA", "Virginia", "Mother of States"], ["WA", "Washington", "Green Tree State"], ["WV", "West Virginia", "Mountain State"], ["WI", "Wisconsin", "America's Dairyland"], ["WY", "Wyoming", "Like No Place on Earth"]],
                                proxy: {
                                    type: 'memory',
                                    reader: {
                                        type: "array"
                                    }
                                }
                            }
                        }, {
                            xtype: "datefield",
                            fieldLabel: "Date of birth",
                            name: "dob",
                            allowBlank: false,
                            ariaFormat: "n/j/Y",
                            format: "n/j/Y",
                            maxValue: new Date(2017, 4, 25),
                            submitFormat: "n/j/Y"
                        }],
                        title: "Contact Information"
                    }],
                    bodyPadding: 13,
                    buttons: [{
                        id: "ctl30",
                        disabled: true,
                        formBind: true,
                        text: "Register"
                    }],
                    title: "Register",
                    url: unescape("%2fExamples%2fKitchen_Sink%2fForms%2fRegister%2f"),
                    fieldDefaults: {
                        labelAlign: "right",
                        labelWidth: 115,
                        msgTarget: "side"
                    }
                }]
            });
            me.callParent(arguments);
        }
    });
//});



//Ext.ns("Admin.view.authentication");
//Ext.apply(Controls.addCds, {

//    createRegister: function () {



//    });