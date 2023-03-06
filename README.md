# gsheets-append-action

## About private key

If you use GitHub Secrets to store JSON private key, be mindful that you need to change all embedded `\n` linebreaks with real ones.

Given your JSON's `private_key` content is along the lines of:

```
-----BEGIN PRIVATE KEY-----\nBLABLABLABLABLA\nBLABLABLABLABLA\n-----END PRIVATE KEY-----\n
```
Change it to:
```
-----BEGIN PRIVATE KEY-----
BLABLABLABLABLA
BLABLABLABLABLA
-----END PRIVATE KEY-----
```

And use that as your `GOOGLE_USER_KEY` input.

([credit]([url](https://github.com/dibenlloch/google-sheets-secrets-action)))
