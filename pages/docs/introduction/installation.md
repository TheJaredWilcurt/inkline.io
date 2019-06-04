# Installation
Install Inkline using your favorite package manager and get access to the latest source code and compiled CSS and JavaScript. {.lead}

### Package Managers

You can install Inkline using one of the following package managers:

**Install using `npm`:**

~~~css
npm install --save @inkline/inkline
~~~

**Install using `yarn`:**

~~~css
yarn add @inkline/inkline
~~~

**Install using `composer`:**

~~~css
composer require inkline/inkline
~~~

### Usage
First, we'll import the core styles, after which we import and register the script files. If you already have your Webpack configuration ready for Vue, importing the framework is as simple as:

~~~js
import Vue from 'vue';
import '@inkline/inkline/dist/inkline.css';
import Inkline from '@inkline/inkline';

Vue.use(Inkline);
~~~

**You're all set!** Start using the many components and utilities that Inkline has to offer.



### Other

Alternatively, Inkline is integrated with the following frameworks and environments:

**Install using `Vue CLI`**

~~~js
vue create my-app
cd my-app
~~~

~~~js
vue add inkline
~~~
