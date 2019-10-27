import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-track-today',
	templateUrl: './track-today.page.html',
	styleUrls: ['./track-today.page.scss'],
})
export class TrackTodayPage implements OnInit, OnDestroy {
	
	public todaysMood: string;
	public todaysDate: string;

	constructor( private storage: Storage ) { }

	ngOnInit(): void {
		const today = new Date();
		this.todaysDate = today.toLocaleDateString(); 
	}

	ngOnDestroy(): void {
		this.storage.set(this.todaysDate, this.todaysMood);
	}

	public onMoodChanged(e): void {
		this.todaysMood = e.detail.value;
	}

}
