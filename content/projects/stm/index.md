![20231105-190213.png](/tamiwiki/projects/pasted/20231105-190213.png){.align-right
width="400" query="?400"}

> hosting a workshop themed around repurposing cheap ST-LINK clones (I
> got two for 14.39 ILS including shipping from
> [Aliexp](https://www.aliexpress.com/item/32860702733.html)). The idea
> is to teach people how to turn them into FIDO2 (Webauthn) hardware
> tokens which can be used for 2FA on many popular websites (including
> Github, Google account, Facebook and many more, see
> [dongleauth](https://www.dongleauth.com/)) or OpenPGP smartcards (can
> be used for e.g. ssh keys, signing/decrypting e-mail etc). Of course
> the MCUs (STM32F103 or compatibles) do not feature real
> tamper-resistance and can be cloned (with considerable effort) given
> physical access to them but for many threat models that is not
> problematic. \[paul\]

Plan of the class:

1.  Shallow overview about hardware security tokens
2.  Introduction into using SWD protocol to flash and debug Cortex-based
    MCUs
3.  Hands-on experience in flashing
    [FIDO2](https://github.com/gl-sergei/u2f-token) or
    [GNUK](https://wiki.debian.org/GNUK) (OpenPGP smartcard)
4.  (optional) desoldering 0402 pull down resistor to make button work
5.  (optional) fitting an SMD switch button
6.  Testing on websites
7.  (optional) General discussion about STM32 software development,
    compiling and flashing blinkies, debugging etc.

Ideas to consider:

1.  How to estimate the demand and decide on a suitable date?
2.  Should we order some ST-LINKs in advance and offer them in exchange
    for donation? What about the SMD switches, is there some stock?
3.  Can we do thermal transfer to the aluminium cases to add TAMI
    branding?
