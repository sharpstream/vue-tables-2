module.exports = function () {
    return {
        alwaysShowPerPageSelect: false,
        hidePerPageSelect: false,
        dateColumns: [],
        listColumns: {},
        datepickerOptions: {
            locale: {
                cancelLabel: "Clear"
            }
        },
        datepickerPerColumnOptions: {},
        initialPage: 1,
        perPage: 10,
        perPageValues: [10, 25, 50, 100],
        groupBy: false,
        collapseGroups: false,
        destroyEventBus: false,
        sendEmptyFilters: false,
        params: {},
        sortable: true,
        filterable: true,
        groupMeta: [],
        initFilters: {},
        sendInitialRequest: true,
        customFilters: [],
        templates: {},
        debounce: 250,
        dateFormat: "DD/MM/YYYY",
        dateFormatPerColumn: {},
        toMomentFormat: false,
        skin: false,
        columnsDisplay: {},
        columnsDropdown: false,
        texts: {
            count:
                "Showing {from} to {to} of {count} records|{count} records|1 record",
            first: "First",
            last: "Last",
            filter: "Filter:",
            filterPlaceholder: "Search query",
            limit: "Records:",
            page: "Page:",
            noResults: "No matching records",
            noRequest:"Please select at least one filter to fetch results",
            filterBy: "Filter by {column}",
            loading: "Loading...",
            defaultOption: "Select {column}",
            columns: "Columns",
            loadingError: "Error loading results"
        },
        sortIcon: {
            is: "glyphicon-sort",
            base: "glyphicon",
            up: "glyphicon-chevron-up",
            down: "glyphicon-chevron-down"
        },
        addSortedClassToCells: false,
        sortingAlgorithm(data, column) {
            return data.sort(this.getSortFn(column));
        },
        filterAlgorithm: {},
        customSorting: {},
        multiSorting: {},
        clientMultiSorting: true,
        serverMultiSorting: false,
        filterByColumn: false,
        highlightMatches: false,
        orderBy: false,
        descOrderColumns: [],
        footerHeadings: false,
        headings: {},
        headingsTooltips: {},
        stickyHeader: false,
        stickHeaderBackground:'white',
        selectable: {
            selectAllMode: 'all',
            programmatic: false
        },
        pagination: {
            show: true,
            dropdown: false,
            virtual: false,
            chunk: 10,
            edge: false,
            align: "center",
            nav: "fixed"
        },
        childRow: false,
        childRowTogglerFirst: true,
        disabledChildRows: false,
        showChildRowToggler: true,
        uniqueKey: "id",
        requestFunction: false,
        useDrawCounter: false,
        requestAdapter: function (data) {
            return data;
        },
        responseAdapter: function (resp) {
            var data = this.getResponseData(resp);

            return {
                data: data.data,
                count: data.count
            };
        },
        requestKeys: {
            query: "query",
            limit: "limit",
            orderBy: "orderBy",
            ascending: "ascending",
            page: "page",
            byColumn: "byColumn",
            draw: "draw"
        },
        rowClassCallback: false,
        preserveState: false,
        saveState: false,
        storage: "local",
        columnsClasses: {},
        summary: false,
        caption: false,
        cellClasses: {},
        visibleColumns: false,
        hiddenColumns: false,
        resizableColumns: true,
        editableColumns: [],
        tabbable: true,
        componentsOverride: {}
    };
};
