import { withRouter } from 'next/router'
import BlogPost from '../../components/layouts/blog-post'

export const meta = {
published: true,
publishedAt: '2020-04-02',
title: 'Super Simple Introduction to Tailwind CSS',
summary: "Building a front end project today can present you with a lot of options from a choice of CSS library or framework, but that can also pose some challenges, especially for beginners in deciding what to use for the next project.",
image: '/static/site-feature.png'
}

export default withRouter(({ children, router }) => (
<BlogPost path={router.pathname} meta={meta}>
{children}
</BlogPost>
))

# Introduction

Building a front end project today can present you with a lot of options from a choice of CSS library or framework, but that can also pose some challenges, especially for beginners in deciding what to use for the next project.

Maybe you’re reading this and you’re not even perplexed but just curious as to why you may need yet another CSS framework. Or you just want to learn something new and see how it plays well with your existing workflow.

In this tutorial, my goal is to give you a soft introduction to Tailwind CSS and how to use it in a Vue app. For the most part, this could easily be extendable to other front end frameworks, I’m just using Vue as an example.

You can find all the code written in this tutorial on this [repository](https://github.com/francisudeji/tailwindcss-vuejs), and the hosted version [here](https://tailwind-intro.netlify.app/).

# What is Tailwind CSS?

The author of the framework describes Tailwind CSS as:

> A utility-first CSS framework for rapidly building custom designs.

By being a “utility-first” framework, Tailwind provides atomic classes that are self-descriptive and gives you fine-grain control over how you style your applications. Its easier to explain these concepts by comparing Tailwind with other traditional frameworks like Bootstrap, so that’s what I’ll do when in the next section.

# Why Tailwind CSS?

Again from the official documentation:

> Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

Keywords there are “customizable” and “unopinionated”. Ever tried customizing a website built with Bootstrap? Often you’ll end up creating a separate Stylesheet, duplicating class names with additional rules and even dumping `!important` everywhere thereby sacrificing maintainability.

Lastly, Tailwind assumes no opinion about what your apps should look like. A good example is Tailwind’s `.container` class:

```css
.container {
	width: 100%;
}
@media (min-width: 640px) {
	.container {
		max-width: 640px;
	}
}
@media (min-width: 768px) {
	.container {
		max-width: 768px;
	}
}
@media (min-width: 1024px) {
	.container {
		max-width: 1024px;
	}
}
@media (min-width: 1280px) {
	.container {
		max-width: 1280px;
	}
}
```

That’s all there is to it. It doesn’t include any padding or margin to center it on the page. That’s left for you and your use case. This is a reasonable default if you ask me.

# Prerequisites

While this is a basic introduction to Tailwind CSS, it’ll be extremely helpful if you had prior knowledge of CSS, because as you’ll see, some Tailwind CSS classes look similar to regular CSS properties. Hence, a good amount of CSS knowledge will come in handy.

I’ll also recommend you have some experience with Vue.js as well and have your environment setup by installing Node.js from the [official website](https://nodejs.org/en/).

# What We Will Build

![Modal with TailwindCSS](https://paper-attachments.dropbox.com/s_40F9F42BE9CFC15F1C8DE01CE1AFB6209703713AD2DDDD525B8740C01F93C48D_1588304261497_modal.gif)

In this article, we’ll be building a modal component. There’ll be a button at the center of the page and when you click it, it opens up a modal to interact with. The idea behind this relatively simple component is that it introduces us to several concepts namely:

- **Layouts**: Tailwind provides support for using flexbox, grid, and floats for designing our layouts. For simplicity, I’ve chosen to use flexbox.
- **Colors**: Tailwind also gives us some pretty neat colors out of the box, but I’ll we’ll go over how to extend Tailwind by adding ours.
- **Spacing**: For spacing, we also get options like padding and margin utilities, again, we can add ours thereafter.

# Scaffolding a Vue Project

To scaffold a new Vue app we’ll use the Vue CLI. If you have already had it installed, then consider installing it on your machine with this snippet:

```bash
npm install -g @vue/cli
```

Next, create a new project with the following snippet:

```bash
vue create tailwindcss-vuejs
```

When prompted, select the default preset and allow the installation process to complete.

## Installation of Dependencies

In this project, we’ll need three dependencies, namely: [tailwindcss](https://tailwindcss.com/), [postcss](https://postcss.org/), and [autoprefixer](https://autoprefixer.github.io/).

Install all three dependencies any of the following:

## Yarn

```bash
yarn add tailwindcss postcss autoprefixer
```

NPM

```bash
npm install tailwindcss postcss autoprefixer
```

## Initializing Tailwind

Tailwind uses an optional config file to allow us to customize the framework to our needs and we’ll be needing it in this project. To generate this file, run the following snippet in the terminal:

```bash
npx tailwind init
```

What this does is create a `tailwind.config.js` at the root of our project folder. It should look something like this:

```js
module.exports = {
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
```

> **Note**: You can also add an optional `--full` flag to the above command. The difference is that by adding the flag, Tailwind generates the config file consisting of all of Tailwind’s default configuration. In this project, we won’t be needing that, but if you want an idea of what this file looks like, check it out [here](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js).

Next, create two files in `src/assets` called `tailwind.css` and `main.css`. In the `tailwind.css` file, paste this snippet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

These are called Tailwind directives, when we initialize postcss, these directives will be transformed to generate valid CSS that will be inserted into `main.css`.

## Initializing PostCSS

What we need now is to add `tailwindcss` and `autoprefixer` as plugins to PostCSS. Create a `postcss.config.js` at the root of the project folder and paste this snippet:

```js
module.exports = {
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

Now let’s add a new script to our `package.json` to build our CSS. In the scripts section add a `build:css` script like so:

```json
"build:css": "postcss src/assets/css/tailwind.css -o src/assets/css/main.css --watch"
```

At this point, when you run `yarn build:css`, the `main.css` we created earlier will have all the generated CSS code. One last tweak I’d like us to make is combining this script with our `serve` script so that we don’t have to run the CSS build and Vue server on separate terminals.

Modify the `serve` script by replacing it with this snippet:

```json
"serve": "vue-cli-service serve && npm run build:css"
```

Now run `yarn serve` in the terminal, this should spin up the Vue app and rebuild our CSS whenever we modify `tailwind.config.js` file.

# Creating the Modal

Before we go ahead and start using Tailwind CSS In our components, in `src/main.js`, import the generated CSS file globally by replacing the existing content with this snippet like so:

```js
// src/main.js
import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css';

Vue.config.productionTip = false;
new Vue({
	render: (h) => h(App),
}).$mount('#app');
```

The additional line here is the one that imports our generated CSS. With this, we can start using Tailwind CSS.

This next step is not necessary, but let’s clean up the `src/components` folder since we are not going to use it. To clean up, let’s remove the `components` folder inside the `src` folder and delete the `HelloWorld` component previously imported in `src/App.js`.

Now let’s replace the contents of our `src/App.js` with this snippet:

```html
<template>
	<div></div>
</template>

<script>
	export default {
		name: 'App',
	};
</script>
```

Let’s add some `HTML` to the body of our component. The steps we’re going to take is as follows:

- Add a button to open the modal
- Add the modal layout
- Add the modal itself inside the modal layout
- Add logic to open and close the modal
- Add a custom color to `tailwind.config.js`

## Creating the Toggle Button

At the center of the page, we want to have a button that simply opens the modal. To do this, add this snippet within the wrapping `div` element:

```html
<!-- content -->
<div class="flex items-center justify-center w-full h-screen">
	<button
		@click="toggleModal"
		class="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-lg focus:bg-blue-600 hover:bg-blue-600"
	>
		Open Modal
	</button>
</div>
```

Let’s break this code snippet down. First, the `div` element wrapping the `button` and the `button` itself are treated as the main content of our page, at least in this instance. The classes `**flex items-center justify-center w-full h-screen**` tells this wrapping `div` element to:

- Take the full width of the page
- Have a height of the current viewport
- Be a flex container, and
- Push all its children to the center of the page

Here’s what our page looks like so far:

![](https://paper-attachments.dropbox.com/s_40F9F42BE9CFC15F1C8DE01CE1AFB6209703713AD2DDDD525B8740C01F93C48D_1588067971094_image.png)

The classes on the button itself are straightforward if you think about it. But let me break it down:

- `px-6` and `py-2`: Add padding on the x-axis and y-axis of the button, using the 6th and 2nd spacing utility respectively.
- `**text-white**`: Make the button text white
- `**bg-blue-500**`: Use the 5th shade of blue provided by Tailwind. All Tailwind color utility classes range from 100 to 900, 900 being the darkest of the shades, and 100 being the lightest.
- `rounded-lg`: Make the button have a large border radius.
- `shadow-lg`: Apply a dark box shadow
- `**focus:bg-blue-600**` and `**hover:bg-blue-600**`: We want to apply a slightly darker shade of blue on hover and focus.

Next, when the button is clicked, it triggers a `toggleModal` function that shows the modal. Replace the `script` section with this snippet:

```js
<script>
	export default {
		name: 'App',
		data() {
			return {
				isModalOpen: false,
			};
		},
		methods: {
			toggleModal() {
				this.isModalOpen = !this.isModalOpen;
			},
		},
	};
</script>
```

The function is pretty basic, when we click the button, we simply change the initial state of `isModalOpen` to the opposite of itself. We are also going to invoke this same function on the close button of the modal when we get there.

Lastly, we are going to use the value of `isModalOpen` to hide or show the modal conditionally.

## Creating the Modal Layout

The design we are aiming for is a modal with a white background and some content in it, we also want a semi-transparent backdrop that acts as the page background when the modal is open.

Paste this snippet just above the `button` container, i.e above the line with this comment `<!-- content →` like so:

```html
<!-- modal layout -->
<div
	v-if="isModalOpen"
	class="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-overlay"
>
	<!-- modal content goes here -->
</div>
```

In this snippet, we’re doing almost the same thing we did for the button container, with the exceptions of these new classes `**fixed top-0 left-0 bg-overlay**`. We’ll get to what the bg-overlay does in a second, but first, let’s talk about what these other classes represent.

We gave the `div` element acting as our modal layout a position of fixed, a top, and left property of `0`. This should sound pretty familiar if you already have experience with CSS. The fixed position just makes sure this element stays, you guessed it — fixed, so that it doesn’t scroll with the rest of the page when the modal is open.

The `bg-overlay` class is where we begin to get into customization. For this one, we want an RGB color with some opacity, so let’s create one. In `tailwind.config.js`, add this snippet inside the `theme` object:

```js
extend: {
	colors: {
		overlay: 'rgba(0, 0, 0, 0.4)';
	}
}
```

By doing this, we are simply extending or adding to Tailwind’s colors, the color here is a black background with an opacity of `0.4`. So in the end, we can have the following classes, for example `bg-overlay`, `text-overlay` for backgrounds and texts respectively. You can extend other tailwind utilities here like padding and margin etc.

> Learn more about extending tailwind’s configuration [here](https://tailwindcss.com/docs/configuration).

Now that we have that new color added, we can move on to creating the modal itself.

## Creating the Modal

To create the modal, we need to write all our code inside the modal layout `div` element. Paste this snippet just below the `**<!--**` `***modal layout***` `**-->**` comment like so:

```html
<!-- Modal -->
	<div
		class="absolute w-4/5 px-6 py-10 bg-white rounded shadow-lg md:w-3/5 lg:w-2/5"
	>
		<div class="text-right">
			<button @click="toggleModal" class="text-4xl text-gray-600">
				&times;
			</button>
		</div>
		<h1 class="block text-3xl font-bold text-center text-gray-800">
			One more step!
		</h1>
		<p class="block mt-2 text-base font-light text-center text-gray-700">
			We sent a One Time Password (OTP) to abc.xyz@email.com.
		</p>
		<div class="flex px-16 mt-6">
			<input type="text" class="w-1/4 h-16 text-center border-2" />
			<input type="text" class="w-1/4 h-16 text-center border-2" />
			<input type="text" class="w-1/4 h-16 text-center border-2" />
			<input type="text" class="w-1/4 h-16 text-center border-2" />
		</div>
		<div class="px-6 mt-6">
			<button
				class="block w-full px-6 py-3 text-white uppercase bg-blue-500 rounded-lg shadow-lg focus:bg-blue-600 hover:bg-blue-600"
			>
				Continue
			</button>
		</div>
	</div>
</div>
```

I already explained the padding, rounded, and shadow classes, so, let's talk about the responsive width and positioning.

First, we want to make sure we position the modal as absolute so that it is above the modal layout. Then we apply responsive widths that span 4/5(80%) of the entire width of the screen on small screens, 3/5(60%) on medium screens, and 2/5(40%) on large screens and above.

> **NOTE**: By default, tailwind has four breakpoints; `sm`, `md`, `lg`, and `xl` each corresponding to `640px`, `768px`, `1024px`, and `1200px` respectively. These are highly customizable as well. For more information, check out this [guide](https://tailwindcss.com/docs/breakpoints/#app).

We’ve also positioned the close button to the right of the screen, and as you can see here when the button is clicked, we will invoke the same `toggleButton` function.

One part I want to talk about is the classes present on the `input` element. You’ll notice that we have the same classes listed four times. Well, this right here can be solved by extracting those classes into a Tailwind `@apply` directive, let me show you.

Now open `src/assets/css/tailwind.css` and paste this snippet in between where we have:

```css
@tailwind components;
/* we will write our @apply directives here */
.input {
	@apply w-1/4 h-16 text-center border-2;
}
@tailwind utilities;
```

We we’ve done here is extract the classes that were on the `input` element and applied it to the `.input` class. Now go back to the `src/App.vue` and replace those classes on all four `input`s with `input` class, like so:

```html
<!-- other elements -->
<input type="text" class="input" />
<input type="text" class="input" />
<input type="text" class="input" />
<input type="text" class="input" />
<!-- other elements -->
```

Now run `npm run build:css` to regenerate the newly created `input` class.

Next, let’s talk about the `button`. By now we’re familiar with spacing and color utility classes. I want to drive our focus to the following classes `**rounded-lg shadow-lg focus:bg-blue-600 hover:bg-blue-600**`.

Tailwind provides utilities like `rounded` and `shadow` for determining the border radius and shadow of an element. If for example, we wanted a more rounded corner, we could use the `rounded-xl` version instead or for a complete circle, we could use `rounded-full`. The shadow class is a bit similar in that it offers classes like `shadow-xs`, `shadow-sm`… `shadow-2xl`.

The last bit is the variants like `focus:` and `hover:`. From the button above, we defined those variants to help us apply a darker blue color when we hover or focus on the button, giving us visual feedback that the button has focus.

Here’s what the final result looks like:

![](https://paper-attachments.dropbox.com/s_40F9F42BE9CFC15F1C8DE01CE1AFB6209703713AD2DDDD525B8740C01F93C48D_1588303618491_image.png)

# Further Resources

The [official TailwindCSS documentation](https://tailwindcss.com/) is where I’d recommend you start from. It has everything you’ll need to get up and running. Also, check out the [YouTube channel](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ) of the creator; [Adam Wathan](https://adamwathan.me/), where he occasionally builds cool stuff.

# Conclusion

In this tutorial, we learned how to setup TailwindCSS in a Vue application, built a modal with no custom CSS, and did it all in about 10 minutes. Now, there’s a lot we didn’t cover in this tutorial like adding custom variants, plugins, and much more. Well, that’s why this is, in fact a **“Super Simple Introduction”**.
