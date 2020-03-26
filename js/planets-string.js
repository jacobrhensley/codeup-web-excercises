(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString);
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsBr = planetsArray.join('<br>');
    console.log(planetsBr);


    var prepUl = planetsArray;

    var planetsUl = prepUl.join('</li><li>');

    var completePlanets = ('<ul><li>' + planetsUl + '</li></ul>');

    document.write(completePlanets);

    console.log(completePlanets);

    //Douglas' extra example of how we could create the ul without using the .join method but instead using a loop
    var ulList = "";

        ["a", "b", "c"].forEach(function(item){
        ulList += '<li>' + item + '</li>';
    });

    ulList = '<ul>' + ulList + '</ul>';

    console.log(ulList);
})();