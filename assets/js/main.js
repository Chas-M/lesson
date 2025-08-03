$( document ).ready(function() {

    // Utility
    function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
            value += obj[ prop ];
        }
        return value;
    }
 
    // Filters
    var filters = {};
    var searchRegex;

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        filter: function() {
            // String of associated terms
            let searchTerms = $(this).attr('class').replace('grid-item','');
            searchTerms += $(this).text().trim();
            
            console.log(searchTerms);
            return searchRegex ? searchTerms.match( searchRegex ) : true;
            // return searchRegex.test(searchTerms);
        }
    });


    // Filters
    var filters = {};
    var searchRegex;

    $('.filters').on( 'click', '.button', function( event ) {
        var $button = $( event.currentTarget );
        // get group key
        var $buttonGroup = $button.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $button.attr('data-filter');
   
        // Combine filters
        if (filterGroup == 'category') {
            // If category, show all in category
            var filterValue = $(this).attr('data-filter');
        } else {
            // If tag, show tagged within category
            var filterValue = concatValues( filters );
        }
   
        // set filter for Isotope
        $grid.isotope({ filter: filterValue });
    });

    // Current filter state
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', '.button', function( event ) {
            $buttonGroup.find('.filter-category').removeClass('is-checked');
            var $button = $( event.currentTarget );
            $button.addClass('is-checked');
        });
    });

    // Search Filters
    var $searchFilter = $('#search-filter').keyup(function() {
        searchRegex = new RegExp( $searchFilter.val(), 'i' );
        $grid.isotope();
    });


    // Reset
    $(".reset").click(function() {
        filters = {};
        $grid.isotope({
            filter: '*'
        });
    });
});



// Search Filter
// function filterGridItems() {

//     let search_filter = document.getElementById("search-filter");
//     let filter = search_filter.value.toUpperCase();
//     // let lesson_grid = document.querySelector(".lesson-grid");
//     let lesson_list_item = document.querySelectorAll(".lesson-grid > li");
//     const regexp = new RegExp(filter, 'i');

//     for (let i = 0; i < lesson_list_item.length; i++) {
//         let lesson_item = lesson_list_item[i].getElementsByTagName("a")[0];

//         // if (lesson_item.getAttribute("data-title").toUpperCase().includes(filter)) {
//         // Use regex instead
//         if (regexp.test(lesson_item.getAttribute("data-tags"))) {
//             lesson_list_item[i].classList.remove("hide");
//         } else {
//             lesson_list_item[i].classList.add("hide");
//         }
//     }
// }

// Filter by Category
function filterGridItemsByCat(category) {
    let lesson_list_item = document.querySelectorAll(".lesson-grid > li");
    let filter = category.toUpperCase();
    
    for (let i = 0; i < lesson_list_item.length; i++) {
        let lesson_item = lesson_list_item[i].getElementsByTagName("a")[0];

        if (category == "all") {
             lesson_list_item[i].classList.remove("hide");
        } else {
            if (lesson_item.getAttribute("data-category").toUpperCase().includes(filter)) {
                lesson_list_item[i].classList.remove("hide");
            } else {
                lesson_list_item[i].classList.add("hide");
            }
        }
    }
    
}

// Category Filter
function filterCategory(category) {

    let list_item_class = "filter-tag-" + category;
    let list_nav_item_list = document.querySelectorAll(".lesson-nav-tags > li");
    
    for (let i = 0; i < list_nav_item_list.length; i++) {

        if (list_nav_item_list[i].classList.contains(list_item_class)) {
             list_nav_item_list[i].classList.remove('hide');
        } else {
            list_nav_item_list[i].classList.add('hide');
        }
    }

    // filterGridItemsByCat(category);
}

// Filter by Tag
function filterGridItemsByTag(tag) {
    let lesson_list_item = document.querySelectorAll(".lesson-grid > li");
    let filter = tag.toUpperCase();

     for (let i = 0; i < lesson_list_item.length; i++) {
        let lesson_item = lesson_list_item[i].getElementsByTagName("a")[0];

        if (lesson_item.getAttribute("data-tags").toUpperCase().includes(filter)) {
            lesson_list_item[i].classList.remove("hide");
        } else {
            lesson_list_item[i].classList.add("hide");
        }
    }
}

