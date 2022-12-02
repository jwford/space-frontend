import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SpacexService {

	private spacexURL = 'https://api.spacexdata.com/v4';

	constructor(private http: HttpClient) { }

	public getLaunches() {
		return this.http.get(`${this.spacexURL}/launches`, { observe: 'body', responseType: 'json'});
	}

}
