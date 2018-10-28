/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { LecturePlannerTestModule } from '../../../test.module';
import { LectureRouteServiceUpdateComponent } from 'app/entities/lecture-route-service/lecture-route-service-update.component';
import { LectureRouteServiceService } from 'app/entities/lecture-route-service/lecture-route-service.service';
import { LectureRouteService } from 'app/shared/model/lecture-route-service.model';

describe('Component Tests', () => {
    describe('LectureRouteService Management Update Component', () => {
        let comp: LectureRouteServiceUpdateComponent;
        let fixture: ComponentFixture<LectureRouteServiceUpdateComponent>;
        let service: LectureRouteServiceService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LecturePlannerTestModule],
                declarations: [LectureRouteServiceUpdateComponent]
            })
                .overrideTemplate(LectureRouteServiceUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(LectureRouteServiceUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LectureRouteServiceService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new LectureRouteService(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.lecture = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new LectureRouteService();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.lecture = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
