---
layout: post
title: "Instala Octopress en Mac OS X Maveriks"
date: 2014-01-27 18:18:05 +0100
comments: true
categories: 
---

En el post anterior hice una introducción general de como instalar Octopress, en este caso voy a centrarme en los requisitos necesarios en Mac OS X.

<!-- more -->

###Preparando el hambiente de trabajo.

Para instalar cosas en Mac utiliza [Homebrew](http://brew.sh/index_es.html).<br>
Que es Homebrew? Homebrew es un manejador de paquetes hecho en Ruby para Mac OS X.
Resulta muy útil para instalar todo lo que no viene de serie en tu mac.

Primero necesitas tener las Xcode Command Line Tools, si no, Homebrew te dará un herror.<br>
Descaágate las [Xcode de la App Store.](https://itunes.apple.com/us/app/xcode/id497799835)
Una vez tengas instalado Xcode, ves a las preferencias icono Downloads y haz click en el botón Install de las Command Line Tools.

Para instalar Homebrew abre la terminal y pega ese código.

```
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

```
Para comprovar que hemos hecho la instalación correctamente ejecuta este comando:

```
$ brew doctor
```

Si lo prefieres sigue la [guía de oficial de Homebrew.](https://github.com/Homebrew/homebrew/wiki/Installation)


Ahora [instala Git](http://git-scm.com/downloads) si no lo tienes ya.

Octopress necesita que tengas como mínimo la versión 1.9.3, de Ruby instalada en tu máquina. <br>En Mac OS X Mavericks ya tienes pre-instalada la versión 2.0.0p247 de Ruby, pero en cualquier caso es mejor no tocar la versión del sistema y utilizar [RVM](http://rvm.io/) o [rbenv](https://github.com/sstephenson/rbenv) para gestionar las distintas versiones de Ruby que puedas necesitar.

RVM es la opción más conocida, pero yo he probado las dos y rbenv me ha funcionado mucho mejor, no soy experto en la matería así que lo dejo a vuestra elección :)







Enlaces útiles:
[GIANT ROBOTS](http://robots.thoughtbot.com/psa-do-not-use-system-ruby)