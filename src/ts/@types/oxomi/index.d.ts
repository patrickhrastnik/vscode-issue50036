// -------------------------------------------------------
// Hauseigene Oxomi.d-File für Intellisense-Support in VS Code
// 20170130 Patrick Hrastnik
//
// hras 20170131 34805:zusätzliche Parameter und Funktionen ergänzt
// -------------------------------------------------------
// Hinweise zu dieser Datei:
// Alle Beschreibungen wurden der offiziellen Oxomi-Doku entnommen, wo nötig angepasst.
// Da das Oxomi-JavaScript nicht in unserer Hand liegt, kann nicht garantiert werden, 
//  dass in diesem d-File alle möglichen Methoden und Parameter angeführt sind.
// Falls das d-File nicht mehr auf dem aktuellsten Stand ist, bitte ergänzen und/oder korrigieren.
// -------------------------------------------------------
// Links zu einzelnen Seiten im Oxomi Portal (Stand 20170130)
//  http://oxomi.com/help/de/integration/javascript-dokumente
//  http://oxomi.com/help/de/inhalte/inhaltstypen
//  http://oxomi.com/help/de/integration/infoplay-2
//  http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/darstellung-anpassen
//  http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/verhalten-anpassen
//  http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/warenkorb-oeffnen
//  http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/exists-funktion
//  http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/paperclip-weiterleiten
// (Fortsetzung 20170801)
//  http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/paperclip-oeffnen
//  http://oxomi.com/help/de/integration/javascript-exposes (NICHT VOLLSTÄNDIG)
//  https://oxomi.com/help/de/integration/javascript-portal-page (NICHT VOLLSTÄNDIG)
// -------------------------------------------------------

// -------------------------------------------------------
// Kopfbereichsdeklaration für Exportierung
// -------------------------------------------------------

//export = oxomi;

/**
 * Globale Oxomi-Variable. Wird durch das Oxomi-Script bereitgestellt.
 */
declare var oxomi_server: any;

// -------------------------------------------------------
// Namespace- und Methodendeklaration
// -------------------------------------------------------

declare namespace oxomi {
    /**
     * Die Initialisierung wird mit der Funktion oxomi.init aufgerufen. 
     * Diese kann erst ausgeführt werden, wenn der JavaScript-Komponente vollständig geladen hat.
     */
    function init(config: OxomiInitSettings): void;
    /**
     * Mit dieser Funktion können Sie in Ihrer Webseite alle Kataloge eines Lieferanten ausgeben lassen.
     */
    function catalogs(config: OxomiCatalogsSettings): void;
    /**
     * Sie haben die Möglichkeit durch die Funktion oxomi.catalogsWithDownload die Anzeige der Dokumenten um Buttons zu erweitern. 
     * In dieser Variante erscheinen neben dem Titelbild des Dokuments die beiden Buttons "Download" und "Blätteransicht".
     * Mit Klick auf den Button "Download" kann das Dokument direkt heruntergeladen werden. 
     * Mit Klick auf den Button "Blätteransicht" öffnet sich wie gewöhnlich das Dokument im entsprechenden Portalfenster.
     */
    function catalogsWithDownload(config: OxomiCatalogsWithDownloadSettings): void;
    /**
     * Sollten Sie die Anforderung haben alle Sprachversionen eines Dokuments zusammengefasst anzeigen zu wollen, 
     * nutzen hierfür die Funktion oxomi.catalogsWithLanguages. 
     * Bei dieser Integrationsfunktion erscheinen neben dem Titelbild des Dokuments die beiden Buttons "Download" und "Blätteransicht", 
     * jeweils für die mit dem Dokument verknüpfte Sprachversion.
     */
    function catalogsWithLanguages(config: OxomiCatalogsWithLanguagesSettings): void;
    /**
     * Binden Sie eine Markenübersicht von Dokumenten mit der Funktion oxomi.catalogBrands ein. Mit Klick auf eine Marke erscheinen 
     * die entsprechenden Dokumente der jeweiligen Marke.
     */
    function catalogBrands(config: OxomiCatalogBrandsSettings): void;
    /**
     * Dokumente (Seiten) zu einem Artikel - Benutzen Sie hierfür die Funktion oxomi.itemPages. Diese Funktion ermöglicht es 
     * passende Seiten aus Katalogen, Aktionen, Preislisten usw. für einen Artikel anzuzeigen. 
     * Sollten keine passenden Seiten gefunden werden, so wird das HTML nicht verändert.
     */
    function itemPages(config: OxomiItemFunctionsSettings): void;
    /**
     * Die Funktion oxomi.itemPagesWithDownload erweitert die Anzeige der Dokumentseiten um die Buttons "Download" und "Blätteransicht".
     * Mit Klick auf den Button "Download" kann das Dokument direkt heruntergeladen werden. 
     * Mit Klick auf den Button "Blätteransicht" öffnet sich wie gewöhnlich das Dokument im entsprechenden Portalfenster.
     */
    function itemPagesWithDownload(config: OxomiItemFunctionsSettings): void;
    /**
     * Diese Funktion ermöglicht es, ein bestimmtes Dokument direkt in eine Webseite einzubetten.
     */
    function embedCatalog(config: OxomiEmbedCatalogSettings): void;
    /**
     * Die Funktion oxomi.embedCatalogWithDownload erweitert die direkte Einbettung eines Dokuments um die Buttons "Download" und "Blätteransicht".
     * Mit Klick auf den Button "Download" kann das Dokument direkt heruntergeladen werden. 
     * Mit Klick auf den Button "Blätteransicht" öffnet sich wie gewöhnlich das Dokument im entsprechenden Portalfenster.
     */
    function embedCatalogWithDownload(config: OxomiEmbedCatalogSettings): void;
    /**
     * Diese Funktion öffnet das angegebene Dokument in einem Overlay.
     */
    function openCatalog(config: OxomiOpenCatalogSettings): void;
    /**
     * Diese Funktion fragt das angegebene Dokument zum Download an.
     */
    function downloadCatalog(config: OxomiDownloadCatalogSettings): void;
    /**
     * Falls Sie in Ihrer Integration einen Button anzeigen möchten, mit dem der Paperclip 
     * direkt geöffnet werden kann, können Sie dies mit Hilfe eines Buttons/Links mit der 
     * ID oxomi-paperclip-button bewerkstelligen. 
     * Außerdem benötigt der Button noch eine onClick-Methode, welche oxomi.openPaperclip() aufruft.
     * Dieser Button funktioniert dann genau so wie der "Paperclip"-Button in der Portaloberfläche 
     * (In der rechten oberen Ecke des Portals. Wird nur angezeigt, wenn Seiten im Paperclip liegen).
     */
    function openPaperclip(): void;
    /**
     * Binden Sie eine Markenübersicht von Exposés mit der Funktion oxomi.galleryBrands ein. 
     * Mit Klick auf eine Marke erscheinen die entsprechenden Exposés der jeweiligen Marke.
     */
    function galleryBrands(config: OxomiGalleryBrandsSettings): void;
    /**
     * Exposés anzeigen - Benutzen Sie hierfür die Funktion oxomi.galleries.
     */
    function galleries(config: OxomiGalleriesSettings): void;
    /**
     * Benutzen Sie hierfür die Funktion oxomi.itemGalleries. 
     * Diese Funktion findet alle Exposés des angegeben Lieferanten und Artikels. 
     * Das erhaltene Ergebnis wird in das definierte target gerendert.
     */
    function itemGalleries(config: OxomiItemGalleriesSettings): void;
    /**
     * Mit dieser Funktion haben Sie die Möglichkeit eine Datenverfügbarkeitsabfrage umzusetzen. 
     * Die Schnittstelle liefert entsprechende Informationen darüber, 
     * ob zu einem bestimmten Artikel artikelbezogene Informationen in OXOMI hinterlegt sind.
     * Mithilfe dieser Funktion ist es im einfachsten Fall möglich informationsabhängig 
     * die Oberfläche der integrierenden Anwendung anzupassen oder alternativ dazu eine eigene Logik einzubauen.
     */
    function exists(config: OxomiExistsSettings): void;
    /**
     * Die Funktion oxomi.openPortal öffnet die Standardportalansicht als Overlay. 
     * Wird vom Browser HTML5 unterstützt, öffnet sich die Portalseite search mit Menü im dunklen Design. 
     * Ansonsten öffnet sich das Flash-Portal.
     */
    function openPortal(config: OxomiOpenPortalSettings): void;

