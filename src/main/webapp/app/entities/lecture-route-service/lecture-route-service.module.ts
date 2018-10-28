import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LecturePlannerSharedModule } from 'app/shared';
import {
    LectureRouteServiceComponent,
    LectureRouteServiceDetailComponent,
    LectureRouteServiceUpdateComponent,
    LectureRouteServiceDeletePopupComponent,
    LectureRouteServiceDeleteDialogComponent,
    lectureRoute,
    lecturePopupRoute
} from './';

const ENTITY_STATES = [...lectureRoute, ...lecturePopupRoute];

@NgModule({
    imports: [LecturePlannerSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LectureRouteServiceComponent,
        LectureRouteServiceDetailComponent,
        LectureRouteServiceUpdateComponent,
        LectureRouteServiceDeleteDialogComponent,
        LectureRouteServiceDeletePopupComponent
    ],
    entryComponents: [
        LectureRouteServiceComponent,
        LectureRouteServiceUpdateComponent,
        LectureRouteServiceDeleteDialogComponent,
        LectureRouteServiceDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LecturePlannerLectureRouteServiceModule {}
