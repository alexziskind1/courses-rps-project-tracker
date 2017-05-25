import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translate(0, 0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translate(-500, 0)'
            }),
            animate(600)
        ]),
        transition(':leave', [
            animate(600, style({
                opacity: 0,
                transform: 'translate(0, 500)'
            }))
        ])
    ]);


export var slideInAnimations = [
    trigger('slideIn', [
        state('on', style({ transform: 'translate(0, 0)', opacity: 1 })),
        state('off', style({ transform: 'translate(-20, 0)', opacity: 0 })),
        transition('off => on', animate(600)),
        transition('* => on', [
            style({ transform: 'translate(20, 0)', opacity: 0 }),
            animate(600)
        ])
    ])
];