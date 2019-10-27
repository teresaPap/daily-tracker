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
			storedKeys => 
				storedKeys.forEach( key => {
					if (this.isDate(key)) 
						this.storage.get(key).then( happinessValue => 
							this.days.push({date: key, mood: happinessValue}));
				})
		);
	}

	private isDate(date: string): boolean {
		const dateModel: RegExp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i; 
		return dateModel.test(date);
	}

	
}
