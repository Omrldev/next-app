import qs from 'query-string';

interface UrlQuery {
    params: string
    key: string
    value: string
}

// update the URL
export const fromUrlQuery = ({params, key, value}: UrlQuery) => {
    const currentUrl = qs.parse(params)

    currentUrl[key] = value

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl
    })
}