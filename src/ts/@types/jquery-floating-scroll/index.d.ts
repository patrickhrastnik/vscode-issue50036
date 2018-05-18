// -------------------------------------------------------
// Interface-Definitionen für Amphiluke/floating-scroll
// 2017 Hrastnik Patrick
// -------------------------------------------------------

/// <reference types="jquery" />

interface JQuery {
    /**
     * A lightweight jQuery plugin providing floating scrollbar functionality
     * @description
     * The general purpose of the plugin is to provide some lengthy containers on the page with a separate horizontal scroll bar, 
     * which does not vanish from sight when the entire page is scrolled. 
     * So, the user will always be able to scroll the container even if its own scroll bar is hidden from view.
     * Moreover, the plugin displays such an additional floating scroll bar only in case of actual need, 
     * i.e. the floatingScroll does not result in unnecessary scroll bar duplication. 
     * So, one uses the floating scroll bar only if the “native” one is out of sight.
     * @see https://github.com/Amphiluke/floating-scroll
     * @example https://amphiluke.github.io/floating-scroll/
     */
    floatingScroll(initOption?: JQueryFloatingScrollOptions): JQuery;
}

type JQueryFloatingScrollOptions =
    /**
     * used to initialize a floating scroll widget
     * @default
     */
    "init" |
    /**
     * used to force update of the floating scroll bar parameters (size and position)
     */
    "update" |
    /**
     * removes a scroll bar and all related event handlers
     */
    "destroy";