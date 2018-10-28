import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LectureRouteService } from 'app/shared/model/lecture-route-service.model';
import { LectureRouteServiceService } from './lecture-route-service.service';
import { LectureRouteServiceComponent } from './lecture-route-service.component';
import { LectureRouteServiceDetailComponent } from './lecture-route-service-detail.component';
import { LectureRouteServiceUpdateComponent } from './lecture-route-service-update.component';
import { LectureRouteServiceDeletePopupComponent } from './lecture-route-service-delete-dialog.component';
import { ILectureRouteService } from 'app/shared/model/lecture-route-service.model';

@Injectable({ providedIn: 'root' })
export class LectureRouteServiceResolve implements Resolve<ILectureRouteService> {
    constructor(private service: LectureRouteServiceService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((lecture: HttpResponse<LectureRouteService>) => lecture.body));
        }
        return of(new LectureRouteService());
    }
}

export const lectureRoute: Routes = [
    {
        path: 'lecture-route-service',
        component: LectureRouteServiceComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'lecturePlannerApp.lecture.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'lecture-route-service/:id/view',
        component: LectureRouteServiceDetailComponent,
        resolve: {
            lecture: LectureRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.lecture.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'lecture-route-service/new',
        component: LectureRouteServiceUpdateComponent,
        resolve: {
            lecture: LectureRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.lecture.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'lecture-route-service/:id/edit',
        component: LectureRouteServiceUpdateComponent,
        resolve: {
            lecture: LectureRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.lecture.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const lecturePopupRoute: Routes = [
    {
        path: 'lecture-route-service/:id/delete',
        component: LectureRouteServiceDeletePopupComponent,
        resolve: {
            lecture: LectureRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.lecture.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
