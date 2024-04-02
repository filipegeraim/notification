export interface UseCase {
  perform(...args: any): Promise<any>;
}
