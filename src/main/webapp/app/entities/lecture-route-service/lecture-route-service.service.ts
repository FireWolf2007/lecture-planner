import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ILectureRouteService } from 'app/shared/model/lecture-route-service.model';

type EntityResponseType = HttpResponse<ILectureRouteService>;
type EntityArrayResponseType = HttpResponse<ILectureRouteService[]>;

@Injectable({ providedIn: 'root' })
export class LectureRouteServiceService {
    private resourceUrl = SERVER_API_URL + 'api/lectures';

    constructor(private http: HttpClient) {}

    create(lecture: ILectureRouteService): Observable<EntityResponseType> {
        return this.http.post<ILectureRouteService>(this.resourceUrl, lecture, { observe: 'response' });
    }

    update(lecture: ILectureRouteService): Observable<EntityResponseType> {
        return this.http.put<ILectureRouteService>(this.resourceUrl, lecture, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ILectureRouteService>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ILectureRouteService[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
