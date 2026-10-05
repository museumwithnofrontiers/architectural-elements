import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'architecturalElements',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Architectural Elements',
    credits: 'MWNF TEAM',
    chip: {
      item: 'f88193ec-c618-5df9-8728-cdb15d419ec4',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '78426513-4220-51b8-99aa-4f7ba05f6c3a',
    dynasty: {
      item: 'f88193ec-c618-5df9-8728-cdb15d419ec4',
      name: 'Mudéjar period',
    },
    timeline: {
      code: 'lb',
      id: 'lbn',
      country: 'Lebanon',
      rows: 14,
      event: 'Druze leader',
      gallery: 2,
      galleryTiles: 2,
      galleryItem: 'Fountain',
    },
    partner: {
      id: '7712e497-33e4-5529-91c3-47abff00f87c',
      name: 'National Archaeological Museum',
      city: 'Madrid',
      country: 'Spain',
      objects: 11,
      tiles: 9,
    },
  },
})
