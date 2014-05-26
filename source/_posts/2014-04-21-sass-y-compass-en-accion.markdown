---
layout: post
title: "Primeros pasos con Sass y Compass"
date: 2014-04-21 23:59:20 +0200
comments: true
categories: [Sass, Compass, CSS]
---

##Que es Sass?

Sass es CSS con superpoderes!
Sass cubre los huecos de CSS añadiendole todo lo que le falta, haciendolo un lenguaje más inteligente, escalable y reutilizable.
<!--more-->
Sass es una gema de Ruby y viene incluido con Ruby on Rails desde la versión 3.1 como lenguaje por defecto para escribir estilos.

{% img /images/sass-logo.png 150px [Vintage glasses [Vintage Glasses]] %}

<ul>
<li>Variables</li>
<li>Anidamiento</li>
<li>Herencía entre selectoress</li>
<li>Funciones y estructuras de control</li>
<li>Operaciones lógicas</li>
<li>Mixins</li>
</ul>


##Que es Compass?

{% img /images/sass_compass.png 150px [Vintage glasses [Vintage Glasses]] %}

Compass es un framework para Sass.<br />
Que nos ofrece Compass?

<ul>
<li>librería de mixins</li>
<li>Funciones para Sass</li>
<li>Extensiones</li>
</ul>

##Por que necesito todo esto?

<ul>
<li>Cada vez hacemos sitios web más grandes y complejos y eso es genial pero necesitamos nuevas herramientas para hacerlos manejables y mantenibles.</li>
<li>Sass es un metalenguage que se usa para definir el estilo del documento de forma limpia y estructurada.</li>
<li>Sass es una extension de CSS3 por lo que cualquier documento CSS3 es un documento SCSS valido.</li>
<li>Sass sigue el principio de DRY (Don't Repat Yourself).</li>
</ul>

##Lo que necesitas antes de empezar:

{% img left /images/ruby.png 100px [ruby [ruby]] %}

+ Sass está hecho en Ruby, por lo que necesitarás tenerlo instalado en tu máquina.
+ En Windows puedes utilizar: [rubyinstaller](http://rubyinstaller.org/).
+ En Linux puedes utilizar el sistema de gestión de paquetes apt o puede que esto te resulte útil: [rails ready](https://github.com/joshfng/railsready)
+ En OS X estás de suerte, Ruby ya viene por defecto!


##Instalación de Sass y Compass

##Terminal Lovers

{% img left /images/terminal.png 100px [terminal [terminal]] %}

Sass y Compass se instalan como gemas de Ruby. <br />
Puedes instalar solo Sass de este modo: `$ gem install sass`.<br />
Si te da un error es posible que necesites los permisos de administrador, utiliza: `$ sudo gem install sass`. <br />
Para comprobar que se ha instalado correctamente escribe: `$ sass -v`.<br />
Para decirle a Sass que "vigile" si hay cambios y compile nuestros archivos .scss en nuestro archivo .css escribimos: `$ sass --watch tu_carpeta_sass:tu_carpeta_css`

Compass ya lleva Sass incorporado, por lo que no tienes que instalarlo aparte.<br />
Utilzar Compass es una manera fácil de empezar con Sass, cuando creas un proyecto nuevo, Compass te crea las carpetas necesarias para tus archivos .scss/.css así como un archivo config.rb donde puedes indicar distintos paramentros de configuración.<br />

Instalar Sass y Compass abre la terminal en Linux / OS X o Command Prompt en Windows y escribe:

```
$ gem install compass
```
Comprobar que se ha instalado correctamente:

```
$ compass version 
```
Crear un proyecto con Compass:

```
$ compass create nombre-del-proyecto 
```
Compilar Sass y decirle a Compass que vijile si hay cambios (ejecutar desde el directorio raiz de tu proyecto)

```
$ compass watch 
```

##Terminal Haters

Aplicaciones GUI (graphical user interface), que puedes utilizar:

###De pago:

+ [Codekit](http://incident57.com/codekit/) OSX $29
+ [Mixture](http://mixture.io/) OSX $39
+ [Hamer](http://hammerformac.com/) OSX $23.99
+ [LiveReload](http://livereload.com/) OSX $9.99
+ [compass.app](http://compass.kkbox.com/) Win, OSX & Linux $10


###Gratuítas:

+ [Prepos](http://alphapixels.com/prepros/) Win & OSX
+ [scout-app](http://mhs.github.io/scout-app/) Win & OSX
+ [Koala-app](http://koala-app.com/#download) Win, OSX, Linux & Ubuntu


##Mi consejo?

###Utiliza la terminal!
Aplicaciones como Mixture o Codekit pueden resultarte útiles, pero si lo único que quieres es compilar Sass, no me parece necesario. <br />
Todo lo que tienes que hacer es Abrir la terminal, navegar hasta tu proyecto y escribir ```compass watch``` para que Compass compile tus archivos scss en css. <br />
Además en el desarrollo web moderno la terminal es una herramienta que se utiliza constantemente por lo que aprender su funcionamiento básico te resultará útil.

###Por defecto tu editor no coloreara el codigo .scss Utiliza uno de estos pluguins según el editor que uses:

+ [Atom, Sublime Text, TextMate](https://github.com/P233/Syntax-highlighting-for-Sass)
+ [Atom](https://atom.io/packages/Atom-Syntax-highlighting-for-Sass)
+ [Sublimetext2](https://github.com/n00ge/sublime-text-haml-sass)
+ [Coda](https://github.com/secca/Coda-Sass-Plug-in)
+ [Notepad ++](https://github.com/marvinlabs/notepad-plus-plus-scss-syntax-highlighting/)

___Enlaces útiles:___

+ [Sass-lang](http://sass-lang.com/) _Sitio oficial de Sass_
+ [Compass](http://compass-style.org/) _Sitio oficial de Compass_
+ [The Sass Way](http://thesassway.com/) _Sitio web sobre Sass y Compass que no te puedes perder_
+ [Sass meister](http://sassmeister.com/gist/11032479) _Herramienta online para testear Sass_
+ [Wiseheart Design](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/) _Guía de la terminal para diseñadores_

