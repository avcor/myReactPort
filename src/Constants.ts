const WORKS = {
    HOME: "HOME",
    ECG: "ECG",
    MEMAY: "MEMAY",
    NONE: "-",
} as const;
export type WORKS = (typeof WORKS)[keyof typeof WORKS];