    /**
     * Die Universal Search ist die beste Möglichkeit auf alle Inhalte eines Portals zuzugreifen. 
     * Binden Sie diese mit der Funktion [[oxomi.portalSearch]] ein. 
     * Die Standardansicht ist eine Markenübersicht. 
     * Mit Hilfe von Filtern (sowohl durch den Nutzer als auch durch die Integration festgelegt) 
     * lässt sich das Portal dann so durchsuchen, dass Dokumente, Einzelseiten, Videos, Exposés und Artikel gefunden werden können.
     */
    function portalSearch(config: OxomiPortalSearchSettings): void;

    // Noch nicht fertig übernommene Methoden
    // Dummymäßig angelegt, damit keine Syntaxfehler auftreten, die keine sind

    function itemText(config: OxomiItemFunctionsSettings): void;
    function itemImages(config: OxomiItemFunctionsSettings): void;
    function itemVideos(config: OxomiItemFunctionsSettings): void;
    function itemAttachments(config: OxomiItemFunctionsSettings): void;
    function itemMasterdata(config: OxomiItemFunctionsSettings): void;

    /**
     * gibt true zurück, falls aktuell ein Oxomi-Overlay angezeigt wird
     */
    function isOverlayVisible(): boolean;
    /**
     * Schließt ein aktuell geöffnetes Oxomi-Overlay
     */
    function hideOverlay(): void;
}

// -------------------------------------------------------
// Interface-Deklarationen für Methodenparameter etc.
// -------------------------------------------------------

/**
 * Definiert einen emptyResultHandler und einen completionHandler
 */
interface OxomiResultHandlersInterface {
    /**
     * Standardmäßig wird die JavaScript-Integration von OXOMI keine Änderung an der Seite vornehmen, 
     * wenn keine Ergebnisse für eine artikelbezogene Abfrage gefunden wurden. 
     * Wenn Sie in diesem Fall aber anders reagieren möchten (z.B. eine Meldung einblenden) 
     * können Sie die folgenden Möglichkeiten verwenden. 
     * Grundsätzlich funktioniert dies bei allen artikelbezogenen Funktionen (itemXXXX(...)).
     * 
     * Am einfachsten ist es den target Container standardmäßig ausblenden (style="display:none") 
     * und mit einer entsprechenden Meldung vorzubefüllen (z.B. Es wurden leider keine Bilder gefunden.). 
     * Anschließend können Sie bei dem entsprechenden Aufruf, z.B. itemImages, 
     * den Parameter alwaysShowTarget: true mitgeben. 
     * Dadurch wird der Container auch sichtbar gemacht, wenn nichts gefunden wurde - so wird Ihre Meldung eingeblendet.
     * 
     * Alternativ können Sie bei dem Aufruf itemXXX(...) eine Funktion unter dem Name emptyResultHandler mitgeben. 
     * Diese wird aufgerufen, wenn der Server keine passenden Daten findet. 
     * Als Parameter bekommt diese Funktion eine Map, 
     * welche args (alle Aufrufparameter), target (Name des Ziel-Containers) und json (die Serverantwort) enthält.
     * 
     * Weiterhin können Sie eine globale emptyResultHandler Funktion (s.o.) bei oxomi.init definieren, welche bei allen Aufrufen verwendet wird.
     */
    emptyResultHandler?(context: any): void;

    /**
     * Mit dem Property completionHandler haben Sie die Möglichkeit eine Funktion zu definieren, 
     * mit der Sie zum Abschluss der nochmal eingreifen können.
     * 
     * Das Javascript Objekt, das der completionHandler Funktion übergeben wird 
     * hat immer mindestens 3 Properties: 
     * target ist der jQuery Selektor des Ziel-Containers. 
     * args enthält das Objekt, womit der OXOMI-Aufruf gestartet wurde, 
     * json enthält die Original-Antwort des Servers, welche alle relevanten Informationen zum Aufruf enthält.
     */
    completionHandler?(context: any): void;
}

/**
 * Definiert den Parameter classMap.
 * @see http://oxomi.com/help/de/integration/javascript-fortgeschrittene-themen/darstellung-anpassen
 */
interface OxomiClassMapInterface {
    /**
     * Definiert die Erweiterungsregeln in Form eines JavaScript-Objekts. 
     * Objekt-Eigenschaften sind jQuery-Selektoren (z.B. #link oder .links), 
     * deren Klassen-Attribut durch die nachfolgenden Klassen erweitert wird.
     */
    classMap?: any;
}

/**
 * Gibt Parameter an, die nur für PRO Portale verfügbar sind.
 */
interface OxomiProFeaturesInterface {
    /**
     * PRO-Feature: Gibt die Sprache (als 2-buchstabigen  ISO-Code) an, nach der gefiltert werden soll.
     */
    lang?: string;
    /**
     * PRO-Feature: Gibt das Land (als 2-buchstabigen  ISO-Code) an, nach dem gefiltert werden soll.
     */
    country?: string;
}

