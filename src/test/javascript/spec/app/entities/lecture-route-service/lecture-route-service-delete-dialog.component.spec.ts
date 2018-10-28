/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { LecturePlannerTestModule } from '../../../test.module';
import { LectureRouteServiceDeleteDialogComponent } from 'app/entities/lecture-route-service/lecture-route-service-delete-dialog.component';
import { LectureRouteServiceService } from 'app/entities/lecture-route-service/lecture-route-service.service';

describe('Component Tests', () => {
    describe('LectureRouteService Management Delete Component', () => {
        let comp: LectureRouteServiceDeleteDialogComponent;
        let fixture: ComponentFixture<LectureRouteServiceDeleteDialogComponent>;
        let service: LectureRouteServiceService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LecturePlannerTestModule],
                declarations: [LectureRouteServiceDeleteDialogComponent]
            })
                .overrideTemplate(LectureRouteServiceDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LectureRouteServiceDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LectureRouteServiceService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
