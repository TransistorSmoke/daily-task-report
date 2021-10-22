export class Entry {
    constructor(
        public entryDate: Date,
        public entryText: string,
        public isEntryShown: boolean = false
    ) {}
}
