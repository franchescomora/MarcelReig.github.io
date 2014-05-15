---
layout: post
title: "Sass y Compass Presentación"
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

<ul>
<li>Sass está hecho en Ruby, por lo que necesitarás tenerlo instalado en tu máquina.</li>
<li>En Windows puedes utilizar: rubyinstaller.</li>
<li>En Linux puedes utilizar el sistema de gestión de paquetes apt.</li>
<li>En OS X estás de suerte, Ruby ya viene por defecto!</li>
</ul>

##Instalación de Sass y Compass

##Terminal Lovers

{% img left /images/terminal.png 100px [terminal [terminal]] %}

Para instalar Sass y Compass abre la terminal en Linux / OS X o Command Prompt en Windows y escribe:

<br />
<br />

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
Compilar Sass, navega hasta el directorio raiz de tu proyecto y escribe:

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

___Enlaces útiles:___

+ [Sass-lang](http://sass-lang.com/) _Sitio oficial de Sass_
+ [Compass](http://compass-style.org/) _Sitio oficial de Compass_
+ [The Sass Way](http://thesassway.com/) _Sitio web sobre Sass y Compass que no te puedes perder_
+ [Sass meister](http://sassmeister.com/gist/11032479) _Herramienta online para testear Sass_