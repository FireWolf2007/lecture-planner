import { ISlideRouteService } from 'app/shared/model//slide-route-service.model';

export interface ILectureRouteService {
    id?: number;
    name?: string;
    slides?: ISlideRouteService[];
}

export class LectureRouteService implements ILectureRouteService {
    constructor(public id?: number, public name?: string, public slides?: ISlideRouteService[]) {}
}
