---
layout: post
title: "Moving from Word, with Zotero citations, to Overleaf"
subtitle:
author: Annabel
---

_This post is a workaround for indirect transformation of Word (or any word processing software) with linked Zotero citations into Overleaf. This post expands [a StackOverflow answer](https://tex.stackexchange.com/questions/535778/make-overleaf-to-use-better-bibtex-citation-keys-instead-of-zotero-keys)._

1. Set up [Zotero desktop](https://www.zotero.org/download/). You will need to use the "Better BibTex for Zotero" (BBT) extension. You can download it [here](https://github.com/retorquere/zotero-better-bibtex/releases/). As with Zotero XPI files on Firefox, you'll want to right-click on the latest version and "save link as". Once downloaded, you'll upload it to your list of existing Zotero add-ons (from the main Zotero menu: Tools-->Add-ons-->Gear icon-->Install add-on from file). Upload the XPI file. You'll need to restart Zotero. On restart, it will ask you guide you through a series of prompts -- I personally used all defaults but customize as necessary. Depending on the size of your library, it make take several minutes to attach Citation Keys to all entries. 

2. Once you have configured BBT, right click on the entry pane menu to add an additional column. Here, you can click to show "Citation Key" (last entry in the list). Select that. Then, from the "My Library" collection, select all entries in your Zotero library and right click on the Citation Key value to select Better BibTex-->"Pin BibTex key". This will lock your Citation Keys so that they find-able in the "extras" section of an individual entry in your library -- aka, it will override your default key to be rendered usable to Overleaf. See more information [here](https://retorque.re/zotero-better-bibtex/exporting/auto/) in the "Pinning BBT cite keys for Overleaf" section.

3. Download [this file](/documents/bbc.csl) which is a custom style file for Zotero citation formatting (again, you can use "save link as" if you get an error message). It will transform inline citations in your Word document from whatever your current citation is to Overleaf's default citation style (e.g., "\cite{}"). To add this style to Zotero, from the main Zotero menu: Preferences --> Cite --> add additional style (+ button) --> upload saved CSL file. It will be entitled "BBC for latex -annabel" (you can change this by editing the CSL file directly; I did not create this file and you will see the original author's name and information if you open the raw file, linked [here](/documents/better-bibtex-citekeys.csl)).

4. Change the citation format for your Word document, via the in-program Zotero menu, to "BBC for latex -annabel" (or whatever you renamed the Overleaf specific CSL file to). This will take a minute to run. 

5. You'll now need to upload your Zotero library to Overleaf, if you haven't already done so. Details for that process are [here](https://www.overleaf.com/learn/how-to/How_to_link_your_Overleaf_account_to_Mendeley_and_Zotero). If you already linked the two before adding and pinning the BBT citation keys, you'll need to refresh the .bib file, otherwise the citation keys won't match.

6. You can then copy and paste directly from your Word document to Overleaf and the citation keys should compile without issue. For citations that include page numbers, see known bug 1 below.

7. If you're also converting a large amount of formatted Word text, you can use a tool like [Pandoc](https://github.com/jgm/pandoc/blob/master/INSTALL.md) to automate stylistic conversions. My current issue with this is that I haven't figured out how to make Pandoc ignore the Overleaf-compatible citations (aka, things already in "\cite{}" format). 

Known bugs:

1. For citations with attached page numbers, I have yet to create custom code that handles these correctly. You can flag these via the Overleaf compiler and then manually move pages to the correct Overleaf format ([see here](https://latex.org/forum/viewtopic.php?t=2561)). 
