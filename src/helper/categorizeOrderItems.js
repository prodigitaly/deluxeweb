
/**
 * @param  {} items
 * @returns {Object} categories
 * @description
 * This function takes an array of items and returns an object with the items in each category.
 * 
 */
const categorizeByCategoryName = (items) => {
    console.log(items)
    const categories = {};
    if (items) {
        for (const item of items) {
            // console.log(item)
            const categoryName = item.name;
            // console.log(categoryName)
            if (!categories[categoryName]) {
                categories[categoryName] = [];
            }
            // console.log("he")
            // console.log(categoryName && categories[categoryName])
            // if (categoryName && categories[categoryName]) {
            //     categories[categoryName] = [];
            // } else {
            categories[categoryName].push(item.items);
            // }
        }
    }
    // console.log(Object.entries(categories))
    return Object.entries(categories);
}

export { categorizeByCategoryName }