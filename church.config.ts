/**
 * church.config.ts — MFM Peterborough
 * Mountain of Fire and Miracles Ministries — Peterborough
 *
 * Brand colours derived from the MFM logo's official symbolic meaning:
 *   Purple  = royalty / royal priesthood
 *   Red/Orange = Holy Spirit fire
 *   Black   = the mountain (supremacy of God)
 *   White   = holiness
 */

export type ChurchFeature = 'wofbi' | 'bfc' | 'freeTransport' | 'foodBank';

export type ChurchConfig = {
  name: string;
  shortName: string;
  tagline: string;
  address: { line1: string; line2: string };
  heroPhoto: string | null;
  logoPath: string | null;
  theme: {
    ink: string; inkSoft: string;
    paper: string; paperAlt: string;
    indigo: string; indigoDeep: string;
    gold: string; goldDeep: string; goldPale: string;
    sage: string; sageSoft: string;
    fontDisplay: string; fontSans: string; fontMono: string;
  };
  features: Record<ChurchFeature, boolean>;
};

export const churchConfig: ChurchConfig = {
  name: 'Mountain of Fire and Miracles Ministries — Peterborough',
  shortName: 'MFM Peterborough',
  tagline: 'Revival of Apostolic Signs, Holy Ghost fireworks, and the unlimited demonstration of God\'s power.',
  address: {
    line1: '[Venue — to be confirmed]',
    line2: 'Peterborough, [Postcode]'
  },
  heroPhoto: null,   // set to '/hero.jpg' once a real congregation photo is supplied
  logoPath: '/logo.png',

  theme: {
    // Purple — MFM's primary royalty colour
    ink: '#1A0A2E',
    inkSoft: '#6B5E82',
    // Off-white page background — clean and holy, not stark
    paper: '#FAFAFA',
    paperAlt: '#F3EFF8',
    // Purple family for the main branded surfaces
    indigo: '#5B0FA8',       // MFM purple
    indigoDeep: '#3A0870',   // deeper purple for dark sections
    // Fire colours — used for CTAs, highlights, and accents
    gold: '#E05A00',         // MFM fire orange/red (brand "fire")
    goldDeep: '#B24500',     // deeper fire for hover states
    goldPale: '#FDEBD8',     // pale flame tint for badge backgrounds
    // Secondary neutral
    sage: '#4A3060',         // purple-tinted mid-tone
    sageSoft: '#EDE6F5',     // very light purple wash
    // Font choices (from the pre-approved list in app/layout.tsx)
    fontDisplay: 'Playfair Display',
    fontSans: 'Inter',
    fontMono: 'IBM Plex Mono'
  },

  features: {
    wofbi: false,
    bfc: false,
    freeTransport: false,
    foodBank: false
  }
};
