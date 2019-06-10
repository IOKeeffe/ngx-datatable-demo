import { Subject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
export const roguesGallery = [
  {
    name: 'The Riddler',
    realName: 'Edward Nigma',
    alias: 'The Prince of Puzzles',
    powers: 'Being a knock-off of the joker',
    actor: 'Frank Gorshin'
  },
  {
    name: 'Catwoman',
    realName: 'Selina Kyle',
    alias: 'Miss Kitka',
    powers: 'Making the same 3 cat puns over and over',
    actor: 'Eartha Kitt'
  },
  {
    name: 'The Joker',
    realName: '?',
    alias: 'The Clown Prince of Crime',
    powers: 'Hiding his mustache with face paint',
    actor: 'Cesar Romero'
  },
  {
    name: 'The Penguin',
    realName: 'Oswald Cobblepot',
    alias: 'The Waddling Master of Foul Play',
    powers: 'Originated the Wario laugh ("wa wa wa wa wa")',
    actor: 'Burgess Meredith'
  },
];

const roguesGallerySource = new Subject;

export const roguesGallery$ = of(roguesGallery);

export const loadRogues = () => {
  roguesGallerySource.next(roguesGallery);
};
