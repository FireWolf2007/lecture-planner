export interface ISlideRouteService {
    id?: number;
    number?: number;
    timing?: number;
    text?: string;
    lectureId?: number;
}

export class SlideRouteService implements ISlideRouteService {
    constructor(public id?: number, public number?: number, public timing?: number, public text?: string, public lectureId?: number) {}
}
