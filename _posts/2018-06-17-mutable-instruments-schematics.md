---
layout: post
title: Mutable Instruments Schematic PDFs
author: Ben Reeves
date: 2018-06-17 20:00:00 -0500
categories: blog modular
excerpt: Here I keep an updated list of schematics, in PDF form, for all Mutable Instruments modules.
image: /assets/img/mutable-instruments-logo.png

redirect_from:
  - /blog/modular/mutable-instruments-schematics.html
---

![Mutable Instruments logo](/assets/img/mutable-instruments-logo.png)

## Description

Not everybody owns EAGLE or wants to go through the trouble of opening it just to view a schematic. Here I keep an updated list of schematics, in PDF form, for all Mutable Instruments modules.

If I am ever missing a schematic, please let me know by [opening up an issue]({{site.repository}}/issues) on GitHub and I will update this page as soon as possible!

### GitHub Fork

If you prefer instead, you can browse [my fork of Olivier Gillet's GitHub repo](https://github.com/BGR360/eurorack), which contains all of the schematics in the same directories as their respective EAGLE files.

## Schematic PDFs

{% assign schematics_url = site.data.mutable_instruments_schematics.schematics_directory %}

{% for schematic in site.data.mutable_instruments_schematics.schematics %}

#### {{ schematic.name }}
  
  {% if schematic.files %}

    {% for file in schematic.files %}

[{{ file }}]({{schematics_url | relative_url}}{{file}})

    {% endfor %}
  
  {% else if schematic.file %}

[{{ schematic.file }}]({{schematics_url | relative_url}}{{schematic.file}})

  {% endif %}

{% endfor %}

## Disclaimer

These schematics are owned and copyrighted by Olivier Gillet ([olivier@mutable-instruments.net](mailto:olivier@mutable-instruments.net)). These schematics are open-source under [cc-by-sa-3.0](https://creativecommons.org/licenses/by-sa/3.0/). I do not claim any ownership of this work.
