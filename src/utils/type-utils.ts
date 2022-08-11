export type PromiseResolved<T> = T extends Promise<infer R> ? R : never;
