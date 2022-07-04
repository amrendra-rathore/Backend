# 5 Features of VS Code

- IntelliSense
- The Integrated CLI (Command Line Interface)
- Multi-Cursor Shortcuts
- Run and Debug
- Extensible and customizable due to Plugins and extensions


# 8 Best Plugins for VS Code

## 1. GitLens

Visual Studio Code comes with basic support for Git functionality. However, it is very incomplete.

GitLens simply helps you better understand code. Quickly glimpse into who changed a line or code block, why, and when. Jump back through history to gain further insights into how and why the code evolved. Effortlessly explore the history and evolution of a code base. It is powerful, feature-rich, and highly customizable to meet your needs.

There are other plugins that aim to fill that gap, but they don’t come close to what GitLens offers. Instead of having to install five different plugins to cover everything, you just need one.

## 2. Live Share

At the moment, when doing pair programming, the regular practice is to share the screen via Zoom or any other provider. If you have tried that, you know its flaws. There’s a lot of room for improvement. This plugin aims to fill this gap.

This plugin will let you do pair programming remotely. It currently supports up to 30 people. It is feature-packed. You don’t even need to jump on a Zoom call anymore. This plugin provides a built-in chat or build-in audio calls.

Starting a session is super easy. After creating the session, you will get a URL to give to your colleagues.

## 3. VS Code Remote Development

This extension provides seamless development in containers remotely on physical or virtual machines. You don’t need to run anything on the server. Just SSH to the machine using this extension.
GIF of extension in action

Why is this useful? You can better inspect code on remote machines or just have a remote machine where you have all your development tools and edit the code there. That means that you can turn your laptop into just a client and have all the hungry resources executing in another machine. You are then able to have all your work-related code sandboxed and independent of your personal data.

Plugins installed in the remote machine won’t be installed in the client machine. That keeps things pretty tidy.
Diagram showing how the extension works

Some companies are even providing remote machines to their employees. They cut the cost of configuration time by a lot and the companies can be sure that their employees have capable machines with which they can develop their product.

## 4. Peacock

Do you switch between different projects often? This extension will help you customize each project so you can have some visual feedback on what you are currently working on.

It comes with some nice predefined colors but also lets you add your own. My favorite? The “Mandalorian Blue.” Such a cool name.

## 5. Bracket Pair Colorizer 2

This is a very simple yet very useful extension. It allows matching brackets to be identified with colors. The user can define which characters to match and which colors to use.

I’m very happy with the default behavior, although it’s highly customizable.

## 6. Color Highlight

Another simple yet useful tool. It will simply highlight CSS/web colors found in your document.

## 7. ESLint

A plugin that integrates ESLint into VS Code. You will need to have ESLint installed for it to work and provide an .eslintrc configuration file.

It has a lot of configuration options that are worth checking out.

## 8. Prettier

An extension to support Prettier, which is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.

This tool is definitely a must on big projects so you can ensure a readable codebase. As Prettier is highly configurable, all your team needs to do is agree on its config.

You will need to tell VS Code where the .prettierrc configuration file lives or have it in the root folder.
