// -------------------------------------------------------
// Interface-Definitionen für kboucher/jquery-sticky-header-footer
// 2017 Hrastnik Patrick
// -------------------------------------------------------

/// <reference types="jquery" />

interface JQueryStickyHeaderFooterSettings{
    bodySelector: string;
    headerSelector: string;
    footerSelector: string;
    bottom: string;
    top: string;
}

type JQueryStickyHeaderFooterFunctions = 
    /**
     * call tearDown method to remove added elements, jquery data and event listeners
     */
    "tearDown";

interface JQuery {
    /**
     * jQuery plugin that dynamically sticks content headers and footers to the top and bottom of viewport.
     * @description
     * Sticky Header Footer makes a clone of the desired sticky header and/or footer 
     * and places it in a DIV above or below the original stuck component. 
     * Clones are used in order to simplify maintaining layout (especially with tables). 
     * The clones are swapped when stuck and unstuck to ensure DOM updates to the header and/or footer are visible.
     * @see https://github.com/kboucher/jquery-sticky-header-footer
     */
    stickyHeaderFooter(params: JQueryStickyHeaderFooterSettings | JQueryStickyHeaderFooterFunctions): JQuery;
}
