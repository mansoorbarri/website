---
title: "THM | Introduction to Cryptography"
date: 2023-02-15
tags: [ ]
image: "/images/write-ups/cryptographyintro/main.webp"
type: "post"
showtableOfContents: true
---

## Room 
[tryhackme.com/cryptographyintro](https://tryhackme.com/room/cryptographyintro)

![screenshot of the room](/images/write-ups/cryptographyintro/main.webp)

## Task 1 Introduction
#### You can guess that it is a quote. Who said it?
```
Miyamoto Musashi
```

## Task 2 Symmetric Encryption
#### Decrypt the file `quote01` encrypted (using AES256) with the key `s!kR3T55` using `gpg`. What is the third word in the file?
```
waste
```

#### Decrypt the file `quote02` encrypted (using AES256-CBC) with the key `s!kR3T55` using `openssl`. What is the third word in the file?
```
science
```

#### Decrypt the file `quote03` encrypted (using CAMELLIA256) with the key `s!kR3T55` using `gpg`. What is the third word in the file?
```
understand
```
## Task 3 Asymmetric Encryption
#### Bob has received the file `ciphertext_message` sent to him from Alice. You can find the key you need in the same folder. What is the first word of the original plaintext?
```
Perception
```
#### Take a look at Bob’s private RSA key. What is the last byte of p?
```
e7
```
fas fa-check-circle

#### Take a look at Bob’s private RSA key. What is the last byte of q?
```
27
```

## Task 4 Diffie-Hellman Key Exchange
#### A set of Diffie-Hellman parameters can be found in the file `dhparam.pem`. What is the size of the prime number in bits?
```
4096
```

#### What is the prime number’s last byte (least significant byte)?
```
4f
```

## Task 5 Hashing
#### What is the SHA256 checksum of the file `order.json`?
```
2c34b68669427d15f76a1c06ab941e3e6038dacdfb9209455c87519a3ef2c660
```

#### Open the file `order.json` and change the amount from `1000` to `9000`. What is the new SHA256 checksum?
```
11faeec5edc2a2bad82ab116bbe4df0f4bc6edd96adac7150bb4e6364a238466
```

#### Using SHA256 and the key `3RfDFz82`, what is the HMAC of `order.txt`?
```
c7e4de386a09ef970300243a70a444ee2a4ca62413aeaeb7097d43d2c5fac89f
```

## Task 6 PKI and SSL/TLS
#### What is the size of the public key in bits?
```
4096
```

#### Till which year is this certificate valid?
```
2039
```

## Task 7 Authenticating with Passwords
#### What is the original password?
```
qwerty123
```

that's it <3

---

  