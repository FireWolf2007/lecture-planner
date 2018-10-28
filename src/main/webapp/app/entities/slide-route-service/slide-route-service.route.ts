import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SlideRouteService } from 'app/shared/model/slide-route-service.model';
import { SlideRouteServiceService } from './slide-route-service.service';
import { SlideRouteServiceComponent } from './slide-route-service.component';
import { SlideRouteServiceDetailComponent } from './slide-route-service-detail.component';
import { SlideRouteServiceUpdateComponent } from './slide-route-service-update.component';
import { SlideRouteServiceDeletePopupComponent } from './slide-route-service-delete-dialog.component';
import { ISlideRouteService } from 'app/shared/model/slide-route-service.model';

@Injectable({ providedIn: 'root' })
export class SlideRouteServiceResolve implements Resolve<ISlideRouteService> {
    constructor(private service: SlideRouteServiceService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((slide: HttpResponse<SlideRouteService>) => slide.body));
        }
        return of(new SlideRouteService());
    }
}

export const slideRoute: Routes = [
    {
        path: 'slide-route-service',
        component: SlideRouteServiceComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'lecturePlannerApp.slide.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'slide-route-service/:id/view',
        component: SlideRouteServiceDetailComponent,
        resolve: {
            slide: SlideRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.slide.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'slide-route-service/new',
        component: SlideRouteServiceUpdateComponent,
        resolve: {
            slide: SlideRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.slide.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'slide-route-service/:id/edit',
        component: SlideRouteServiceUpdateComponent,
        resolve: {
            slide: SlideRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.slide.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const slidePopupRoute: Routes = [
    {
        path: 'slide-route-service/:id/delete',
        component: SlideRouteServiceDeletePopupComponent,
        resolve: {
            slide: SlideRouteServiceResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lecturePlannerApp.slide.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
