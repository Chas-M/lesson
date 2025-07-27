// Search Filter
function filterGridItems() {

    let search_filter = document.getElementById("search-filter");
    let filter = search_filter.value.toUpperCase();
    // let lesson_grid = document.querySelector(".lesson-grid");
    let lesson_list_item = document.querySelectorAll(".lesson-grid > li");
    const regexp = new RegExp(filter, 'i');

    for (let i = 0; i < lesson_list_item.length; i++) {
        let lesson_item = lesson_list_item[i].getElementsByTagName("a")[0];

        // if (lesson_item.getAttribute("data-title").toUpperCase().includes(filter)) {
        // Use regex instead
        if (regexp.test(lesson_item.getAttribute("data-tags"))) {
            lesson_list_item[i].classList.remove("hide");
        } else {
            lesson_list_item[i].classList.add("hide");
        }
    }
}

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

    filterGridItemsByCat(category);
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

