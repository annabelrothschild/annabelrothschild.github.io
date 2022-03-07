---
layout: post
title: "Running standalone Tor-Snowflake instance on PineBook Pro"
subtitle: 
author: Annabel
---

I've been running [browser-based Snowflake instances](https://snowflake.torproject.org/) for a week or so now and notice that I get the most activity (aka my instance is actually useful) at times I'm not reliably on my laptop. So, I set up a standalone instance on my currently minimally-used [PineBook Pro](https://pine64.com/product/14%E2%80%B3-pinebook-pro-linux-laptop-ansi-us-keyboard/?v=0446c16e2e66). But, my PBP has terrible battery life so I thought I'd leave it running during the day and didn't need the battery drain of a GUI, so I went to follow [these steps](https://community.torproject.org/relay/setup/snowflake/standalone/), with the goal of running it off a small solar generator & panel I have set up. 

Chaos ensued. I would use my PBP so much more regularly if ARM64 was...a few years more developed (sigh). Anyway, after much trial and error, here's what worked on my Armbian (Ubuntu-based)-running ('focal' version) PBP:

* Get Docker (different directions than regular Docker download)
~~~text
code();
$ curl -fsSL test.docker.com -o get-docker.sh && sh get-docker.sh
~~~

* Go ahead and add Docker to usergroup if that's your thing. Reminder to logout after doing so.
~~~text
code();
$ sudo usermod -aG docker [your-username]
~~~

* Test Docker
~~~text
code();
$ docker run hello-world
~~~

* Get Docker-Compose
~~~text
code();
$ curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
~~~

* Get the Snowflake [Docker yml](https://gitlab.torproject.org/tpo/anti-censorship/docker-snowflake-proxy/raw/main/docker-compose.yml) file and save.

* Run your instance
~~~text
code();
$ docker-compose up -d && docker ps
~~~