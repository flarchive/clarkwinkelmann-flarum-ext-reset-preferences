# Reset User Preferences

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/clarkwinkelmann/flarum-ext-reset-preferences/blob/master/LICENSE.txt) [![Latest Stable Version](https://img.shields.io/packagist/v/clarkwinkelmann/flarum-ext-reset-preferences.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-reset-preferences) [![Total Downloads](https://img.shields.io/packagist/dt/clarkwinkelmann/flarum-ext-reset-preferences.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-reset-preferences) [![Donate](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/clarkwinkelmann)

This extension allows users to reset all their preferences to the default value at once.
This includes all notification settings which use the preference API behind the scenes.
Since Flarum doesn't allow doing this natively, a new permission has been added to control access to this feature.

The reset is performed by clicking the new button at the bottom of the preferences page and confirming the prompt that appears.

Most extensions should play nice with this feature but there's a small risk some extensions freak out when the preferences are reset.
Flarum doesn't have any preference change event natively, so this extension is not dispatching any either.

This extension could have unexpected side effects if some extensions use the preferences API to store hidden user state as preference.
Those hidden values would be reset as well when the feature is used (example: UI language).

The extension will bypass features like [fof/default-user-preferences](https://github.com/FriendsOfFlarum/default-user-preferences) because those extensions rely on hard-coding preference values during registration rather than changing the real underlying default.

Preferences stored as user attributes are not impacted (Byobu Block private discussions, Blomstra Digest frequency, etc).

## Installation

    composer require clarkwinkelmann/flarum-ext-reset-preferences

## Support

This extension is under **minimal maintenance**.

It was developed for a client and released as open-source for the benefit of the community.
I might publish simple bugfixes or compatibility updates for free.

You can [contact me](https://clarkwinkelmann.com/flarum) to sponsor additional features or updates.

Support is offered on a "best effort" basis through the Flarum community thread.

## Links

- [GitHub](https://github.com/clarkwinkelmann/flarum-ext-reset-preferences)
- [Packagist](https://packagist.org/packages/clarkwinkelmann/flarum-ext-reset-preferences)
- [Discuss](https://discuss.flarum.org/d/30987)
