# gsheets-append-action

## About private key

If you use GitHub Secrets to store JSON private key beware with copy and paste because you need to change all line breaks `\n` with real ones.

JSON private_key content it's something like:
```
-----BEGIN PRIVATE KEY-----\nBLABLABLABLABLA\nBLABLABLABLABLA\n-----END PRIVATE KEY-----\n
```
Needs to be something like:
```
-----BEGIN PRIVATE KEY-----
BLABLABLABLABLA
BLABLABLABLABLA
-----END PRIVATE KEY-----
```

([credit]([url](https://github.com/dibenlloch/google-sheets-secrets-action)))
