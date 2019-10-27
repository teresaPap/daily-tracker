import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-track-today',
	templateUrl: './track-today.page.html',
	styleUrls: ['./track-today.page.scss'],
})
export class TrackTodayPage implements OnInit, OnDestroy {
	
	public todaysMood: string;
	public todaysDate: string;

	constructor() { }

	ngOnInit() {
		const today = new Date();
		this.todaysDate = today.toLocaleDateString(); 
	}

	ngOnDestroy() {
		console.log('on destroy: Mood today is', this.todaysMood);
		//TODO: Store today's mood in ionic storage
	}

	public onMoodChanged(e) {
		this.todaysMood = e.detail.value;
	}

}
