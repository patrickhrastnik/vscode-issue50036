// -------------------------------------------------------
// Ergänzende Interface-Definitionen für Twitter.Typeahead
// 2017 Hrastnik Patrick
// -------------------------------------------------------

/// <reference types="jquery"/>

declare namespace Twitter.Typeahead {
    interface Dataset<T> {
        /**
         * Gibt den Namen des JSON Feldes an, das als anzuzeigender Wert verwendet wird, wenn ein Autocomplete-Vorschlag ausgewählt wird.
         */
        displayKey?: string;
    }
}