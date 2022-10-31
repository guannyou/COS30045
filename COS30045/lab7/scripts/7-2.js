function init() {

    var w = 300;
    var h = 300;

    var dataset = [14, 5, 26, 23, 9, 20, 12, 17, 10, 4];

    var outerRadius = w / 2;
    var innerRadius = 0;
    
    var arc = d3.arc()
                .outerRadius(outerRadius)
                .innerRadius(innerRadius);

    var pie = d3.pie();

    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    var color = d3.scaleOrdinal(d3.schemePaired);  

    var arcs = svg.selectAll("g.arc")
                .data(pie(dataset))
                .enter()
                .append("g")
                .attr("class", "arc")
                .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

    arcs.append("path")
        .attr("fill", function(d, i) {
                return color(i);
        })
        .attr("d", function(d, i) {
                return arc(d, i);
        })	

    arcs.append("text")
        .text(function(d) {
            return d.value;
        })
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
        });
}

window.onload = init;