interface OxomiInitSettings extends OxomiResultHandlersInterface, OxomiClassMapInterface {
    /**
     * Gibt die ID des Portals an, welches angesteuert werden soll.
     */
    portal: string;
    /**
     * Gibt den Login-Namen des Benutzers an, der Angemeldet werden soll. 
     * Wenn Sie OXOMI Profiles verwenden, müssen Sie hier pro Benutzer einen eindeutigen Wert übermitteln. 
     * Sollten das Portal öffentlich sein oder Sie nicht zwischen einzelnen Benutzern unterscheiden, 
     * so können Sie diesen Parameter weglassen.
     */
    user?: string;
    /**
     * Gibt eine mit Kommas getrennte Liste von Rollen an, welche dem Benutzer zugeordnet sind. 
     * Beispiel: Heizung,Elektro,A-Kunde. 
     * Sollten Sie keine Rollen verwenden oder ist das Portal öffentlich, können Sie diesen Parameter weglassen.
     */
    roles?: string;
    /**
     * Sollte das Portal nicht öffentlich sein, müssen Sie hier einen Authentifizierungs-Token angeben. 
     * Werden die Parameter user oder roles verwendet, so müssen Sie diese bei der Berechnung des Tokens berücksichtigen. 
     * Sollte das Portal öffentlich sein, können Sie diesen Parameter weglassen.
     */
    accessToken?: string;
    /**
     * Nutzen sie diesen Parameter, um die Sprache der Texte, die bei der Webseitenintegration angezeigt wird (wie zb. "Blätterversion"), anzupassen. 
     * Fehlt dieser Parameter, wird die in der Verwaltungsoberfläche eingestellte Portalsprache verwendet.
     */
    lang?: string;
    /**
     * Wird dieser Parameter mit dem Wert true belegt, werden Dokumente im neuem HTML5-Viewer geöffnet.
     */
    forceHTML5?: boolean;
    /**
     * Wird dieser Parameter mit dem Wert true belegt, werden Dokumente im Flash-Viewer geöffnet, wenn Flash im Browser aktiviert ist.
     */
    forceFlash?: boolean;
    /**
     * OXOMI nutzt die Browser History API um Nutzern zu ermöglichen, zwischen Overlays vor und zurück zu springen 
     * und um Overlays beim Neuladen einer Seite wiederherzustellen.
     * Falls Sie selbst Teile dieser API nutzen und es dadurch zu Problemen kommt, können Sie jeglichen Zugriff von OXOMI 
     * auf die History API abschalten, indem Sie diesen Parameter mit dem Wert true belegen.
     */
    disableOverlayHistory?: boolean;
    /**
     * Wenn Sie unsichtbare OXOMI-Inhalte auf ihrer Seite haben, kann dies in bestimmten Browsern zu 
     * Perfomanceproblem mit dem lazyloading von OXOMI-Bildern führen.
     * Wenn Sie diesen Parameter mit dem Wert true belegen, werden dabei unsichtbare Bilder übersprungen. 
     * Dies kann jedoch ggf. andere Probleme auslösen.
     * In der Regel sollten sie stattdessen die Integration anpassen, so dass die OXOMI-Inhalte erst geladen wird, 
     * sobald sie dem Nutzer angezeigt werden.
     */
    lazyLoadSkipInvisible?: boolean;
    /**
     * Der Infoplay-Dialog wird über ein Kontextmenü im Portal-Viewer vom Anwender aufgerufen. 
     * Der Titel des dortigen Links lässts sich durch den Parameter infoplayMenuTitle konfigurieren.
     * Wird kein Menü-Titel konfiguriert, so wird der Standardtext "Daten zu *** suchen..." angezeigt. 
     * "***" steht hierbei für die markierte Artikelnummer und wird im Titel dynamisch durch die Funktion $(selection) eingebettet.
     */
    infoplayMenuTitle?: string;
    /**
     * 	Die Mouseover Text des Warenkorbicons. 
     * Ist dieser Parameter nicht gefüllt, wird das Warenkorbicon nicht angezeigt.
     */
    catalogBasketTitle?: string;
    /**
     * Die Beschriftung des Buttons der nach dem Erstellen des Paperclips dem Nutzer angezeigt wird.
     */
    paperclipForwardTitle?: string;
    /**
     * Gibt an, ob ausführliche Protokolle in der Browser-Konsole erstellt werden sollen. 
     * Dies sollte nur bei der Fehlersuche aktiviert werden.
     */
    debug?: boolean;
    /**
     * Dient dazu, Preis und Verfügbarkeit sowie weitere Artikeldaten aus Ihrem Warenwirtschafts- oder Shop-System abzufragen
     */
    infoplayItemLookup?(infoplayObj: any, nextFunc: Function): void;
    /**
     * Wird aufgerufen, wenn weder die infoplayItemLookup noch die interne Suche von OXOMI Daten zu der gegebenen Artikelnummer findet. 
     * Dies kann dazu verwendet werden um einen generischen Platzhalterartikel für Anfragen zu erzeugen. 
     * Die Aufruf-Signatur ist hierbei gleich wie bei infoplayItemLookup. 
     * Wird die Funktion weggelassen, wird dem Benutzer eine entsprechende Meldung angezeigt.
     */
    infoplayEmptyResultHandler?(infoplayObj: any, nextFunc: Function): void;
    /**
     * Dient dazu, einen gefunden Artikel in den Warenkorb des Shop-Systems zu legen.
     */
    infoplayBasketHandler?(infoplayObj: any, nextFunc: Function): void;
    /**
     * Dient dazu, eine komplett eigene Infoplay-Funktionalität einzubauen.
     */
    infoplayItemHandler?(infoplayObj: any, nextFunc: Function): void;
    /**
     * Ermöglicht es eine Funktion zu übergeben, welche bei einem serverseitigen Fehler aufgerufen wird.
     */
    errorHandler?(obj: any): void;
    /**
     * 	Ermöglicht eine Funktion zu übergeben, welche bei einem Ausnahmefehler im Client aufgerufen wird.
     */
    failureHandler?(obj: any): void;
    /**
     * Mithilfe eines Interceptor ist es möglich in das Verhalten der Integration einzugreifen. 
     * Nachdem der JavaScript-Code die OXOMI-Schnittstelle abgefragt hat und bevor das Ergebnis 
     * in das HTML integriert wird, kann ein Interceptor-Code eingebunden werden. 
     * Der Interceptor kann zum Beispiel dazu dienen Anpassungen an den abgerufenen Daten 
     * aus der Schnittstelle an spezielle Anforderungen anzupassen.
     * 
     * Gibt eine JavaScript-Funktion an, die nach dem OXOMI-Aufruf ausgeführt wird. 
     * Als Parameter wird hierbei die Ergebnis-Datenstruktur zur Verfügung gestellt. 
     * Wird eine Funktion übergeben, welche zwei Parameter entgegen nimmt 
     * z.B. function (json, handler) so muss die Funktion selbst den handler aufrufen und das zu verarbeitende json weitergeben.
     */
    interceptor?(json: any, handler: Function): void;
    /**
     * Der Renderer ist dafür verantwortlich, die eingesetzten Templates mit Daten zu befüllen 
     * oder kann dazu verwendet werden, eine völlig eigene Template-Strategie umzusetzen.
     * Eine individuelle Renderer-Funktion kann zum Beispiel dazu verwendet werden, 
     * um OXOMI in eine Single-Page-Anwendung zu integrieren. 
     * Anstatt die abgerufenen Daten in einem HTML-Template anzuzeigen, 
     * könnte mit einer passenden Renderer-Funktion auch ein "DataTable" oder andere dynamische Widgets befüllt werden.
     * Benutzen Sie das Property renderer, um eine eigene Renderer-Funktion zu benutzen.
     * 
     * Gibt eine JavaScript-Funktion an, welche die abgerufenenen Daten auf eine individuelle Weise ausgeben kann.
     * Die Funktion muss folgende Signatur haben: function (json).
     */
    renderer?(json: any): void;
    /**
     * Der Activator ist dafür gedacht nach der Integration des Template-Schnipsels 
     * in die umgebende Anwendung neue Eventlistener auf eventuell neue HTML-Elemente zu legen, 
     * um diese mit Funktionen der entsprechenden Anwendung zu verbinden.
     * 
     * Gibt eine Funktion an, welche nach Ausführen des Template aufgerufen wird. 
     * Diese kann dazu verwendet werden, jQuery-Aktionen auf das generierte HTML zu legen.
     * Die Funktion muss folgende Signatur haben: function (_target, args, json). 
     * Hierbei ist _target das jQuery Element des Ziel-Containers. 
     * args enthält die Map, mit welcher embedVideo aufgerufen wurde und json enthält 
     * die original Antwort des Servers, welche alle relevanten Informationen enthält.
     */
    templateActivator?(_target: string, args: any, json: any): void;
    /**
     * Die Funktion die aufgerufen wird, sobald der Nutzer auf das Icon drückt. 
     * Hinterlegen sie hier eine Funktion die den Warenkorb vor der Katalogansicht einblendet.
     */
    catalogBasketHandler?(): void;
    /**
     * Die Funktion die aufgerufen wird, sobald der Nutzer auf den Paperclip-Button drückt. 
     * Die Funktion erhält als einzigen Parameter die URL des Paperclip-PDFs.
     */
    paperclipForwardHandler?(url: string): void;
}

