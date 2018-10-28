/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { LecturePlannerTestModule } from '../../../test.module';
import { SlideRouteServiceDeleteDialogComponent } from 'app/entities/slide-route-service/slide-route-service-delete-dialog.component';
import { SlideRouteServiceService } from 'app/entities/slide-route-service/slide-route-service.service';

describe('Component Tests', () => {
    describe('SlideRouteService Management Delete Component', () => {
        let comp: SlideRouteServiceDeleteDialogComponent;
        let fixture: ComponentFixture<SlideRouteServiceDeleteDialogComponent>;
        let service: SlideRouteServiceService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LecturePlannerTestModule],
                declarations: [SlideRouteServiceDeleteDialogComponent]
            })
                .overrideTemplate(SlideRouteServiceDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SlideRouteServiceDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SlideRouteServiceService);
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
