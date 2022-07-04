export interface Permission {
  [getUsers: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
};
}

export interface Iusers {
  traineeEmail: string;
  reviewerEmail: string;
}

export interface RegExp {
  [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray>;
}
