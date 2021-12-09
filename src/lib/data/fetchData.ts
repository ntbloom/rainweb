import { UrlBuilder } from './urlBuilder';

type OnSuccess<T> = (payload: T) => void;
type OnError = (error: Error) => void;

export function fetchData<T>(
  url: string,
  onSuccess: OnSuccess<T>,
  onFailure: OnError
) {
  console.debug(`calling ${url}`);
  fetch(url, UrlBuilder.getInit())
    .then(async (response) => {
      const data = (await response.json()) as T;
      console.debug(data);
      onSuccess(data);
    })
    .catch((err) => {
      console.error(err);
      onFailure(err);
    });
}
