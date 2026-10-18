import type { ImageMetadata } from 'astro';
import { HOME_CAROUSEL } from '../config/homeContent';
import type { CarouselSlide } from '../types/siteTypes';

// Vite needs a literal glob pattern: every image in this folder becomes a slide.
const carouselImageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/home-carousel/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

function getFileName(modulePath: string): string {
  return modulePath.split('/').pop() ?? modulePath;
}

// Slides ordered by file name; alt text comes from the home config.
export const HOME_CAROUSEL_SLIDES: CarouselSlide[] = Object.entries(carouselImageModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([modulePath, imageModule]) => ({
    image: imageModule.default,
    altText:
      HOME_CAROUSEL.altTextByFileName[getFileName(modulePath)] ?? HOME_CAROUSEL.defaultAltText,
  }));