interface OxomiCatalogsSettings extends OxomiResultHandlersInterface, OxomiProFeaturesInterface {
    /**
     * Gibt das Ziel-Element an, in welches das Dokument eingefügt wird. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-catalogs als Standard-Wert verwendet.
     */
    target?: string;
    /**
     * Gibt die Lieferantennummer an für den Fall, dass die Werksnummer nicht eindeutig ist. 
     * Hier können Sie Ihre eigenen Lieferantennummern verwenden, wenn Sie diese in der Partnerschaft zum Lieferanten gepflegt haben 
     * (siehe: Lieferantennummern).
     */
    supplierNumber?: string;
    /**
     * Hiermit könnnen Sie Lieferantennummern ausschließen.
     */
    excludedSupplierNumbers?: string;
    /**
     * Gibt einen Markennamen an, der als Auswahlkriterium verwendet wird. 
     * Beachten Sie, dass Groß-Kleinschreibung hierbei berücksichtigt wird.
     */
    brand?: string;
    /**
     * Falls Sie die ID der gewünschten Marke kennen, können Sie alternativ (zu brand) auch mit dem Parameter brandId arbeiten.
     */
    brandId?: number;
    /**
     * Nutzen Sie hier Tags als Auswahlkriterium. Vergessen Sie nicht die Prefixes "@" (für Artikelnummern) 
     * oder "#" (für Kategorien) mit anzugeben. Geben Sie mehrere Tags durch Kommas getrennt an.
     */
    tag?: string;
    /**
     * Definiert den Namen einer Kategorie als Auswahlkriterium. Um mehrere Kategorien auszuwählen benutzten Sie | als Trennzeichen.
     */
    category?: string;
    /**
     * Legt eine Sortierung fest.
     * Hinweis: Falls gruppiert wird, so wird eine andere Struktur des Ergebnisobjekts zurückgegeben.
     * Gültige Werte: priority, name, date, random
     */
    sortBy?: OxomiSortByTypeDefinition;
    /**
     * Lässt das Ergebnis gruppiert zurückgeben, falls angegeben.
     * Gültige Werte: category, brand, type, tag
     */
    groupBy?: OxomiGroupByTypeDefinition;
    /**
     * Wird dieser Parameter auf true gesetzt und der Parameter groupBy ist gesetzt, werden über dem Ergebnis Schaltflächen 
     * zur Filterung durch den Nutzer auf einzelne Gruppen angezeigt.
     */
    groupFilter?: boolean;
    /**
     * Definiert wieviel Elemente in der Ergebnisliste übersprungen werden. 
     * Soll z.B. mit dem Dritten Element begonnen werden, dann tragen Sie hier den Wert 2 ein.
     * Hinweis: Nutzen Sie diesen Parameter, um "seitenweise" durch die Ergebnismenge zu navigieren.
     */
    start?: number;
    /**
     * Gibt den Dokument-Typ an, nach dem gefiltert werden soll. Verwenden Sie hier die entsprechenden Typen-Codes. 
     * Als Trennzeichen mehrerer Dokument-Typen wird | unterstützt.
     */
    type?: OxomiDocumentTypeDefinition;
    /**	
     * Wird dieser Parameter auf true gesetzt, so werden ausschließlich eigene Dokumente angezeigt. 
     * Bei false werden ausschließlich Dokumente von anderen Anbietern angezeigt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: boolean;
    /**
     * Begrenzt die Anzahl der angezeigten Ergebnisse. 
     * Standard-Wert ist 128 (max. 1024)
     */
    limit?: number;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, um ein funktionsfähiges Sucheingabefeld mit einzubinden.
     */
    search?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit der Name des Dokuments als Beschriftung mit angezeigt wird.
     */
    showDetails?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit auch archivierte Dokumente in den Ergebnissen angezeigt werden.
     */
    includeOutdated?: boolean;
}

interface OxomiCatalogsWithDownloadSettings extends OxomiCatalogsSettings {
    /**
     * Sollten Sie die Anforderung haben eine Bestellfunktion für das entsprechende Dokument anbieten zu wollen, 
     * so können Sie den optionalen Parameter order nutzen, um auf diese Weise eine eigene Bestellfunktion zu implementieren. 
     * Der Button "Bestellen" erscheint sobald der Parameter mit einer Callback-Funktion belegt ist.
     */
    order?(catalog: string): void;
}

interface OxomiCatalogsWithLanguagesSettings extends OxomiCatalogsSettings {
    /**
     * Mithilfe des optionalen Parameter languges können Sie die Reihenfolge der angezeigten Sprachversionen bestimmen. 
     * Übergeben Sie eine Kommas separierte Liste mit den gewünschten  Sprachen-Codes. 
     * Nicht genannte Sprachen-Codes werden in der Integration ausgelassen und nicht angezeigt.
     * Achtung: Der Parameter languages darf keine Leerzeichen enthalten
     */
    languages?: string;
}

interface OxomiCatalogBrandsSettings extends OxomiCatalogsSettings, OxomiProFeaturesInterface {
    /**
     * Gibt das Ziel-Element an, in welches die Markenübersicht eingefügt wird. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-brands als Standard-Wert verwendet.
     */
    target?: string;
    /**
     * Gibt den Namen einer gewünschten Kategorie an.
     */
    brandCategory?: string;
    /**
     * Gibt einen Tag an, nach dem gefiltert werden soll.
     */
    brandTag?: string;
    /**
     * Legt die Sortierung der Markenübersicht fest. 
     * Gültige Werte: priority, name, date, random
     */
    brandSortBy?: OxomiSortByTypeDefinition;
    /**
     * Lässt das Ergebnis gruppiert zurückgeben, falls angegeben.
     * Hinweis: Falls gruppiert wird, so wird eine andere Struktur des Ergebnisobjekts zurückgegeben.
     * Gültige Werte: category, brand, type, tag
     */
    brandGroupBy?: OxomiGroupByTypeDefinition;
    /**
     * Begrenzt die Anzahl der angezeigten Ergebnisse. Standard-Wert ist 1024 (max. 2048)
     */
    brandLimit?: number;
    /**
     * Gibt an, ob zusätzlich auch ein Sucheingabefeld eingebunden wird. 
     * Das hier verwendete Template kann über den Parameter searchBarTemplate geändert werden.
     */
    brandSearch?: boolean;
    /**
     * Wird dieser Parameter auf false gesetzt, so wird die eigene Marke aus der Ergebnisliste entfernt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: boolean;
    /**
     * Ist dieser Parameter gefüllt, erscheinen im Ergebnis nur Marken, deren Markenpriorität gleich oder höher als dieser Wert ist.
     */
    brandPriorityStart?: number;
    /**
     * Ist dieser Parameter gefüllt, erscheinen im Ergebnis nur Marken, deren Markenpriorität gleich oder niedriger als dieser Wert ist.
     */
    brandPriorityEnd?: number;
    /**
     * Belegen Sie diesen Parameter mit true, wenn für die Anzeige der Dokumente 
     * das Template "Dokumente mit Download-Button" verwendet werden soll.
     */
    withDownload?: boolean;
    /**
     * Belegen Sie diesen Parameter mit true, wenn für die Anzeige das Template "Dokumente als Sprachversionen anzeigen" verwendet werden soll.
     */
    withLanguages?: boolean;

    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit der Name des Dokuments als Beschriftung mit angezeigt wird.
     * @see https://oxomi.com/help/de/integration/beispiele/function-list-catalog-brands#output
     */
    showDetails?: boolean;
}

interface OxomiItemFunctionsSettings extends OxomiResultHandlersInterface, OxomiProFeaturesInterface, OxomiClassMapInterface {
    /**
     * Gibt das Ziel-Element an, in welches die gefundenen Dokumente eingefügt werden. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-pages als Standard-Wert verwendet.
     */
    target?: string;
    /**
     * Gibt die Artikelnummer an, für die Seiten gesucht werden sollen.
     * Hinweis: Die Angabe der Artikelnummer wird als Suchanfrage ausgeführt. 
     * Dies bedeutet, dass gegebenenfalls auch Seiten ausgegeben werden, die ähnliche Nummern enthalten.
     */
    itemNumber?: string;
    /**
     * Gibt die Werksnummer des Artikels an, damit auch Dokumente des Herstellers gefunden werden können.
     */
    supplierItemNumber?: string;
    /**
     * Gibt die Lieferantennummer an für den Fall, dass die Werksnummer nicht eindeutig ist. 
     * Hier können Sie Ihre eigenen Lieferantennummern verwenden, 
     * wenn Sie diese in der Partnerschaft zum Lieferanten gepflegt haben (siehe:  Lieferantennummern).
     * @see http://oxomi.com/help/de/partnerschaft/lieferantennummern
     */
    supplierNumber?: string;
    /**
     * Gibt das Modell bzw. den Typ des Artikels an, damit auch danach gesucht werden kann.
     */
    model?: string;
    /**
     * Gibt die EAN des Artikels an, damit auch nach dieser gesucht werden kann.
     */
    ean?: string;
    /**
     * Definiert den Namen einer Kategorie als Auswahlkriterium. Um mehrere Kategorien auszuwählen benutzten Sie | als Trennzeichen.
     */
    category?: string;
    /**
     * 	Wird dieser Parameter auf true gesetzt, so werden ausschließlich eigene Dokumente angezeigt. 
     * Bei false werden ausschließlich Dokumente von anderen Anbietern angezeigt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: (boolean | undefined);
    /**
     * Formulieren Sie hier eine Suchanfrage, nach der passende Dokumentseiten gesucht werden. 
     * Die Anfrage kann auch Logik mit OR und AND beinhalten.
     */
    query?: string;
    /**
     * Nutzen Sie hier Tags als Auswahlkriterium. 
     * Vergessen Sie nicht die Prefixes "@" (für Artikelnummern) oder "#" (für Kategorien) mit anzugeben. 
     * Geben Sie mehrere Tags durch Kommas getrennt an.
     */
    tag?: string;
    /**
     * Gibt den Dokument-Typ an, nach dem gefiltert werden soll. 
     * Verwenden Sie hier die entsprechenden Typen-Codes. 
     * Als Trennzeichen mehrerer Dokument-Typen wird | unterstützt.
     */
    type?: string;
    /**
     * Begrenzt die Anzahl der angezeigten Ergebnisse. 
     * Standard-Wert ist 10
     */
    limit?: number;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit der Name des Dokuments als Beschriftung mit angezeigt wird.
     */
    showDetails?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit auch archivierte Dokumente in den Ergebnissen angezeigt werden.
     */
    includeOutdated?: true;
}

