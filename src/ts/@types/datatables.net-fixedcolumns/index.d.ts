// -------------------------------------------------------
// Interface-Definitionen für datatables.net-fixedcolumns
// 2017 Hrastnik Patrick
// -------------------------------------------------------

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * FixedColumns extension options
         */
        fixedColumns?: boolean | FixedColumnsSettings;
    }

    interface Api {
        /**
         * Namespacing for FixedColumns methods - FixedColumns' methods are available available on the returned API instance.
         * @description 
         * This method does not perform any functions itself, 
         * but rather serves as a simple namespacing method to group 
         * the other methods that FixedColumns makes available. 
         * Please refer to the documentation for those methods for full details on how they can be used.
         * @example $('table').api().fixedColumns()
         * @returns [[DataTables.Api]]
         * @see https://datatables.net/reference/api/fixedColumns()
         */
        fixedColumns(): FixedColumnsApi;
    }

    /**
     * Pseudo-Api, damit für die Ausführung der hier enthaltenen Funktionen zuerst die Ausführung von Api.fixedColumns notwendig ist
     */
    interface FixedColumnsApi extends Api {
        /**
         * Redraw the fixed columns, re-reading the data from the source DataTable.
         * @description 
         * If the data in the host DataTable changes, the FixedColumns must be updated to reflect this new data. 
         * This method provides the ability, simply redrawing the fixed columns with the latest data in the DataTable.
         * In future this will be automated once DataTables added events for table update actions, 
         * but at the moment this method must be called.
         * @example $('table').api().fixedColumns().update()
         * @returns [[DataTables.Api]]
         * @see https://datatables.net/reference/api/fixedColumns().update()
         */
        update(): FixedColumnsApi;

        /**
         * Recalculate the fixed columns sizes and positions, redrawing them on pages based on the latest DataTable data and position.
         * @description 
         * If a table's position on the page is altered or its visibility is changed 
         * (for example it is created while hidden in a tab) 
         * then the fixed columns will need to be updated to match the table's new sizing. 
         * This method provides that ability.
         * Note that this method will automatically call [[DataTables.Api.fixedColumns().update()]]. 
         * You are not required to call these methods separately.
         * @example $('table').api().fixedColumns().relayout()
         * @returns [[DataTables.Api]]
         * @see https://datatables.net/reference/api/fixedColumns().relayout()
         */
        relayout(): FixedColumnsApi;
    }

    /*
     * FixedColumns extension options
     * @see https://datatables.net/reference/option/fixedColumns
     */
    interface FixedColumnsSettings {
        /**
         * Number of columns to fix to the left of the table
         */
        leftColumns?: number;
        /**
         * Number of columns to fix to the right of the table
         */
        rightColumns?: number;
        /**
         * Row height matching algorithm to use
         */
        heightMatch?: FixedColumnsHeightMatchType;
    }

    /**
     * Row height matching algorithm to use
     * @see https://datatables.net/reference/option/fixedColumns.heightMatch
     */
    type FixedColumnsHeightMatchType =
        /**
         * will result in no height matching being applied by FixedColumns (height matching could be forced by CSS in this case)
         */
        "none" |
        /**
         * whereby the height calculation will be performed once, and the result cached to be used again
         */
        "semiauto" |
        /**
         * height matching is performed on every draw (slowest but must accurate)
         */
        "auto";
}
