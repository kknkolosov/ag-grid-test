export interface Mapper<T> {
  mapFrom(obj: any): T;
}
