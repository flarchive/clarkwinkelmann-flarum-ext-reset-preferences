import app from 'flarum/admin/app';

app.initializers.add('clarkwinkelmann-reset-preferences', () => {
    app.extensionData
        .for('clarkwinkelmann-reset-preferences')
        .registerPermission({
            permission: 'clarkwinkelmann-reset-preferences',
            icon: 'fas fa-undo',
            label: app.translator.trans('clarkwinkelmann-reset-preferences.admin.permissions.reset'),
        }, 'view');
});
