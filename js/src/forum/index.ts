import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import extractText from 'flarum/common/utils/extractText';
import Button from 'flarum/common/components/Button';
import SettingsPage from 'flarum/forum/components/SettingsPage';

app.initializers.add('clarkwinkelmann-reset-preferences', () => {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        if (!app.forum.attribute('canResetPreferences')) {
            return;
        }

        items.add('resetPreferences', Button.component({
            className: 'Button',
            icon: 'fas fa-undo',
            onclick: () => {
                if (!confirm(extractText(app.translator.trans('clarkwinkelmann-reset-preferences.forum.preferences.confirm')))) {
                    return;
                }

                this.resetState = 'saving';

                // We must create a copy of the user because otherwise Flarum will crash when the value is set to null internally
                // We can't set it to an empty POJO either because that object should have the key-value for all default settings
                // Which we will only retrieve as the response to the API request
                const saveUser = app.store.createRecord('users');
                saveUser.pushData({id: this.user.id()});
                saveUser.exists = true;

                saveUser.save({
                    preferences: null,
                }).then(() => {
                    this.resetState = 'done';
                    m.redraw();

                    setTimeout(() => {
                        this.resetState = null;
                        m.redraw();
                    }, 2000);
                }).catch(error => {
                    // No need for special error state, Flarum error handler should already display an alert
                    this.resetState = null;
                    m.redraw();

                    throw error;
                });
            },
            loading: this.resetting === 'saving',
        }, app.translator.trans('clarkwinkelmann-reset-preferences.forum.preferences.' + (this.resetState === 'done' ? 'done' : 'reset'))), -500); // Place at the very bottom of the page
    });
});
