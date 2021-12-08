import { UrlBuilder } from '../../lib/data/urlBuilder';

type OnSuccess = (payload: any) => void;
type OnError = (error: Error) => void;

export function fetchData(
  url: string,
  onSuccess: OnSuccess,
  onFailure: OnError
) {
  fetch(url, UrlBuilder.getInit())
    .then(async (response) => {
      const data = (await response.json()) as unknown;
      console.log(data);
      onSuccess(data);
    })
    .catch((err) => {
      onFailure(err);
    });
}
