import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LecturePlannerLectureRouteServiceModule } from './lecture-route-service/lecture-route-service.module';
import { LecturePlannerSlideRouteServiceModule } from './slide-route-service/slide-route-service.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        LecturePlannerLectureRouteServiceModule,
        LecturePlannerSlideRouteServiceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LecturePlannerEntityModule {}
