# Parse link key from headers response in GITHUB and GITLAB

The main idea of ​​this library created in the JavaScript language is to parse data from server response headers and
define next link for upload. It can be used for Github and Gitlab API integrations

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm `npm i qansigliere-parse-link-from-headers`

## How to use it

In case if You work with Github and/or Gitlab API, You need to convert link key value from response headers to upload
all available data. This library can help You with it. How it works:

```
var { linkParser } = require('qansigliere-parse-link-from-headers');

let headers = {
        date: 'Fri, 14 Feb 2025 14:40:38 GMT',
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'private, max-age=60, s-maxage=60',
        vary: 'Accept, Authorization, Cookie, X-GitHub-OTP,Accept-Encoding, Accept, X-Requested-With',
        etag: 'W/"444f830838f7afe42d388ad25ee6b7bd900ea021e8f94efed012f1445e29dc80"',
        'github-authentication-token-expiration': '2025-03-16 17:35:17 +0300',
        'x-github-media-type': 'github.v3; format=json',
        link: '<https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2 >; rel="next", <https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2 >; rel="last"',
        'x-accepted-github-permissions': 'pull_requests=read',
        'x-github-api-version-selected': '2022-11-28',
        'x-ratelimit-limit': '5000',
        'x-ratelimit-remaining': '4995',
        'x-ratelimit-reset': '1739547333',
        'x-ratelimit-used': '5',
        'x-ratelimit-resource': 'core',
        'access-control-expose-headers':
            'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
        'access-control-allow-origin': '*',
        'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
        'x-frame-options': 'deny',
        'x-content-type-options': 'nosniff',
        'x-xss-protection': '0',
        'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
        'content-security-policy': "default-src 'none'",
        'transfer-encoding': 'chunked',
        server: 'GitHub · Build and ship software on a single, collaborative platform ',
        'x-github-request-id': '8408:AF9A4:1713322:17A6E88:67AF55E6',
    };

    console.log(linkParser(headers));
```

You will get such simple response:

```
{
    next: 'https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2',
    last: 'https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2',
}
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7

## Related Videos

-   https://www.youtube.com/live/uaoDKVlRY04?si=87D_8yLpH0NoLFd4
