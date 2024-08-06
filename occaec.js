function scaleY(init, points) {
    // Calculate the scaling factor
    let scaleFactor = init / points[0];
    
    // Scale each point in the array
    let scaledPoints = points.map(point => point * scaleFactor);
    
    // Return the scaled points
    return scaledPoints;
}
