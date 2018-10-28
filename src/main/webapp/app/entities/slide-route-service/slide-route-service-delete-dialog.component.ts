import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISlideRouteService } from 'app/shared/model/slide-route-service.model';
import { SlideRouteServiceService } from './slide-route-service.service';

@Component({
    selector: 'jhi-slide-route-service-delete-dialog',
    templateUrl: './slide-route-service-delete-dialog.component.html'
})
export class SlideRouteServiceDeleteDialogComponent {
    slide: ISlideRouteService;

    constructor(
        private slideService: SlideRouteServiceService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.slideService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'slideListModification',
                content: 'Deleted an slide'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-slide-route-service-delete-popup',
    template: ''
})
export class SlideRouteServiceDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ slide }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(SlideRouteServiceDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.slide = slide;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
