import type { ImageMetadata } from 'astro';

export interface NavigationItem {
  label: string;
  path: string;
}

export interface CarouselSlide {
  image: ImageMetadata;
  altText: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactDetails {
  location: string;
  phone: string;
  phoneLink: string;
  email: string;
}
