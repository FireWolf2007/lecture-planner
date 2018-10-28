/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LecturePlannerTestModule } from '../../../test.module';
import { LectureRouteServiceDetailComponent } from 'app/entities/lecture-route-service/lecture-route-service-detail.component';
import { LectureRouteService } from 'app/shared/model/lecture-route-service.model';

describe('Component Tests', () => {
    describe('LectureRouteService Management Detail Component', () => {
        let comp: LectureRouteServiceDetailComponent;
        let fixture: ComponentFixture<LectureRouteServiceDetailComponent>;
        const route = ({ data: of({ lecture: new LectureRouteService(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LecturePlannerTestModule],
                declarations: [LectureRouteServiceDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(LectureRouteServiceDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LectureRouteServiceDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.lecture).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
