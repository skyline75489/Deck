Deck
====

A tiny Github client, powered by [React Native](https://github.com/facebook/react-native). 

**Warning**: This project is still under development.

Development
-----------

**Notice**: This repo uses a modified version of [react-native-icons](https://github.com/corymsmith/react-native-icons) and [FontAwesomeKit](https://github.com/PrideChung/FontAwesomeKit) which added [Octicons](http://octicons.github.com/) support. I've opened a [PR](https://github.com/PrideChung/FontAwesomeKit/pull/50) but haven't received response yet. If you are going to run this, these are my [react-native-icons fork](https://github.com/skyline75489/react-native-icons) and [FontAwesomeKit fork](https://github.com/skyline75489/FontAwesomeKit). 

Besides, you'll need to request a Personal access token [here](https://github.com/settings/tokens) and create a `Secrets.js` like this:

```javascript
module.exports = {
    token: 'token YOUR_TOKEN',
};
```

And put it under `App/Common`.


Screenshots
-----------

![1](./Screenshots/1.png)

![2](./Screenshots/2.png)

![3](./Screenshots/3.png)


License
-------

MIT License