interface OxomiEmbedCatalogSettings extends OxomiClassMapInterface {
    /**
     * Gibt die ID oder den Code des Dokuments an, welches eingebettet werden soll. 
     * Existieren mehrere Kataloge mit dem gegebenen Code, wird das aktuellste verwendet.
     */
    catalog: string;
    /**
     * Gibt das Ziel-Element an, in welches das Video eingefügt wird. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-catalog als Standard-Wert verwendet.
     */
    target?: string;
    /**
     * Wird dieser Parameter auf true gesetzt, so werden ausschließlich eigene Dokumente angezeigt. 
     * Bei false werden ausschließlich Dokumente von anderen Anbietern angezeigt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: (boolean | undefined);
}

interface OxomiOpenCatalogSettings extends OxomiResultHandlersInterface {
    /**
     * Gibt die ID oder den Code des Dokuments an, welches geöffnet werden soll. 
     * Existieren mehrere Kataloge mit dem gegebenen Code, wird das aktuellste verwendet.
     */
    catalog: string;
    /**
     * Legt die Seite fest, die beim Start geöffnet werden soll.
     */
    page?: number;
    /**
     * Markiert den hier übergebenen Wert auf den Dokumentseiten.
     */
    query?: string;
    /**
     * Belegen Sie diesen Parameter mit true, wenn der Katalog in einer Einzelseiten Ansicht geöffnet werden soll.
     */
    singlePage?: boolean;
}

interface OxomiDownloadCatalogSettings {
    /**
     * Gibt die ID oder den Code des Dokuments an, welches geöffnet werden soll. 
     * Existieren mehrere Kataloge mit dem gegebenen Code, wird das aktuellste verwendet.
     */
    catalog: string;
    /**
     * Legt die Seite fest, die beim Start geöffnet werden soll.
     */
    page?: number;
}

interface OxomiGalleryBrandsSettings extends OxomiProFeaturesInterface {
    /**
     * Gibt das Ziel-Element an, in welches die Markenübersicht eingefügt wird. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-brands als Standard-Wert verwendet. 
     * Falls das Ziel-Element sich innerhalb eines scrollbaren Containers befindet, 
     * muss dieser Container unter dem Parameter scrollContainer angegeben werden.
     */
    target?: string;
    /**
     * Gibt den Namen einer gewünschten Kategorie an.
     */
    brandCategory?: string;
    /**
     * Gibt einen Tag an, nach dem gefiltert werden soll.
     */
    brandTag?: string;
    /**
     * Legt die Sortierung der Markenübersicht fest.
     */
    brandSortBy?: OxomiSortByTypeDefinition;
    /**
     * Lässt das Ergebnis gruppiert zurückgeben, falls angegeben.
     * Hinweis: Falls gruppiert wird, so wird eine andere Struktur des Ergebnisobjekts zurückgegeben.
     */
    brandGroupBy?: OxomiGroupByTypeDefinition;
    /**
     * Begrenzt die Anzahl der angezeigten Ergebnisse. Standard-Wert ist 1024 (max. 2048)
     */
    brandLimit?: number;
    /**
     * Gibt an, ob zusätzlich auch ein Sucheingabefeld eingebunden wird.
     * Das hier verwendete Template kann über den Parameter searchBarTemplate geändert werden.
     */
    brandSearch?: string;
    /**
     * Wird dieser Parameter auf false gesetzt, so wird die eigene Marke aus der Ergebnisliste entfernt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: boolean;
    /**
     * Ist dieser Parameter gefüllt, erscheinen im Ergebnis nur Marken, deren Markenpriorität gleich oder höher als dieser Wert ist.
     */
    brandPriorityStart?: number;
    /**
     * Ist dieser Parameter gefüllt, erscheinen im Ergebnis nur Marken, deren Markenpriorität gleich oder niedriger als dieser Wert ist.
     */
    brandPriorityEnd?: number;
}

interface OxomiGalleriesSettings extends OxomiProFeaturesInterface {
    /**
     * Gibt das Ziel-Element an, in welches die Exposés eingefügt werden. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-galleries als Standard-Wert verwendet. 
     * Falls das Ziel-Element sich innerhalb eines scrollbaren Containers befindet, 
     * muss dieser Container unter dem Parameter scrollContainer angegeben werden.
     */
    target?: string;
    /**
     * Gibt die Lieferantennummer an für den Fall, dass die Werksnummer nicht eindeutig ist. 
     * Hier können Sie Ihre eigenen Lieferantennummern verwenden, 
     * wenn Sie diese in der Partnerschaft zum Lieferanten gepflegt haben.
     * @see http://oxomi.com/help/de/partnerschaft/lieferantennummern
     */
    supplierNumber?: string;
    /**
     * Hiermit könnnen Sie Lieferantennummern ausschließen.
     */
    excludedSupplierNumbers?: string;
    /**
     * Gibt einen Markennamen an, der als Auswahlkriterium verwendet wird. 
     * Beachten Sie, dass Groß-Kleinschreibung hierbei berücksichtigt wird.
     * Hinweis: Falls Sie die ID der gewünschten Marke kennen, können Sie alternativ auch mit dem Parameter brandId arbeiten.
     */
    brand?: string;
    /**
     * Gibt einen Tag an, nach dem gefiltert werden soll. Geben Sie mehrere Tags durch Kommas getrennt an.
     */
    tag?: string;
    /**
     * Legt eine Sortierung fest.
     */
    sortBy?: OxomiSortByTypeDefinition;
    /**
     * Lässt das Ergebnis gruppiert zurückgeben, falls angegeben.
     * Hinweis: Falls gruppiert wird, so wird eine andere Struktur des Ergebnisobjekts zurückgegeben.
     */
    groupBy?: OxomiGroupByTypeDefinition;
    /**
     * Wird dieser Parameter auf true gesetzt und der Parameter groupBy ist gesetzt, 
     * werden über dem Ergebnis Schaltflächen zur Filterung durch den Nutzer auf einzelne Gruppen angezeigt.
     */
    groupFilter?: boolean;
    /**
     * Definiert wieviel Elemente in der Ergebnisliste übersprungen werden. 
     * Soll z.B. mit dem Dritten Element begonnen werden, dann tragen Sie hier den Wert 2 ein.
     * Hinweis: Nutzen Sie diesen Parameter, um "seitenweise" durch die Ergebnismenge zu navigieren.
     */
    start?: number;
    /**
     * Begrenzt die Anzahl der angezeigten Ergebnisse. Standard-Wert ist 128 (max. 1024)
     */
    limit?: number;
    /**
     * Gibt den Dokument-Typ an, nach dem gefiltert werden soll. 
     * Verwenden Sie hier die entsprechenden Typen-Codes. 
     * Als Trennzeichen mehrerer Dokument-Typen wird | unterstützt.
     */
    type?: string;
    /**
     * Definiert den Namen einer Kategorie als Auswahlkriterium. 
     * Um mehrere Kategorien auszuwählen benutzten Sie | als Trennzeichen.
     */
    category?: string;
    /**
     * Wird dieser Parameter auf true gesetzt, so werden ausschließlich eigene Exposés angezeigt. 
     * Bei false werden ausschließlich Exposés von anderen Anbietern angezeigt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, um ein funktionsfähiges Sucheingabefeld mit einzubinden.
     */
    search?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit der Name des Exposés als Beschriftung mit angezeigt wird.
     */
    showDetails?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit auch archivierte Exposés in den Ergebnissen angezeigt werden.
     */
    includeOutdated?: boolean;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit nur archivierte Exposés in den Ergebnissen angezeigt werden. 
     * Dieser Parameter überschreibt den Parameter includeOutdated.
     */
    onlyOutdated?: boolean;
}

