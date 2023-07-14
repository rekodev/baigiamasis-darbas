export const hexToRgba = (hex: string): string => {
  let r: number = 0,
    g: number = 0,
    b: number = 0;

  // Dealing with a three-digit hexadecimal color (short form)
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);

    // Dealing with a six-digit hexadecimal color (long form)
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  // If the color wasn't three or six digits long, return an error.
  if (!(hex.length === 4 || hex.length === 7))
    throw new Error('Invalid HEX color.');

  // Make sure r, g, and b are in the set {0, 1, ..., 255}
  if (r > 255 || g > 255 || b > 255) throw new Error('Invalid HEX color.');

  // Return as rgba
  return `rgba(${r},${g},${b},0.5)`;
};
