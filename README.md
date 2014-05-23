# React Flux JS Lib

Client-side library for the React Flux architecture (http://facebook.github.io/react/docs/flux-overview.html).


## Example

/react-flux-todomvc

We made use of the example provided by the React team (https://github.com/facebook/react/tree/master/examples/todomvc-flux), except that we have modified it to only use the client-side libraries, no compliation or build process necessary, just the offline transform tools to transform your jsx to js (http://facebook.github.io/react/docs/getting-started.html).

### Usage

Just include /dist/flux.min.js into your HTML code



## Maintaining Dependencies to support the Flux architecture

### Output

You can find the output here: /dist/flux.min.js


### Current dependency list

* React (https://github.com/facebook/react)
  * invariant.js
  * keyMirror.js
* es6-shim (https://github.com/paulmillr/es6-shim)
* EventEmitter (https://github.com/Wolfy87/EventEmitter)


### Install
```sh
npm install
```

### Usage
```sh
npm start
```


### Adding/Removing

If you want to add/remove something to/from flux.min.js

Edit the files list in: /gulp/config.js

Then run "npm start" and check your /dist folder.




License
-------

React Flux JS Lib is licensed under the MIT license.

> The MIT License (MIT)
>
> Copyright (c) 2014 Andrew Quan <AndrewQ@RedBlueprint.com>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.