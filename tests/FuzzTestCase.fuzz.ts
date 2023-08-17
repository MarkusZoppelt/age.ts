import { FuzzedDataProvider } from "@jazzer.js/core";
import { parseHeader } from "../lib/format";
import age from "../lib/index";

test.fuzz("My fuzz test", async (data: Buffer) => {
    const provider: FuzzedDataProvider = new FuzzedDataProvider(data);


    const { Encrypter, Decrypter, generateIdentity, identityToRecipient } = await age()

    const identity = generateIdentity()
    const recipient = identityToRecipient(identity)

    const e = new Encrypter()
    e.addRecipient(recipient)
    const ciphertext = e.encrypt(provider.consumeRemainingAsString())

    const d = new Decrypter()
    d.addIdentity(identity)
    const out = d.decrypt(ciphertext, "text")

    // try {
    // }
    // catch (error) {
    //     if (!ignoredError(error)) throw error;
    // }
});


function ignoredError(error: any): boolean {
    return !!ignored.find((message) => {
        return error.message.toLowerCase().indexOf(message) !== -1;
    });
}

const ignored = [
    "expected",
    "unexpected",
    "invalid",
    "not valid",
    "unterminated",
    "must be",
    "incorrect",
    "stream error",
    "duplicate",
    "the value"
];

