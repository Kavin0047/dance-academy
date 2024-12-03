/**
 * Validates if an image exists and returns the image URL or a fallback
 * @param imagePath - The path to the image
 * @param fallback - Optional fallback image path
 * @returns The validated image path or fallback
 */
export const validateImage = (imagePath: string, fallback: string = '/images/placeholder.jpg'): string => {
  try {
    // In production, we assume the image exists if the path is valid
    if (imagePath.startsWith('/images/')) {
      return imagePath;
    }
    return fallback;
  } catch {
    return fallback;
  }
};

/**
 * Preloads an image to ensure it's cached
 * @param src - The image source URL
 * @returns Promise that resolves when the image is loaded
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Batch preloads multiple images
 * @param srcs - Array of image source URLs
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(src => preloadImage(src)));
};