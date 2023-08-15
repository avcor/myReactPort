const WORKS = {
    HOME: "HOME",
    ECG: "ECG",
    MEMAY: "MEMAY",
    NONE: "-",
} as const;
export type WORKS = (typeof WORKS)[keyof typeof WORKS];

const SCREENS = {
    MAINPAGE: "MAINPAGE",
    INTRO: "INTRO",
    MODAL: "MODAL",
  } as const;
export type SCREENS = (typeof SCREENS)[keyof typeof SCREENS];
  