/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { LecturePlannerTestModule } from '../../../test.module';
import { SlideRouteServiceUpdateComponent } from 'app/entities/slide-route-service/slide-route-service-update.component';
import { SlideRouteServiceService } from 'app/entities/slide-route-service/slide-route-service.service';
import { SlideRouteService } from 'app/shared/model/slide-route-service.model';

describe('Component Tests', () => {
    describe('SlideRouteService Management Update Component', () => {
        let comp: SlideRouteServiceUpdateComponent;
        let fixture: ComponentFixture<SlideRouteServiceUpdateComponent>;
        let service: SlideRouteServiceService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LecturePlannerTestModule],
                declarations: [SlideRouteServiceUpdateComponent]
            })
                .overrideTemplate(SlideRouteServiceUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SlideRouteServiceUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SlideRouteServiceService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new SlideRouteService(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.slide = entity;
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
                    const entity = new SlideRouteService();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.slide = entity;
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
