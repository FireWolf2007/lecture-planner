import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LecturePlannerSharedModule } from 'app/shared';
import {
    SlideRouteServiceComponent,
    SlideRouteServiceDetailComponent,
    SlideRouteServiceUpdateComponent,
    SlideRouteServiceDeletePopupComponent,
    SlideRouteServiceDeleteDialogComponent,
    slideRoute,
    slidePopupRoute
} from './';

const ENTITY_STATES = [...slideRoute, ...slidePopupRoute];

@NgModule({
    imports: [LecturePlannerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        SlideRouteServiceComponent,
        SlideRouteServiceDetailComponent,
        SlideRouteServiceUpdateComponent,
        SlideRouteServiceDeleteDialogComponent,
        SlideRouteServiceDeletePopupComponent
    ],
    entryComponents: [
        SlideRouteServiceComponent,
        SlideRouteServiceUpdateComponent,
        SlideRouteServiceDeleteDialogComponent,
        SlideRouteServiceDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LecturePlannerSlideRouteServiceModule {}
