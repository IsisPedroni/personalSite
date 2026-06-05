export function enrichGalleryAlt(baseAlt: string, index: number): string {
  switch (baseAlt) {
    case 'Fitness transformation':
      return `Client before-and-after body transformation — photo ${index + 1}`;
    case 'Fitness coaching':
      return `Personal training session with Duda Bueno — photo ${index + 1}`;
    case 'Gym session':
      return `Gym workout session — photo ${index + 1}`;
    default:
      return baseAlt;
  }
}
