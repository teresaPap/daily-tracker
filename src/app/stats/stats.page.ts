import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FileCreatorService } from '../services/file-creator.service';
import { IDayStat } from '../interfaces/IDayStat';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.page.html',
	styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

	public days: IDayStat[] = [];
	
	constructor(
		public alertCtrl: AlertController,
		public fileCtrl: FileCreatorService,
		private storage: Storage ) { }

	ngOnInit(): void {
		this.loadStoredStats(); 
	}

	public async onDownload(): Promise<void> {
		const alert = await this.alertCtrl.create({
			header: 'Download Progress',
			message: 'This action will save all your statistics to your device.',
			buttons: [
				{
					text: 'Save',
					handler: () => this.saveFile()
				},
				{
					text: 'Cancel',
					role: 'cancel'
				}
			]
		});
		return await alert.present();
	}

	private saveFile() {
		this.fileCtrl.createStatFile(this.days)
			.then( res => console.log(res))
			.catch( error => this.displayError(error) );
	}

	private async displayError(message): Promise<void> {
		const alert = await this.alertCtrl.create({
			header: 'An Error Has Occured',
			message: message,
			buttons: ['Ok']
		});
		return await alert.present();
	}

	private loadStoredStats(): void {
		this.storage.keys().then(
			storedKeys =>
				storedKeys.forEach(key => {
					if (this.isDate(key))
						this.storage.get(key).then( happinessValue =>
							this.days.push({ date: key, mood: happinessValue }));
				})
		);
	}
	
	private isDate(date: string): boolean {
		const dateModel: RegExp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
		return dateModel.test(date);
	}


}
