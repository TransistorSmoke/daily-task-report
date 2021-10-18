import { Entry } from "../records/entry/entry.model";
import { Injectable } from "@angular/core"; 

@Injectable({
    providedIn: 'root'
})

export class AllEntriesService {
    allEntries = [
        new Entry (new Date('15 Oct 2021'), 'PDF generation with static data'),
        new Entry (new Date('14 Oct 2021'), 'PDF generation method being cleaned up'),
        new Entry (new Date('10 Oct 2021'), 'New age field component ready for release'),
        new Entry (new Date('25 Sept 2021'), 'Nothing new here, bro.'),
        new Entry (new Date('02 Sept 2021'), 'bugs found in new age field component'),
        new Entry (new Date('19 Sept 2021'), 'validation problems still with the component'),
    ];

    get () {
        return this.allEntries;
    }

    add (entry: Entry) {
        this.allEntries.push(entry);
    }

    delete (entry: Entry) {
        const indexEntry = this.allEntries.indexOf(entry);
        if (indexEntry > -1) {
            this.allEntries.slice(indexEntry, 1);
        }
    }
}


