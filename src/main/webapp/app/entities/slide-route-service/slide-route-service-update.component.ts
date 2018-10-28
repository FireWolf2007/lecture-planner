import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ISlideRouteService } from 'app/shared/model/slide-route-service.model';
import { SlideRouteServiceService } from './slide-route-service.service';
import { ILectureRouteService } from 'app/shared/model/lecture-route-service.model';
import { LectureRouteServiceService } from 'app/entities/lecture-route-service';

@Component({
    selector: 'jhi-slide-route-service-update',
    templateUrl: './slide-route-service-update.component.html'
})
export class SlideRouteServiceUpdateComponent implements OnInit {
    slide: ISlideRouteService;
    isSaving: boolean;

    lectures: ILectureRouteService[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private slideService: SlideRouteServiceService,
        private lectureService: LectureRouteServiceService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ slide }) => {
            this.slide = slide;
        });
        this.lectureService.query().subscribe(
            (res: HttpResponse<ILectureRouteService[]>) => {
                this.lectures = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.slide.id !== undefined) {
            this.subscribeToSaveResponse(this.slideService.update(this.slide));
        } else {
            this.subscribeToSaveResponse(this.slideService.create(this.slide));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ISlideRouteService>>) {
        result.subscribe((res: HttpResponse<ISlideRouteService>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackLectureById(index: number, item: ILectureRouteService) {
        return item.id;
    }
}
