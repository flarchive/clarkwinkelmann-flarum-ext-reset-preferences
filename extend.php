<?php

namespace ClarkWinkelmann\ResetPreferences;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Event())
        ->listen(Saving::class, SaveUser::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('canResetPreferences', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission('clarkwinkelmann-reset-preferences');
        }),
];
