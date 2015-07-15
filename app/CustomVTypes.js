Ext.apply(Ext.form.field.VTypes, {
    customPass: function (val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[AZ])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: 'Not a valid password. Length must be at least 6 \n\
                        characters and maximum of 20. Password must contain one \n\
                        digit, one letter lowercase, one letter uppercase, one \n\
                        special symbol @#$ % and between 6 and 20 characters.'
});