import base1 from './Base1.js';

class Register {
    constructor(renderTo) {
        let vp = Ext.getCmp('regPage');
        if (vp)
            vp.add(new Admin.view.Register());                
    }
}



App.Register = {
    render: function () {
        var objR = new Register("regPage");
        let b = new base1();
        b.printF();
    }
} 

