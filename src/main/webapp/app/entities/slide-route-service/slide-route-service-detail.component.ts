import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISlideRouteService } from 'app/shared/model/slide-route-service.model';

@Component({
    selector: 'jhi-slide-route-service-detail',
    templateUrl: './slide-route-service-detail.component.html'
})
export class SlideRouteServiceDetailComponent implements OnInit {
    slide: ISlideRouteService;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ slide }) => {
            this.slide = slide;
        });
    }

    previousState() {
        window.history.back();
    }
}
