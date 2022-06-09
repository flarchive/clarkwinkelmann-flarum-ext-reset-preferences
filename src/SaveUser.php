<?php

namespace ClarkWinkelmann\ResetPreferences;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SaveUser
{
    public function handle(Saving $event)
    {
        $attributes = (array)Arr::get($event->data, 'attributes');

        if (!Arr::exists($attributes, 'preferences')) {
            return;
        }

        // passing a null "preferences" key is how we will reset
        if (Arr::get($attributes, 'preferences') !== null) {
            return;
        }

        // Same permission check as in EditUserHandler
        $isSelf = $event->actor->id === $event->user->id;
        $event->actor->assertPermission($isSelf);

        $event->actor->hasPermission('clarkwinkelmann-reset-preferences');

        // Flarum doesn't have any permission-related event, so bypassing $user->setPreferences() shouldn't be too big of a deal
        $event->user->preferences = null;
    }
}
