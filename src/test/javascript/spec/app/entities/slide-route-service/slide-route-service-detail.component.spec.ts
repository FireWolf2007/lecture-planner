/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LecturePlannerTestModule } from '../../../test.module';
import { SlideRouteServiceDetailComponent } from 'app/entities/slide-route-service/slide-route-service-detail.component';
import { SlideRouteService } from 'app/shared/model/slide-route-service.model';

describe('Component Tests', () => {
    describe('SlideRouteService Management Detail Component', () => {
        let comp: SlideRouteServiceDetailComponent;
        let fixture: ComponentFixture<SlideRouteServiceDetailComponent>;
        const route = ({ data: of({ slide: new SlideRouteService(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LecturePlannerTestModule],
                declarations: [SlideRouteServiceDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SlideRouteServiceDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SlideRouteServiceDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.slide).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
