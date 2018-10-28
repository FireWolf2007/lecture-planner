import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILectureRouteService } from 'app/shared/model/lecture-route-service.model';
import { LectureRouteServiceService } from './lecture-route-service.service';

@Component({
    selector: 'jhi-lecture-route-service-update',
    templateUrl: './lecture-route-service-update.component.html'
})
export class LectureRouteServiceUpdateComponent implements OnInit {
    lecture: ILectureRouteService;
    isSaving: boolean;

    constructor(private lectureService: LectureRouteServiceService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ lecture }) => {
            this.lecture = lecture;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.lecture.id !== undefined) {
            this.subscribeToSaveResponse(this.lectureService.update(this.lecture));
        } else {
            this.subscribeToSaveResponse(this.lectureService.create(this.lecture));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ILectureRouteService>>) {
        result.subscribe((res: HttpResponse<ILectureRouteService>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