interface OxomiExistsSettings {
    /**
     * Eigene Artikelnummer
     * Entspricht [[OxomiItemFunctionsSettings.itemNumber]]
     */
    item?: string;
    /**
     * Artikelnummer
     * Entspricht [[OxomiItemFunctionsSettings.supplierItemNumber]]
     */
    itemNumber?: string;
    /**
     * Eine Lieferantennummer.
     * Sollten Sie selbst der Lieferant sein oder selbst Artikelinformationen in OXOMI eingespielt haben, 
     * so belegen Sie diesen Parameter mit - um sich auf diese Artikel zu beziehen.
     */
    supplierNumber?: string;
    /**
     * Gibt das Modell bzw. den Typ des Artikels an, damit in Dokumenten auch danach gesucht werden kann.
     */
    model?: string;
    /**
     * Gibt die EAN des Artikels an, damit in Dokumenten auch nach dieser gesucht werden kann.
     */
    ean?: string;
    /**
     * Schränkt die zu überprüfenden Inhalte ein. Geben Sie hierzu die gewünschten Inhaltstypen als kommagetrente Liste an.
     */
    contentType?: OxomiExistsContentTypeTypeDefinition;
    /**
     * Gibt die Id eines Inhaltselement an. Wenn dieser angegeben wird, wird geprüft, ob es ein Dokument/Video/Exposé mit dieser Id gibt.
     */
    id?: string;
    /**
     * jQuery-Selektor des Ziel-Elements für Bilddaten
     */
    imagesTarget?: string;
    /**
     * jQuery-Selektor des Ziel-Elements für Dokumentseiten
     */
    pagesTarget?: string;
    /**
     * jQuery-Selektor des Ziel-Elements für Zusatzdokumente
     */
    attachmentsTarget?: string;
    /**
     * jQuery-Selektor des Ziel-Elements für Langtexte
     */
    textTarget?: string;
    /**
     * jQuery-Selektor des Ziel-Elements für Videos
     */
    videosTarget?: string;
    /**
     * jQuery-Selektordes Ziel-Elements für Exposés
     */
    galleriesTarget?: string;
    /**
     * Die HTML-Klasse, welche die Funktion entfernt, falls Daten vorhanden sind.
     * Default: disabled
     */
    classToRemove?: string;
    /**
     * Funktion, die mit den gelieferten Informationen als Parameter (JSON-Objekt) aufgerufen wird
     */
    callback?(json: any): void;
}

interface OxomiOpenPortalSettings {
    /**
     * Belegen sie diesen Parameter mit true um oben eine Menüleiste einzublenden.
     */
    withMenu?: boolean;
    /**
     * Belegen sie diesen Parameter mit true, öffnet sich immer das Flash-Portal.
     */
    forceFlash?: boolean;
}

interface OxomiPortalSearchSettings extends OxomiResultHandlersInterface, OxomiProFeaturesInterface {
    /**
     * Gibt das Ziel-Element an, in welches die Markenübersicht/Suchergebnisse eingefügt wird. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-portalSearch als Standard-Wert verwendet. 
     * Falls das Ziel-Element sich innerhalb eines scrollbaren Containers befindet, 
     * muss dieser Container unter dem Parameter scrollContainer angegeben werden.
     */
    target?: string;
    /**
     * Gibt das Element an, in welches die Suchleiste eingefügt wird. 
     * Wird dieser Parameter nicht angegeben, so wird #oxomi-searchBar als Standard-Wert verwendet.
     */
    input?: string;
    /**
     * Gibt das Element an, in welches die Filterliste eingefügt wird. 
     * Diese Filterliste ist optional.
     */
    filterBox?: string;
    /**
     * Falls sich das target-Element in einem scrollbaren Element befindet, 
     * muss der Selektor für diesen Scroll-Container hier angegeben werden, 
     * damit das Lazy-Loading der Bilder funktioniert.
     */
    scrollContainer?: string;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit Topmarken in der Markenübersicht abgegrenzt werden. 
     * Dann müssen 2 weitere Parameter mit angegeben werden: topBrandsLabel und brandsLabel
     * @requires topBrandsLabel, brandsLabel
     */
    topBrands?: true;
    /**
     * Muss angegeben werden, wenn topBrands auf true eingestellt ist. 
     * Überschrift für Topmarken
     * @requires topBrands
     */
    topBrandsLabel?: string;
    /**
     * Muss angegeben werden, wenn topBrands auf true eingestellt ist. 
     * Überschrift für restliche Marken
     * @requires topBrands
     */
    brandsLabel?: string;
    /**
     * 	Belegen Sie diesen Parameter mit dem Wert true, damit der Name der Inhalte als Beschriftung mit angezeigt wird.
     */
    showDetails?: true;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit Ergebnisse nach unten verschoben werden, 
     * sobald die Suchvorschläge ausklappen. 
     * Dies ist für den Fall gedacht, dass Sie die Ergebnisse direkt unter der Suchzeile platziert haben.
     */
    animate?: true;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit Suchbegriffe in den Suchvorschlägen hervorgehoben werden.
     */
    highlight?: true;
    /**
     * Mithilfe dieses Parameters lassen sich für den ersten Aufruf 
     * bereits ausgewählte Filter in das Eingabefeld setzen. 
     * Der String, der hierfür angegeben werden muss, 
     * finden Sie indem Sie die gewünschten Filter 
     * in der OXOMI-Portaloberfläche "oxomi.com/p/xxxxxx/search" auswählen 
     * und den Parameter aus der automatisch geänderten URL kopieren.
     */
    selection?: string;
    /**
     * Wenn nicht alle Filtergruppen in der Filterliste angezeigt werden sollen, geben Sie hier an welche sichtbar sein sollen.
     * Um beispielsweise nur Marken und Tags anzuzeigen geben Sie als Wert "brands,tags" mit. 
     * Wird dieser Parameter nicht mitgegeben, werden alle Filtergruppen angezeigt.
     */
    filterBoxGroups?: OxomiFilterBoxGroupsTypeDefinition;
    /**
     * Hier können Sie eine Verzögerung in Millisekunden zwischen der Eingabe des Nutzers 
     * und dem Ausklappen der Suchvorschläge einstellen. 
     * Standardwert ist 0. 
     * In sehr großen Portalen kann dieser Wert z.B. auf 200 gestellt werden, um die Performance zu verbessern.
     */
    typeDelay?: number;
    /**
     * Begrenzt die Anzahl der angezeigten Marken. Standard-Wert ist 1024 (max. 5000)
     * @default 1024
     */
    brandLimit?: number;
    /**
     * Begrenzt die Anzahl der angezeigten Inhalte. Standard-Wert ist 256 (max. 5000)
     * @default 256
     */
    contentLimit?: number;
    /**
     * Begrenzt die Anzahl der angezeigten Artikel. Standard-Wert ist 64 (max. 5000)
     * @default 64
     */
    itemLimit?: number;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit beim Klick auf gefundene Artikel 
     * direkt Infoplay aufgerufen wird, statt dem Artikeldatenblatt
     */
    infoplayOnArticleSelect?: true;
    /**
     * Belegen Sie diesen Parameter mit dem Wert true, damit Download und 
     * (wenn Bestellfunktion über Parameter order angegeben) Bestell Buttons 
     * für Dokumente analog zur Integration "Dokumente mit Download-Button" angezeigt werden.
     * @see https://oxomi.com/help/de/integration/javascript-dokumente#dokumente-mit-download-button
     */
    withDownload?: true;
    /**
     * Belegen Sie diesen Parameter mit einer Javascript Funktion in Verbindung mit dem Parameter withDownload 
     * um den Button "Bestellen" bei Dokumenten anzeigen zu lassen. 
     * Auf diese Weise können Sie eine eigene Bestellmöglichkeit implementieren. 
     * Weitere Informationen zum Aufbau des Bestell-Callbacks finden Sie im Hilfetext zur Integration "Dokumente mit Download-Button".
     * @see https://oxomi.com/help/de/integration/javascript-dokumente#dokumente-mit-download-button
     */
    order?: (catalog: any) => void;
    /**
     * Zeigt Ankerlinks über den Suchergebnissen an mit denen zu einzelnen Abschnitten des Suchergebnisses gesprungen werden kann. 
     * Außerdem wir ein ein Pfeil in der rechten unteren Ecke des Browsers angezeigt mit dem wieder nach oben gesprungen werden kann.
     * @description
     * Sie können die Position, an die bei Klick auf den Pfeil nach oben gesprungen wird verändern, um z.B. noch die Suchleiste einzublenden. 
     * Dazu geben Sie der CSS-Klasse oxomi-offsetted-anchor-top ein top Attribut, z.B. top: -150px; um 150 Pixel weiter nach oben zu springen.
     * Analog dazu können Sie, falls Sie z.B. eine fixierte Navigationsleiste haben, 
     * für die Klasse oxomi-offsetted-anchor ein top Attribut setzten um jeden Anchor um die Höhe der Navigationsleiste zu verschieben.
     */
    showAnchorLinks?: boolean;
    /**
     * Eine Lieferantennummer auf die gefiltert werden soll.
     */
    supplierNumber?: string;
    /**
     * Gibt einen Markennamen an, der als Auswahlkriterium verwendet wird. Beachten Sie, dass Groß-Kleinschreibung hierbei berücksichtigt wird.
     * Hinweis: Falls Sie die ID der gewünschten Marke kennen, können Sie alternativ auch mit dem Parameter brandId arbeiten.
     */
    brand?: string;
    /**
     * Tag auf den gefiltert werden soll. Geben Sie mehrere Tags durch Kommas getrennt an.
     */
    tag?: string;
    /**
     * Inhaltstyp auf den gefiltert werden soll.
     */
    type?: OxomiDocumentTypeDefinition;
    /**
     * Wenn nicht alle Medientypen angezeigt werden sollen, geben Sie hier an welche sichtbar sein sollen.
     * @description
     * Um beispielsweise nur Kataloge und Videos anzuzeigen geben Sie als Wert "catalogs,videos" mit. 
     * Wird dieser Parameter nicht mitgegeben, werden alle 4 Inhaltstypen angezeigt.
     */
    contentType?: OxomiContentTypeTypeDefinition;
    /**
     * Wird dieser Parameter auf true gesetzt, so werden ausschließlich eigene Inhalte angezeigt. 
     * Bei false werden ausschließlich Inhalte von anderen Anbietern angezeigt. 
     * Um keine Filterung vorzunehmen, müssen Sie den Filter leer lassen.
     */
    own?: boolean;
    /**
     * Öffnet die Suche mit vorausgefüllter Suche.
     */
    query?: string;
    /**
     * Falls true, werden archivierte Inhalte auch angezeigt. 
     * Dieser Filter kann vom Nutzer nur geändert werden, wenn die Filterbox angezeigt wird.
     */
    includeOutdated?: true;
    /**
     * Falls true, werden nur archivierte Inhalte und Artikel in den Ergebnissen angezeigt. 
     * Dieser Parameter überschreibt den Parameter [[includeOutdated]] und kann vom Nutzer nicht geändert werden.
     */
    onlyOutdated?: true;
}

