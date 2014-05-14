---
layout: post
title: "Sass y Compass en acción"
date: 2014-04-21 23:59:20 +0200
comments: true
categories: [Sass, Compass, CSS]
---
##Que es Sass?

Sass es CSS con superpoderes!
Sass cubre los huecos de CSS añadiendole todo lo que le falta, haciendolo un lenguaje más inteligente, escalable y reutilizable.
<!--more-->

<ul>
<li>Variables</li>
<li>Anidamiento</li>
<li>Herencía entre selectoress</li>
<li>Funciones y estructuras de control</li>
<li>Operaciones lógicas</li>
<li>Mixins</li>
</ul>

##Que es Compass?

Compass es un framework para Sass.
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

Terminal Lovers

Para instalar Sass y Compass abre la terminal en Linux / OS X o Command Prompt en Windows y escribe:

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
Aplicaciones como Mixture o Codekit pueden resultarte útiles, pero si lo único que quieres es compilar Sass, no me parece necesario. Abrir la terminal, navegar hasta tu proyecto y escribir algo como ```compass watch``` es todo lo que tienes que hacer.
Además en el desarrollo web moderno la terminal es una herramienta que se utiliza constantemente por lo que aprender su funcionamiento básico te resultará útil.