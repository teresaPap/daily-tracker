import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { IDayStat } from '../interfaces/IDayStat';
import { Platform } from '@ionic/angular';


@Injectable({
	providedIn: 'root'
})
export class FileCreatorService {


	constructor( 
		private file: File,
		private platform: Platform  ) { }

	public createStatFile( dayStats: IDayStat[] ) {
		if ( !this.platform.is('cordova') ) 
			return Promise.reject('Cordova is not available.') ;

		const today = new Date();
		const filename: string = `tracked_happiness_${today.toLocaleDateString()}`;
		const fileLines: string[] = [ `Happiness data saved on ${today.toLocaleDateString()}`, ' ' ]
		dayStats.forEach( day => {
			fileLines.push(`${day.date} - ${day.mood}`);
		});
		const blob: Blob = new Blob(fileLines);
		
		return this.file.writeFile( this.file.dataDirectory, filename, blob );
	}

}