// -------------------------------------------------------
// Typen-Deklarationen für Methodenparameter etc.
// -------------------------------------------------------

type OxomiSortByTypeDefinition =
    /**
     * Standard-Sortierung nach Priorität, kleinste Prioritäts-Zahl wird zuerst gezeigt. 
     * Bei gleicher Priorität wird alphanumerisch sortiert. Dies ist der verwendete Standard-Wert.
     */
    "priority" |
    /**
     * Sortiert alphanumerisch nach dem Namen.
     */
    "name" |
    /**
     * Sortierung nach Datum, neuste Objekte werden zuerst gezeigt.
     */
    "date" |
    /**
     * Das Ergebnis ist zufällig gemischt.
     */
    "random";

type OxomiGroupByTypeDefinition =
    /**
     * Gruppiert nach Kategorie
     */
    "category" |
    /**
     * Gruppiert nach Marke
     */
    "brand" |
    /**
     * Gruppiert nach Typ
     */
    "type" |
    /**
     * Gruppiert nach Tags
     */
    "tag";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Dokumenten auf. 
 * Für die Zuweisung kann [[DokumentTyp]] verwendet werden.
 * @see https://oxomi.com/help/de/inhalte/inhaltstypen
 * @see [[DokumentTyp]]
 */
type OxomiDocumentTypeDefinition =
    /**
     * Aktion - Aktionen sind zeitlich begrenzte Dokumente welche mit Preisen versehen sind. 
     * Für Sie gelten die gleichen Vorgaben wie bei Preislisten.
     */
    "promotion" |
    /**
     * Katalog - Der Katalog ist eine Übersicht über die Produkte eines Anbieters. 
     * Ein Katalog kann Preise enthalten, jedoch nur Preise, welche allgemein bekannt sein dürfen.
     */
    "catalog" |
    /**
     * Preisliste - Die Preisliste enthält Preisinformationen zu Produkten. 
     * Dies können sowohl Händlerpreise, als auch Bruttolistenpreise sein. 
     * Einen Unterscheidung findet über die Handelsstufe statt.
     */
    "pricelist" |
    /**
     * Ersatzteile - Ersatzteil-Dokumente sind spezielle Kataloge, welche vornehmlich Ersatzteile enthalten. 
     * Sofern es zu dem Katalog eine Ersatzteilpreisliste gibt, ist diese als Preisliste zu klassifizieren.
     */
    "spareparts" |
    /**
     * Prospekt - Ein Prospekt bietet Informationen über einen Teilbereich des Sortiments. 
     * Ein Prospekt kann Preise enthalten, jedoch nur Preise, welche allgemein bekannt sein dürfen.
     */
    "flyer" |
    /**
     * Handbuch - Handbücher bieten weiterführende Informationen zur Verwendung von Produkten. 
     * Hierunter fallen auch Betriebsanleitungen und Montageanleitungen.
     */
    "manual" |
    /**
     * Datenblatt - Datenblätter umfassen technische Details zu Produkten. 
     * Dabei kann es sich um einzelne Datenblätter (je Produkt) oder auch um Sammlungen von Datenblättern (mehrere Produkte) handeln. 
     * Hierunter fallen: Sicherheitsdatenblätter, Werkszeugnisse.
     */
    "datasheet" |
    /**
     * Zertifikat - Zertifikate sind Dokumente, die geprüfte Eigenschaften eines oder mehrerer Produkte dokumentieren. 
     * Hierzu zählen unter anderem: Zulassungen, Gütesiegel, Normen.
     */
    "certificate" |
    /**
     * Werkszeugnis - Bescheinigung, in welcher der Hersteller bestätigt, dass die gelieferten Erzeugnisse den Vereinbarungen 
     * bei der Bestellung entsprechen, mit Angabe von Prüfergebnissen auf der Grundlage nichtspezifischer Prüfung.
     */
    "factory_certificate" |
    /**
     * Sicherheitsdatenblatt - Sicherheitsdatenblätter (auch: Material Safety Data Sheets) bestehen hauptsächlich aus Sicherheitshinweisen 
     * für den Umgang mit gefährlichen Substanzen. 
     * Sicherheitsdatenblätter müssen vom Inverkehrbringer, Einführer und Hersteller von Gefahrstoffen zur Verfügung gestellt werden.
     */
    "material_safety_data_sheet" |
    /**
     * Anleitung - Anleitungen umfassen Betriebs- und Serviceanleitungen.
     */
    "instruction" |
    /**
     * Leistungserklärung - Mit der Leistungserklärung gemäß Bauprodukte-Verordnung (BauPVO) übernimmt der Hersteller 
     * die Verantwortung für die Übereinstimmung des Bauprodukts mit der erklärten Leistung in Bezug auf dessen wesentliche Merkmale.
     */
    "declaration_of_performance" |
    /**
     * Präsentation - Enthält eine Präsentation oder einen Foliensatz zu einem Produkt oder Thema.
     */
    "presentation" |
    /**
     * Sonstiges - Verwenden Sie diesen Typ für alle Dokumente, für die kein anderer Typ passend erscheint.
     */
    "other" | 
    /**
     * Alles außer Aktionen (Stand 20180222)
     */
    "catalog,pricelist,spareparts,flyer,manual,datasheet,certificate,factory_certificate,material_safety_data_sheet,instruction,declaration_of_performance,presentation,other,product,usage,training,image,webtv,product_world,ambience,showroom,event,tradefair,explosion_view,campaign";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Bildern auf.
 * @see https://oxomi.com/help/de/inhalte/inhaltstypen
 */
