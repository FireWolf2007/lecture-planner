import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISlideRouteService } from 'app/shared/model/slide-route-service.model';

type EntityResponseType = HttpResponse<ISlideRouteService>;
type EntityArrayResponseType = HttpResponse<ISlideRouteService[]>;

@Injectable({ providedIn: 'root' })
export class SlideRouteServiceService {
    private resourceUrl = SERVER_API_URL + 'api/slides';

    constructor(private http: HttpClient) {}

    create(slide: ISlideRouteService): Observable<EntityResponseType> {
        return this.http.post<ISlideRouteService>(this.resourceUrl, slide, { observe: 'response' });
    }

    update(slide: ISlideRouteService): Observable<EntityResponseType> {
        return this.http.put<ISlideRouteService>(this.resourceUrl, slide, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ISlideRouteService>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISlideRouteService[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
