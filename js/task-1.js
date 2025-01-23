const UlCategories = document.querySelectorAll('.item');
console.log("Number of categories: " + UlCategories.length);

UlCategories.forEach(function(item) {
    const H2Content = item.querySelector("h2").textContent;
    const NumberLi = item.querySelectorAll("li").length;

    console.log(`Category: ${H2Content}`);
    console.log(`Elements: ${NumberLi}`);
});