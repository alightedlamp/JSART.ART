const getRandomColor = function(max, bool) {
    if (bool) {
      return Math.floor(Math.random() * max);
    }
    let hue = Math.floor(Math.random() * max);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness})`
}

export default getRandomColor;
