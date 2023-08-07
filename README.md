<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/FiloSottile/age/blob/main/logo/logo_white.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://github.com/FiloSottile/age/blob/main/logo/logo.svg">
        <img alt="The age logo, an wireframe of St. Peters dome in Rome, with the text: age, file encryption" width="600" src="https://github.com/FiloSottile/age/blob/main/logo/logo.svg">
    </picture>
</p>

[`age-encryption`](https://www.npmjs.com/package/age-encryption) is a TypeScript implementation of the
[age](https://age-encryption.org) file encryption format.

All low-level cryptographic operations are implemented with [libsodium.js](https://github.com/jedisct1/libsodium.js).

⚠️ This project is experimental. The author has near-zero JavaScript experience and help is very welcome. ⚠️

## Installation

```
npm install age-encryption
```

## Usage

```ts
import age from "age-encryption"

{
    const { Encrypter, Decrypter, generateIdentity, identityToRecipient } = await age()

    const identity = await generateIdentity()
    const recipient = await identityToRecipient(identity)

    console.log(identity)
    console.log(recipient)

    const e = new Encrypter()
    await e.addRecipient(recipient)
    const ciphertext = await e.encrypt("Hello, age!")

    const d = new Decrypter()
    await d.addIdentity(identity)
    const out = await d.decrypt(ciphertext, "text")

    console.log(out)
}

{
    const { Encrypter, Decrypter } = await age()

    const e = new Encrypter()
    e.setPassphrase("burst-swarm-slender-curve-ability-various-crystal-moon-affair-three")
    const ciphertext = await e.encrypt("Hello, age!")

    const d = new Decrypter()
    d.addPassphrase("burst-swarm-slender-curve-ability-various-crystal-moon-affair-three")
    const out = await d.decrypt(ciphertext, "text")

    console.log(out)
}
```
