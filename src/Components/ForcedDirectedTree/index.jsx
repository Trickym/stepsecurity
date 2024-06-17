import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ForceDirectedTree = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !data.nodes || !data.links) return;

    const width = 800;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove(); // Clear previous elements

    // Define arrow marker for the links
    svg
      .append("defs")
      .selectAll("marker")
      .data(["end"])
      .enter()
      .append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 50) // Adjusted refX value
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#000"); // Adjusted fill color

    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3
          .forceLink(data.links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value))
      .attr("marker-end", "url(#arrow)");

    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(data.nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", (d) => {
        switch (d.type) {
          case "typeA":
            return "#ff6347";
          case "typeB":
            return "#4682b4";
          case "typeC":
            return "#32cd32";
          default:
            return "#69b3a2";
        }
      });

    node.append("title").text((d) => `${d.name} (Group: ${d.group})`);

    // Add labels to the nodes
    const label = svg
      .append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(data.nodes)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("dy", -15)
      .attr("text-anchor", "middle")
      .text((d) => d.name)
      .style("font-family", "Arial")
      .style("font-size", "12px")
      .style("fill", "#555");

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default ForceDirectedTree;
