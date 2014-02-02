---
layout: post
title: "Octopress en Mac OS X Maveriks"
date: 2014-01-27 18:18:05 +0100
comments: true
categories: 
---

En el post anterior hice una introducción general a Octopress, en este voy a centrarme en como crear el hambiente de trabajo adecuado para utilizar Octopress en Mac OS X.

<!-- more -->

##Instalando las Command Line Tools de Xcode

{% img left /images/xcode.png 100px [xcode [xcode]] %}

Descárgate [Xcode de la App Store.](https://itunes.apple.com/us/app/xcode/id497799835)
Una vez tengas instalado Xcode, ves a las preferencias, icono Downloads y haz click en el botón Install de las Command Line Tools.

<br>
<br>

##Instalando Homebrew

{% img left /images/homebrew.png 100px [Homebrew [Homebrew]] %}

Para instalar cosas en Mac te recomiendo utilizar [Homebrew](http://brew.sh/index_es.html).<br>
Homebrew es un manejador de paquetes hecho en Ruby para Mac OS X.<br>
Resulta muy útil para instalar todo lo que no viene de serie en tu mac.<br>
Para instalar Homebrew primero necesitas tener las Xcode Command Line Tools, si no Homebrew te dará un herror.<br>
Abre la terminal y pega este código para instalar Homebrew:
```
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
Para comprovar que hemos hecho la instalación correctamente ejecuta este comando:
```
$ brew doctor
```
Si lo prefieres sigue la [guía de oficial de Homebrew.](https://github.com/Homebrew/homebrew/wiki/Installation)
 
##Instalando Git

{% img left /images/git.png 100px [git [git]] %}

Si todavía no tienes Git instalado puedes hacerlo desde su [sitio oficial.](http://git-scm.com/downloads)<br>
O mucho mejor utiliza Homebrew.

Para instalar Git con Homebrew abre la terminal e introduce:
```
$ brew install git
```
Para mantener tu versión de Git actualizada con Homebrew utiliza este comando:
```
$ brew update git
```
##Instalando Ruby

{% img left /images/ruby.png 100px [ruby [ruby]] %}

Octopress necesita que tengas como mínimo la versión 1.9.3, de Ruby instalada en tu máquina.<br>
En Mac OS X Mavericks ya tienes pre-instalada la versión 2.0.0p247 de Ruby, pero es mejor no tocar la versión del sistema y utilizar [RVM](http://rvm.io/) o [rbenv](https://github.com/sstephenson/rbenv) para gestionar las distintas versiones de Ruby que puedas necesitar.

He probado las dos opciones pero rbenv me gusta más, en cualquier caso lo dejo a vuestra elección.

Para instalar rbenv con Homebrew abre la terminal e introduce estos comandos:
```
$ brew update #Actualiza Homebrew
$ brew install rbenv #Instala rbenv
$ brew install ruby-build
```

<br>
<br>

Enlaces útiles:<br>

+ [CODEHERO](http://codehero.co/como-lo-hago-instalar-homebrew/?utm_content=bufferc2b45&utm_source=buffer&utm_medium=twitter&utm_campaign=Buffer)
+ [ROBOTS](http://robots.thoughtbot.com/psa-do-not-use-system-ruby)
+ [ROBOTS](http://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems)
+ [RailsApps Project](http://railsapps.github.io/installrubyonrails-mac.html)