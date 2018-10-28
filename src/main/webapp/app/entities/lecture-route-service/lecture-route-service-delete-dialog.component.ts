import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ILectureRouteService } from 'app/shared/model/lecture-route-service.model';
import { LectureRouteServiceService } from './lecture-route-service.service';

@Component({
    selector: 'jhi-lecture-route-service-delete-dialog',
    templateUrl: './lecture-route-service-delete-dialog.component.html'
})
export class LectureRouteServiceDeleteDialogComponent {
    lecture: ILectureRouteService;

    constructor(
        private lectureService: LectureRouteServiceService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.lectureService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'lectureListModification',
                content: 'Deleted an lecture'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-lecture-route-service-delete-popup',
    template: ''
})
export class LectureRouteServiceDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ lecture }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(LectureRouteServiceDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.lecture = lecture;
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
