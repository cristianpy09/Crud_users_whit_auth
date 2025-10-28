export type HarryPotterCharacter = {
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number | null;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
      wood: string;
      core: string;
      length: number | null;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
  };
  