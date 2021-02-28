---
slug: github-action-docusaurus
title: Install Github Action For Docusaurus
author: Irfan
author_url: https://github.com/irfanhkm
author_image_url: https://secure.gravatar.com/avatar/80095a2b492f81710481d3e0f4d14e6d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIH-0.png
tags: [docusarurus, devops, tutorial]
---

Contoh deploy script
``` yml
name: Deploy

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1

    - name: Copy repository contents via scp
      uses: appleboy/scp-action@master
      env:
        HOST: ${{ secrets.HOST }}
        USERNAME: ${{ secrets.USERNAME }}
        PORT: ${{ secrets.PORT }}
        KEY: ${{ secrets.SSHKEY }}
      with:
        source: "."
        target: ${{ secrets.TARGET_FOLDER }}

    - name: Executing remote command
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        USERNAME: ${{ secrets.USERNAME }}
        PORT: ${{ secrets.PORT }}
        KEY: ${{ secrets.SSHKEY }}
        script: cd ${{ secrets.TARGET_FOLDER }} && yarn build
```