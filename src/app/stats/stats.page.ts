import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.page.html',
	styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

	public days: any[] = [];
	constructor( private storage: Storage) { }

	ngOnInit() {
		this.storage.keys().then(
			res => {
				console.log(res);
				res.forEach( date => {
					if (this.isDate(date)) 
						this.storage.get(date).then(
							happinessValue => {
								console.log( date, happinessValue )
								this.days.push({date: date, mood: happinessValue});
							}
						);
				})
			}
		)
	}

	private isDate(date: string): boolean {
		const dateModel: RegExp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i; 
		return dateModel.test(date);
	}

	
}
