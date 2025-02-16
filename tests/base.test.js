var { linkParser } = require('../index');

test('Parse github valid headers', () => {
    let initialData = {
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

    expect(linkParser(initialData)).toEqual({
        next: 'https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2',
        last: 'https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2',
    });
});

test('Parse invalid headers', () => {
    let initialData;
    expect(linkParser(initialData)).toBeFalsy();
});

test('Parse gitlab valid headers', () => {
    let initialData = {
        date: 'Fri, 14 Feb 2025 14:58:27 GMT',
        'content-type': 'application/json',
        'transfer-encoding': 'chunked',
        connection: 'keep-alive',
        'cf-ray': '911dea94cefbd5eb-IST',
        'cf-cache-status': 'MISS',
        'cache-control': 'max-age=0, private, must-revalidate',
        etag: 'W/"c3fabdd15d3393f037e694ed2a11cbc8"',
        link: '<https://gitlab.com/api/v4/users?active=false&admins=false&auditors=false&blocked=false&exclude_active=false&exclude_external=false&exclude_humans=false&exclude_internal=false&external=false&humans=false&order_by=id&page=2&per_page=20&skip_ldap=false&sort=desc&with_custom_attributes=false&without_project_bots=false&without_projects=false >; rel="next", <https://gitlab.com/api/v4/users?active=false&admins=false&auditors=false&blocked=false&exclude_active=false&exclude_external=false&exclude_humans=false&exclude_internal=false&external=false&humans=false&order_by=id&page=1&per_page=20&skip_ldap=false&sort=desc&with_custom_attributes=false&without_project_bots=false&without_projects=false >; rel="first"',
        'strict-transport-security': 'max-age=31536000',
        vary: 'Origin, Accept-Encoding',
        'content-security-policy': "default-src 'none'",
        'gitlab-lb': 'haproxy-main-26-lb-gprd',
        'gitlab-sv': 'api-gke-us-east1-d',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'SAMEORIGIN',
        'x-gitlab-meta': '{"correlation_id":"23f551df4778aa936e09eeda5e9ca937","version":"1"}',
        'x-next-page': '2',
        'x-page': '1',
        'x-per-page': '20',
        'x-prev-page': '',
        'x-request-id': '23f551df4778aa936e09eeda5e9ca937',
        'x-runtime': '0.195569',
        'report-to':
            '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=srBq7ZMGuV%2FjrjJlnHnuWnTH1EdJGqv6i6Yfslo6rKwruI1iUS3q7MTORlzk4DuaePk%2FcV2DAP0NAm%2FTiq5x3De220AMsTDv%2BOIoEQJUks60qOnf1BXvsdTaOoY%3D"}],"group":"cf-nel","max_age":604800}',
        nel: '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
        'set-cookie': [
            '_cfuvid=rluxZnemJ0gsaLc_KuAArpkGxf7FmSLK.xktd5FKF2A-1739545107057-0.0.1.1-604800000; path=/; domain=.gitlab.com; HttpOnly; Secure; SameSite=None',
        ],
        server: 'cloudflare',
    };

    expect(linkParser(initialData)).toEqual({
        first: 'https://gitlab.com/api/v4/users?active=false&admins=false&auditors=false&blocked=false&exclude_active=false&exclude_external=false&exclude_humans=false&exclude_internal=false&external=false&humans=false&order_by=id&page=1&per_page=20&skip_ldap=false&sort=desc&with_custom_attributes=false&without_project_bots=false&without_projects=false',
        next: 'https://gitlab.com/api/v4/users?active=false&admins=false&auditors=false&blocked=false&exclude_active=false&exclude_external=false&exclude_humans=false&exclude_internal=false&external=false&humans=false&order_by=id&page=2&per_page=20&skip_ldap=false&sort=desc&with_custom_attributes=false&without_project_bots=false&without_projects=false',
    });
});

test('Fixed bug', () => {
    let headers = {
        date: 'Sun, 16 Feb 2025 15:37:33 GMT',
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'private, max-age=60, s-maxage=60',
        vary: 'Accept, Authorization, Cookie, X-GitHub-OTP,Accept-Encoding, Accept, X-Requested-With',
        etag: 'W/"444f830838f7afe42d388ad25ee6b7bd900ea021e8f94efed012f1445e29dc80"',
        'github-authentication-token-expiration': '2025-03-16 17:35:17 +0300',
        'x-github-media-type': 'github.v3; format=json',
        link: '<https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2>; rel="next", <https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2>; rel="last"',
        'x-accepted-github-permissions': 'pull_requests=read',
        'x-github-api-version-selected': '2022-11-28',
        'x-ratelimit-limit': '5000',
        'x-ratelimit-remaining': '4970',
        'x-ratelimit-reset': '1739723695',
        'x-ratelimit-used': '30',
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
        server: 'github.com',
        'x-github-request-id': '7F30:15CAD0:F340F4:FC9883:67B2063D',
    };

    expect(linkParser(headers)).toEqual({
        last: 'https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2',
        next: 'https://api.github.com/repositories/929484816/pulls?state=all&per_page=1&page=2',
    });
});
