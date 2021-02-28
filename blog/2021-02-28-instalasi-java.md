---
slug: install-java-jdk
title: Install Java JDK
author: Irfan
author_url: https://github.com/irfanhkm
author_image_url: https://secure.gravatar.com/avatar/80095a2b492f81710481d3e0f4d14e6d?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIH-0.png
tags: [java, tutorial]
---

1. Download dari http://jdk.java.net/15/
2. Extract file
3. Set environment file
```
Windows (tambah system variables baru)

JAVA_HOME = C:\Program Files\Java\jdk-15.0.2
Edit environment variable
%JAVA_HOME%\bin
```
```
Mac (tambah code berikut di file .zshrc atau .bshrc)

export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-15.0.2/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"
```
Test java melalui command prompt
```
java -version
javac -version
```