type OxomiImageTypeDefinition =
    /**
     * Produktabbildung - Zeigt das referenzierte Produkt. Dies ist der Standard-Typ für Bilder.
     */
    "product" |
    /**
     * Anwendungsabbildung - Zeigt eine Anwendungsmöglichkeit des referenzierten Produkts.
     */
    "usage" |
    /**
     * Strichzeichnung - Schematische Darstellung des referenzierten Produkts.
     */
    "drawing" |
    /**
     * Vermaßte Strichzeichnung - Schematische Darstellung des referenzierten Produkts mit Größenangaben.
     */
    "measured" |
    /**
     * Schaltplan - Grafische Darstellung der Schaltung eines elektrischen Geräts.
     */
    "circuit_layout" |
    /** 
     * Logo - Logo einer Produktlinie oder eines Produktes
     */
    "logo" |
    /**
     * Piktogramm - Piktogramm zur Hervorhebung einer Produkteigenschaft.
     */
    "icon" |
    /**
     * Explosionszeichnung - Grafische Darstellung der Einzelteile eines Produkts.
     */
    "explosion_drawing" |
    /**
     * Energielabel - Kennzeichnung der Energieeffizienz.
     */
    "energy_label" |
    /**
     * Umweltlabel - Gütezeichen für umweltfreundliche Produkte.
     */
    "environment_label";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Dateien auf.
 */
type OxomiFileTypeDefinition =
    /**
     * Sonstige Dateien, für die kein passender Typ verfügbar ist.
     */
    "other" |
    /**
     * Datenblatt - Ein Datenblatt für einen oder mehrere Artikel.
     */
    "datasheet" |
    /**
     * Sicherheitsdatenblatt - Ein Sicherheitsdatenblatt für einen oder mehrere Artikel.
     */
    "msds" |
    /**
     * Anleitung - Eine Anleitung oder Unterstützung zur Verwendung eines oder mehrerer Artikel.
     */
    "instruction" |
    /**
     * Handbuch - Ein Handbuch für einen oder mehrere Artikel.
     */
    "manual" |
    /**
     * Zertifikat - Ein Zertifikat für den zugeordneten Artikel.
     */
    "certificate" |
    /**
     * CAD-Daten - CAD-Daten für den zugeordneten Artikel.
     */
    "cad" |
    /**
     * BIM (Revit Family) - BIM Planungsdaten für Autodesk Revit.
     */
    "bim_rfa" |
    /**
     * Zulassung - Zulassung für den zugeordneten Artikel.
     */
    "homologation" |
    /**
     * Planungshilfe - Planungshilfe für den zugeordneten Artikel.
     */
    "planning" |
    /**
     * Prospekt - Prospekt für den zugeordneten Artikel.
     */
    "brochure" |
    /**
     * Technisches Merkblatt - Technisches Merkblatt für den zugeordneten Artikel.
     */
    "bulletin" |
    /**
     * Werkszeugnis - Werkszeugnis für den zugeordneten Artikel.
     */
    "factory_certification" |
    /**
     * Leistungserklärung - Leistungserklärung für den zugeordneten Artikel.
     */
    "declaration_of_performance" |
    /**
     * Schaltbild - Grafische Darstellung einer elektrischen Schaltung.
     */
    "circuit_diagram";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Videos auf. 
 */
type OxomiVideoTypeDefinition =
    /**
     * Produktvideo - Zeigt das referenzierte Produkt. Dies ist der Standard-Typ für Videos.
     */
    "product" |
    /**
     * Anwendungsvideo - Zeigt eine Anwendungsmöglichkeit des referenzierten Produkts.
     */
    "usage" |
    /**
     * Schulungsvideo - Erklärt den Umgang oder die Verwendung eines oder mehrerer Produkte.
     */
    "training" |
    /**
     * Imagevideo - Präsentiert das Unternehmen, eine Marke oder einen Fachbereich.
     */
    "image" |
    /**
     * WebTV - Ein journalistischer Beitrag mit Brancheninformationen.
     */
    "webtv";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Langtexten auf.
 */
type OxomiLongTextTypeDefinition =
    /**
     * Produktbeschreibung - Beschreibungstext für das referenzierte Produkt.
     */
    "description" |
    /**
     * Ausschreibungstext - Text, der für Ausschreibungen verwendet werden kann.
     */
    "tender" |
    /**
     * Sonstiges - Verwenden Sie diesen Typ für alle anderen Langtexte.
     */
    "other";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Exposés auf.
 */
type OxomiExposeTypeDefinition =
    /**
     * Produktwelt - Zeigt ein Produkt auf einem oder mehreren Bildern.
     */
    "product_world" |
    /**
     * Milieubild - Zeigt ein oder mehrere Produkte in einem Beispielszenario.
     */
    "ambience" |
    /**
     * Ausstellung - Enthält ein oder mehrere Bilder einer Ausstellung.
     */
    "showroom" |
    /**
     * Veranstaltung - Enthält Bilder und Impressionen einer Kundenveranstaltung.
     */
    "event" |
    /**
     * Messe - Zeigt Bilder des Messestandes oder Impressionen einer Messe.
     */
    "fairtrade" |
    /**
     * Explosionszeichnung - Grafische Darstellung der Einzelteile eines Produkts.
     */
    "explosion_view";

/**
 * Die folgende Liste zählt alle aktuellen Typen von Anzeigen auf.
 */
type OxomiDisplayTypeDefinition =
    /**
     * Leaderboard - Eine Leaderboard-Anzeige hat eine Abmessung von 728x90 Pixel
     */
    "leaderboard" |
    /**
     * Medium Rectangle - Eine Medium-Rectangle-Anzeige hat eine Abmessung von 300x250 Pixel
     */
    "medium-rectangle" |
    /**
     * Slider - Eine Slider-Anzeige hat eine Abmessung von 600x400 Pixel
     */
    "slider" |
    /**
     * Vollbild - Eine Vollbild-Anzeige hat eine Abmessung von 1920x1080 Pixel
     */
    "fullscreen";

/**
 * Die folgende Liste zählt alle möglichen Filterbox-Gruppierungen auf.
 */
type OxomiFilterBoxGroupsTypeDefinition = 
    /**
     * Marken
     */
    "brands" |
    /**
     * Kategorien
     */ 
    "categories" |
    /**
     * Inhaltstypen
     */
    "types" | 
    /**
     * Tags
     */
    "tags";

type OxomiContentTypeTypeDefinition = 
    /**
     * Kataloge
     */
    "catalogs" | 
    /**
     * Videos
     */
    "videos" | 
    /**
     * Exposees
     */
    "galleries" | 
    /**
     * Artikel
     */
    "items";


type OxomiExistsContentTypeTypeDefinition = 
    "catalog" |
    "video" |
    "gallery" |
    "image" |
    "attachment" |
    "text";

type OxomiItemGalleriesSettings = any;