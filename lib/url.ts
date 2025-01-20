import queryString from "query-string";
import qs from "query-string";

interface UrlQuery {
  params: string;
  key: string;
  value: string;
}

interface PropsUrlRemove {
  params: string;
  keysToRemove: string[];
}

// update the URL
export const fromUrlQuery = ({ params, key, value }: UrlQuery) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currentUrl,
  });
};

export const removeUrlQuery = ({ params, keysToRemove }: PropsUrlRemove) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
