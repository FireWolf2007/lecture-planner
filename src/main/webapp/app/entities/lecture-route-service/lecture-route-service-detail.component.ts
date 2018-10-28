import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILectureRouteService } from 'app/shared/model/lecture-route-service.model';

@Component({
    selector: 'jhi-lecture-route-service-detail',
    templateUrl: './lecture-route-service-detail.component.html'
})
export class LectureRouteServiceDetailComponent implements OnInit {
    lecture: ILectureRouteService;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ lecture }) => {
            this.lecture = lecture;
        });
    }

    previousState() {
        window.history.back();
    }
}
